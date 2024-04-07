"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const ExtraInfo = () => {
  const [buttonState, setButtonState] = useState<string>("description");

  return (
    <div className="min-w-4/5 m-auto min-h-48">
      <div className="flex gap-2 ">
        <Button
          onClick={() => setButtonState("description")}
          className={`font-bold hover:text-emerald-500 ${
            buttonState === "description" && "text-emerald-500"
          }`}
          variant={"link"}
        >
          Description
        </Button>
        <Button
          onClick={() => setButtonState("addInfo")}
          className={`font-bold hover:text-emerald-500 ${
            buttonState === "addInfo" && "text-emerald-500"
          }`}
          variant={"link"}
        >
          Additional info
        </Button>
        <Button
          onClick={() => setButtonState("reviews")}
          className={`font-bold hover:text-emerald-500 ${
            buttonState === "reviews" && "text-emerald-500"
          }`}
          variant={"link"}
        >
          Reviews
        </Button>
      </div>
      <div className="px-4 text-sm">
        <p className="text-slate-500 font-medium">
          {buttonState === "description" &&
            "Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Mi quis hendrerit dolor magna eget. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. A cras semper auctor neque vitae tempus. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Auctor neque vitae tempus quam pellentesque. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor condimentum lacinia quis vel eros. Gravida dictum fusce ut placerat orci nulla pellentesque."}
          {buttonState === "addInfo" &&
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Vel facilisis volutpat est velit egestas dui. Eget mi proin sed libero enim sed faucibus. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Dui accumsan sit amet nulla. Quam elementum pulvinar etiam non quam lacus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Pretium quam vulputate dignissim suspendisse in est ante. Consequat interdum varius sit amet."}
          {buttonState === "reviews" &&
            "Nisl tincidunt eget nullam non nisi est sit. Cras pulvinar mattis nunc sed blandit libero volutpat. Habitant morbi tristique senectus et netus et malesuada. Interdum varius sit amet mattis. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Vivamus at augue eget arcu dictum. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Quisque non tellus orci ac auctor augue mauris. Quis viverra nibh cras pulvinar mattis nunc. Risus pretium quam vulputate dignissim suspendisse in est ante. Lorem donec massa sapien faucibus et molestie."}
        </p>
      </div>
    </div>
  );
};
