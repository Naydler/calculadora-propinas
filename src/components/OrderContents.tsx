import { orderItem } from "../types";

type OrderContentsProps = {
    order: orderItem[];
};

export default function OrderContents({ order }: OrderContentsProps) {
    return (
        <div>
            <h2 className="text-4xl font-black">Consumo</h2>
            <div className="space-y-3 mt-5">
                {order.length === 0 ? 
                <p className="text-center">No hay elementos en la orden</p> 
                :(
                    order.map(item => (
                        <div key={item.id} className="flex justify-between">
                            <p>{item.name}</p>
                            <p>{item.quantity}</p>
                        </div>
                    ))
            )
            }
            </div>
        </div>
    );
}