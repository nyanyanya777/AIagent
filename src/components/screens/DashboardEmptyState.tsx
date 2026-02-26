'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function DashboardEmptyState() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="mx-auto max-w-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-foreground">Screen 7a: Dashboard (Empty State)</h1>
        <p className="mt-4 text-muted-foreground">No data available yet</p>
        <Button className="mt-8">Get Started</Button>
      </Card>
    </div>
  );
}
