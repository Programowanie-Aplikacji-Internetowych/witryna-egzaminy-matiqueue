import { AlertDemo } from "../ui/alert";
import { DataTableDemo } from "../ui/data-table";
import { DropdownMenuDemo } from "../ui/dropdown-menu";
import { NavigationMenuDemo } from "../ui/navigation";

export default function Dashboard() {
  return (
    <main>
      <div className="flex top-0 p-5">
        <DropdownMenuDemo />
        <NavigationMenuDemo />
      </div>

      <div className="justify-center">
        <div className="p-10">
          <DataTableDemo />
        </div>
      </div>
      <AlertDemo />
    </main>
  );
}
