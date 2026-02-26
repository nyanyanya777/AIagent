"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import {
  type CalendarEvent, type SlackMention, type Task, type Agent, type Report, type UserProfile,
  calendarEvents as defaultCal, slackMentions as defaultSlack,
  initialTasks, initialAgents, initialReports, defaultProfile,
} from "@/lib/mock-data";

// ── Chat message types ──
export type MessageRole = "user" | "agent" | "system";
export type MessageKind = "text" | "summary" | "task" | "detect" | "permission";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  kind: MessageKind;
  content: string;
  timestamp: string;
  // For task messages
  taskId?: string;
  taskTitle?: string;
  taskProgress?: number;
  taskEta?: string;
  // For permission messages
  permissionTitle?: string;
  permissionDesc?: string;
  permissionStatus?: "pending" | "approved" | "rejected";
  // For detect messages
  quickReplies?: string[];
  // For summary
  summaryData?: { label: string; value: string; color?: string }[];
}

// ── Onboarding state ──
export interface OnboardingState {
  integrations: string[];
  roles: string[];
  tasks: string[];
  completed: boolean;
}

// ── App State ──
interface AppState {
  // User
  profile: UserProfile;
  setProfile: (p: UserProfile) => void;

  // Onboarding
  onboarding: OnboardingState;
  setOnboarding: (o: OnboardingState) => void;

  // Chat
  messages: ChatMessage[];
  addMessage: (m: ChatMessage) => void;
  updateMessage: (id: string, updates: Partial<ChatMessage>) => void;

  // Data
  calendar: CalendarEvent[];
  slack: SlackMention[];
  markSlackRead: (id: string) => void;
  tasks: Task[];
  addTask: (t: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  agents: Agent[];
  updateAgent: (id: string, updates: Partial<Agent>) => void;
  reports: Report[];
  updateReport: (id: string, updates: Partial<Report>) => void;

  // Connection settings
  connections: Record<string, boolean>;
  toggleConnection: (service: string) => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [onboarding, setOnboarding] = useState<OnboardingState>({ integrations: [], roles: [], tasks: [], completed: false });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [calendar] = useState<CalendarEvent[]>(defaultCal);
  const [slack, setSlack] = useState<SlackMention[]>(defaultSlack);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  const [reports, setReports] = useState<Report[]>(initialReports);
  const [connections, setConnections] = useState<Record<string, boolean>>({
    Gmail: true, Slack: false, Outlook: false, Teams: false,
  });

  const addMessage = (m: ChatMessage) => setMessages((prev) => [...prev, m]);
  const updateMessage = (id: string, updates: Partial<ChatMessage>) =>
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, ...updates } : m)));

  const markSlackRead = (id: string) =>
    setSlack((prev) => prev.map((s) => (s.id === id ? { ...s, unread: false } : s)));

  const addTask = (t: Task) => setTasks((prev) => [...prev, t]);
  const updateTask = (id: string, updates: Partial<Task>) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...updates } : t)));

  const updateAgent = (id: string, updates: Partial<Agent>) =>
    setAgents((prev) => prev.map((a) => (a.id === id ? { ...a, ...updates } : a)));

  const updateReport = (id: string, updates: Partial<Report>) =>
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, ...updates } : r)));

  const toggleConnection = (service: string) =>
    setConnections((prev) => ({ ...prev, [service]: !prev[service] }));

  return (
    <AppContext.Provider value={{
      profile, setProfile,
      onboarding, setOnboarding,
      messages, addMessage, updateMessage,
      calendar, slack, markSlackRead,
      tasks, addTask, updateTask,
      agents, updateAgent,
      reports, updateReport,
      connections, toggleConnection,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
}
