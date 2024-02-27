import { CardWithForm } from "./ui/create-project";
import { NavigationMenuDemo } from "./ui/navigation";
import { SonnerDemo } from "./ui/toast";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="p-6">
        <NavigationMenuDemo />
      </div>

      <div className="flex flex-grow items-center justify-center">
        <CardWithForm />
      </div>
    </main>
  );
}
