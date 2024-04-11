import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Subscribe = () => {
  return (
    <form className="hidden xl:block" action="">
      <Label htmlFor="email" className="font-bold text-slate-600">
        Subscribe
      </Label>
      <div className="mt-2 flex flex-col xl:flex-row gap-2">
        <Input id="email" type="email" placeholder="Enter email address" />
        <Button variant={"custom"}>Subscribe</Button>
      </div>
    </form>
  );
};
