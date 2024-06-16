import { useState } from "react"
import { menuItem, orderItem } from "../types"

export default function useOrder(){
    const [order, setOrder] = useState<orderItem[]>([])


    const addItem  = (item: menuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        
        if(itemExist){
            const updateOrder = order.map(orderItem => orderItem.id === item.id 
                ? {...orderItem, quantity: orderItem.quantity + 1} : 
                orderItem
            )
            setOrder(updateOrder)
        }else{
        const newItem : orderItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }
    console.log(order)
}

    return{
        order,
        addItem
    }
}