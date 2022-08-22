import React from "react";
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { QueryNavLink } from "../../components/QueryNavLink";
import { getInvoices } from "../../data";

export default function Invoices() {
    const invoices = getInvoices();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        const filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
                {invoices
                    .filter((invoice) => {
                        const filter = searchParams.get("filter");
                        if (!filter) return true;
                        const name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((invoice) => (
                        <QueryNavLink
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    marginBottom: "1em 0",
                                    color: isActive ? "red" : "",
                                };
                            }}
                            to={`/bookkeeper/invoices/${invoice.number}`}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </QueryNavLink>
                    ))}
            </nav>
            <Outlet />
        </div>
    );
}
