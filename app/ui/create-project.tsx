import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Utwórz Nowy Egzamin</CardTitle>
        <CardDescription>Dodaj nowy egzamin jednym klikiem!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nazwa Egzaminu</Label>
              <Input id="name" placeholder="Twoja nazwa egzaminu" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Typ Egzaminu</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Wybierz" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">INF.02 / EE.08</SelectItem>
                  <SelectItem value="sveltekit">INF.03 / EE.09</SelectItem>
                  <SelectItem value="astro">INF.03 / EE.10</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Anuluj</Button>
        <Button>
          <Link href="/dashboard">Wybierz</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
