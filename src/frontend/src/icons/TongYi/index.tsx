import { useDarkStore } from "@/stores/darkStore";
import React, { forwardRef } from "react";
import TongYiSVG from "./TongYiIcon";

export const TongYiIcon = forwardRef<
  SVGSVGElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  const isdark = useDarkStore((state) => state.dark).toString();
  return <TongYiSVG ref={ref} isdark={isdark} {...props} />;
});
