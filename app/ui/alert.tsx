import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDemo() {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="p-12">
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Brawo!</AlertTitle>
          <AlertDescription>
            Dodałeś właśnie nowy Egzamin Zawodowy!
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
