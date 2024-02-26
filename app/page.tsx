import { CardWithForm } from "./ui/create-project";
import { NavigationMenuDemo } from "./ui/navigation";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <NavigationMenuDemo />

      <div className="flex flex-grow items-center justify-center">
        <CardWithForm />
      </div>
    </main>
  );
}
