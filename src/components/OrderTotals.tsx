import { useMemo } from "react";
import { orderItem } from "../types";
import { formatCurrency } from "../helpers";


type OrderTotalProps = {
    order: orderItem[];
    tip : number;
};

export default function OrderContents({ order, tip }: OrderTotalProps) {

    const subtotalAmount = useMemo(() => {
        return order.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    , [order]);

    const tipAmount = useMemo(() => subtotalAmount * tip ,[tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount ,[tip, order])

    
    return (
        <>
            <div className="space-y-3">
                <h2 className="text-2xl font-black">Total y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>

                
            </div>

            <button></button>
        </>
    );
}