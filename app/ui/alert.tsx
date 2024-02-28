import { ReactNode } from "react";
import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertDemoProps {
  alertTitle: ReactNode;
  alertDescription: ReactNode;
}

export function AlertDemo({ alertTitle, alertDescription }: AlertDemoProps) {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="p-12">
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>{alertTitle}</AlertTitle>
          <AlertDescription>{alertDescription}</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
