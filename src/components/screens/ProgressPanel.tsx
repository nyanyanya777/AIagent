'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function ProgressPanelEmpty() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-foreground">Progress Panel (Empty)</h2>
      <p className="mt-2 text-sm text-muted-foreground">No progress data available</p>
    </Card>
  );
}

export function ProgressPanelPopulated() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-foreground">Progress Panel (Populated)</h2>
      <div className="mt-4 space-y-2">
        <div>
          <p className="text-sm text-muted-foreground">Step 1: Setup</p>
          <Progress value={100} className="mt-1" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Step 2: Configuration</p>
          <Progress value={75} className="mt-1" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Step 3: Deployment</p>
          <Progress value={25} className="mt-1" />
        </div>
      </div>
    </Card>
  );
}
