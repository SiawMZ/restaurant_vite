import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps= {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}:StoreItemProps) {
    const {getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    }=useShoppingCart()

    const quantity=getItemQuantity(id)

    return (
        //<div style={{ overflow: 'auto', maxHeight: '300px' }}> {/* Adjust the max height as needed */}
  //{/* Your grid and items */}
        <div className="max-w-sm rounded overflow-hidden bg-gray-200 shadow-lg">
        <img className="w-full h-64" src={imgUrl}/>
            <div className="px-6 py-4 align-baseline text-center md:text-center mb-6">
            <span className="font-bold text-xl mb-2">{name}</span>
            <br></br>
            <span className="text-gray-700 text-base"> ${price}</span>
            </div>
            <div className="mt-auto mb-6">
                {
                quantity===0 ? (<button className="rounded-full w-3/6 border-2 p-2 bg-slate-500" onClick={()=>increaseCartQuantity(id)}>Add to cart</button>)
                : <div className="align-middle flex-col" style={{gap:".5rem"}}>
                        <div className="align-middle justify-center" style={{gap:".5rem"}}>
                            <button onClick={()=>decreaseCartQuantity(id)}>-</button>
                            <div><span className="text-lg">{quantity}</span> in cart</div>
                            <button onClick={()=>increaseCartQuantity(id)}>+</button>
                            </div> 
                    <button className="text-red-100 text-sm rounded-full p-2 border-2 bg-red-700" onClick={()=>removeFromCart(id)}>Remove</button>
                    </div>
                    }
            </div>
        </div>
        //</div>

      );
    }   
