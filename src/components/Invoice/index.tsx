import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../../data";

export function Invoice() {
    const navigate = useNavigate();
    const location = useLocation();
    const { invoiceId } = useParams();
    const invoice = getInvoice(parseInt(invoiceId || "0", 10));

    if (!invoice) {
        return <div>Invoice not found</div>;
    }

    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("../../invoices" + location.search);
                    }}
                >
                    Delete
                </button>
            </p>
        </main>
    )
}
