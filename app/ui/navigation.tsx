"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./dark-mode";
import { AvatarDemo } from "./avatar";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Egzamin na programistę",
    href: "/docs/professional-exams/programmer",
    description:
      "Przygotowuje do pracy jako programista poprzez sprawdzenie umiejętności w zakresie algorytmów, języków programowania i rozwiązywania problemów informatycznych.",
  },
  {
    title: "Egzamin z algorytmów",
    href: "/docs/professional-exams/algorithms",
    description:
      "Ocenia zdolność do projektowania i analizy algorytmów, kluczową umiejętność w pracy programisty, szczególnie w obszarach takich jak optymalizacja i złożoność obliczeniowa.",
  },
  {
    title: "Egzamin z baz danych",
    href: "/docs/professional-exams/database",
    description:
      "Testuje znajomość tworzenia, zarządzania i optymalizacji baz danych, co jest kluczowe w projektowaniu i wdrażaniu aplikacji opartych na danych.",
  },
  {
    title: "Egzamin z bezpieczeństwa IT",
    href: "/docs/professional-exams/security",
    description:
      "Sprawdza umiejętności z zakresu zabezpieczeń sieciowych i aplikacji, niezbędne w środowisku pracy informatyka z uwagi na rosnące zagrożenia cybernetyczne.",
  },
  {
    title: "Egzamin z projektowania oprogramowania",
    href: "/docs/professional-exams/software-design",
    description:
      "Ocenia umiejętność projektowania oprogramowania, w tym architektury systemów, wzorców projektowych i zarządzania cyklem życia aplikacji.",
  },
  {
    title: "Egzamin z technologii webowych",
    href: "/docs/professional-exams/web-technologies",
    description:
      "Testuje wiedzę na temat technologii webowych, takich jak HTML, CSS, JavaScript i narzędzia do budowy aplikacji internetowych.",
  },
];

export function NavigationMenuDemo() {
  return (
    <div className="sticky top-0 p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <AvatarDemo />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Rozpocznij</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md "
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        O mnie
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Jestem Full Stack Developerem specjalizującym się
                        głównie w fr. Next.js, frameworku do routingu apek React
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Wstęp">
                  Aby rozpocząc zabawe stwórz nowy projekt.
                </ListItem>
                <ListItem href="/docs/installation" title="Egzaminy">
                  Lista Egzaminów Informatycznych: INF.02, INF.03, INF.04
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Jak to działa?"
                >
                  Aplikacja opiera sie na bazie danych MongoDB i sluzy do
                  zapisywania swojego progresu w nauce do egzaminow zawodowych
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Egzaminy</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentacja
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
