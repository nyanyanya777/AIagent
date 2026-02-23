import penParsed from '@/data/pen-parsed.json';

export type ThemeMode = 'light' | 'dark';
export type ThemeBase = 'Default' | 'Gray' | 'Slate' | 'Stone' | 'Zinc';

interface ThemeValue {
  value: string;
  theme?: {
    Mode?: ThemeMode;
    Base?: ThemeBase;
  };
}

interface ThemeVariable {
  type: string;
  value?: string; // For simple color variables
  values?: ThemeValue[]; // For theme-aware variables
}

// Parse the theme variables from the JSON
const themeData = penParsed.theme as Record<string, ThemeVariable>;

/**
 * Get the color value for a given CSS variable name, mode, and base
 */
function getColorValue(
  varName: string,
  mode: ThemeMode = 'light',
  base: ThemeBase = 'Default'
): string | null {
  const variable = themeData[varName];
  if (!variable) return null;

  // Handle simple color variables
  if (variable.type === 'color' && variable.value) {
    return variable.value;
  }

  // Handle theme-aware variables
  if (variable.type === 'color-theme-aware' && variable.values) {
    const values = variable.values;
    // Find the most specific match
    for (const themeValue of values) {
      if (!themeValue.theme) {
        // Default value
        if (mode === 'light' && base === 'Default') return themeValue.value;
        continue;
      }

      const matchesMode = !themeValue.theme.Mode || themeValue.theme.Mode === mode;
      const matchesBase = !themeValue.theme.Base || themeValue.theme.Base === base;

      if (matchesMode && matchesBase) {
        return themeValue.value;
      }
    }

    // Fallback to first value if available
    return values[0]?.value || null;
  }

  return null;
}

/**
 * Generate CSS variable declarations for a given theme mode and base
 */
export function generateThemeCSS(mode: ThemeMode = 'light', base: ThemeBase = 'Default'): string {
  const cssVars: Record<string, string> = {};

  for (const [varName, variable] of Object.entries(themeData)) {
    const color = getColorValue(varName, mode, base);
    if (color) {
      cssVars[varName] = color;
    }
  }

  return Object.entries(cssVars)
    .map(([name, value]) => `${name}: ${value};`)
    .join('\n  ');
}

/**
 * Get all theme variables as a CSS string
 */
export function getThemeVariables(mode: ThemeMode = 'light', base: ThemeBase = 'Default'): string {
  return generateThemeCSS(mode, base);
}

/**
 * Export color palette extracted from theme
 */
export const colorPalette = {
  light: {} as Record<string, string>,
  dark: {} as Record<string, string>,
};

// Build color palettes
Object.keys(themeData).forEach((varName) => {
  const lightColor = getColorValue(varName, 'light', 'Default');
  const darkColor = getColorValue(varName, 'dark', 'Default');

  if (lightColor) {
    colorPalette.light[varName] = lightColor;
  }
  if (darkColor) {
    colorPalette.dark[varName] = darkColor;
  }
});

/**
 * Get a specific color value
 */
export function getColor(varName: string, mode: ThemeMode = 'light'): string | null {
  return getColorValue(varName, mode, 'Default');
}

/**
 * Get all CSS variables as an object
 */
export function getCSSVariables(mode: ThemeMode = 'light'): Record<string, string> {
  const result: Record<string, string> = {};

  Object.keys(themeData).forEach((varName) => {
    const value = getColorValue(varName, mode, 'Default');
    if (value) {
      result[varName] = value;
    }
  });

  return result;
}

export default {
  generateThemeCSS,
  getThemeVariables,
  getColor,
  getCSSVariables,
  colorPalette,
};
