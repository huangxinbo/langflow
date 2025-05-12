import { Link, LinkProps, useParams } from "react-router-dom";
import { ENABLE_CUSTOM_PARAM } from "../feature-flags";
import { forwardRef } from "react";

export const CustomLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, ...props }, ref) => {
    const { customParam } = useParams();

    const newLocation =
      ENABLE_CUSTOM_PARAM && typeof to === "string" && to.startsWith("/")
        ? `/${customParam}${to}`
        : to;

    return <Link to={newLocation} {...props} ref={ref} />;
  }
);
