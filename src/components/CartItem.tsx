import { useShoppingCart } from "@/context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"


type CartItemProps={
    id:number
    quantity:number
}

export function CartItem ({id, quantity} : CartItemProps) {
    const {removeFromCart}=useShoppingCart()
    const item=storeItems.find(i=>i.id===id)
    if (item==null) return null

    return (
    <div>
        <Separator className="my-6" />
        <div className="flex h-1 items-center space-x-4 text-sm">
          <img src={item.imgUrl} 
          style={{width:"125px",height:"75px", objectFit:"cover"}}/>
          <Separator orientation="vertical" />
          <div className="text-base me-auto">{item.name} {quantity>1 && <span className="text-muted" style={{fontSize:".65rem"}}>
            x{quantity}</span>}
            <div className="text-muted" style={{fontSize:".75rem"}}>
            ${item.price}
          </div>
          </div>

          <Separator  orientation="vertical" />
          <div className="font-bold">${item.price * quantity}</div>

          <Button className="rounded-full hover:bg-slate-300" variant="ghost" onClick={()=>removeFromCart(item.id)}>&times;</Button>
        </div>
    </div>
    );
}