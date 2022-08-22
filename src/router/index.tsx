import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Invoice } from "../components/Invoice";
import { Bookkeeper } from "../pages/Bookkeeper";
import { Expenses } from "../pages/Expenses";
import { Home } from "../pages/Home";
import Invoices from "../pages/Invoices";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="bookkeeper" element={<Bookkeeper />}>
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="invoices" element={<Invoices />}>
                        <Route
                            index
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>Select an invoice</p>
                                </main>
                            }
                        />
                        <Route path=":invoiceId" element={<Invoice />} />
                    </Route>
                </Route>
                <Route
                    path="*"
                    element={
                        <main>
                            <p>There&apos;s nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
