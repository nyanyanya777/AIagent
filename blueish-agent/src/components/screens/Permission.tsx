'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function PermissionAlert() {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="text-2xl">⚠</div>
        <div>
          <h2 className="font-semibold text-foreground">Permission Required</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This action requires additional permissions to proceed.
          </p>
        </div>
      </div>
    </Card>
  );
}

export function PermissionConfirm() {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="text-2xl">?</div>
        <div>
          <h2 className="font-semibold text-foreground">Confirm Permissions</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Grant the following permissions to continue?
          </p>
          <div className="mt-4 flex gap-2">
            <Button>Confirm</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
