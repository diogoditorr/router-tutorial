import React from "react";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";

interface IQueryNavLinkProps extends NavLinkProps {
    to: string;
}

export function QueryNavLink({ to, ...rest }: IQueryNavLinkProps) {
    const location = useLocation();

    return <NavLink to={to + location.search} {...rest} />;
}
