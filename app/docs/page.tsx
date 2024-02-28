import { AlertDemo } from "../ui/alert";
import { DropdownMenuDemo } from "../ui/dropdown-menu";
import { NavigationMenuDemo } from "../ui/navigation";
import { ProgressDemo } from "../ui/progress";

export default function Documentation() {
  return (
    <main>
      <div className="flex top-0 p-5">
        <DropdownMenuDemo />
        <NavigationMenuDemo />
      </div>
      <div className="absolute inset-0 flex justify-center items-center p-6">
        <ProgressDemo />
      </div>
      <div>
        <AlertDemo
          alertTitle="Uwaga!"
          alertDescription="Poczekaj az strona sie załaduje, aby zobaczyć ;)"
        />
      </div>
    </main>
  );
}
