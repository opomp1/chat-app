import { Loader2 } from "lucide-react";
import React from "react";

const Backdrop = () => {
  return (
    <div className="h-[100svh] w-screen bg-white/30 fixed backdrop-blur-sm z-50 flex items-center justify-center">
      <Loader2 className="size-10 animate-spin" />
    </div>
  );
};

export default Backdrop;
