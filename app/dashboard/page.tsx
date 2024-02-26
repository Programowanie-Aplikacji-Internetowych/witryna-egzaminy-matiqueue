import { AlertDemo } from "../ui/alert";
import { DataTableDemo } from "../ui/data-table";
import { NavigationMenuDemo } from "../ui/navigation";

export default function Dashboard() {
  return (
    <main>
      <NavigationMenuDemo />
      <div className="justify-center">
        <div className="p-10">
          <DataTableDemo />
        </div>
      </div>
      <AlertDemo />
    </main>
  );
}
