'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function WorksContext() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-foreground">Screen 8a: Works (Context)</h1>
        <div className="mt-8 grid gap-4">
          <Card className="p-4">
            <h2 className="font-semibold text-foreground">Context Information</h2>
            <Badge className="mt-2">Active</Badge>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function WorksOutput() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-foreground">Screen 8b: Works (Output)</h1>
        <div className="mt-8 grid gap-4">
          <Card className="p-4">
            <h2 className="font-semibold text-foreground">Output Results</h2>
            <pre className="mt-2 overflow-auto rounded bg-muted p-2 text-sm">
{`{
  "status": "success",
  "data": []
}`}
            </pre>
          </Card>
        </div>
      </div>
    </div>
  );
}
