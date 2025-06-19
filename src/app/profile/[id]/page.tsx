"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function page({ params }: any) {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">{params.id}</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
