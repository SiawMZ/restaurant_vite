import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart,cartItems } = useShoppingCart();

  return (
    <>
      {isOpen && (
        <div
          className="-right-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex justify-between py-3 px-4 border-b dark:border-gray-700">
            <h3 className="font-bold text-gray-800 dark:text-white">Cart</h3>
            <button
              type="button"
              className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={closeCart}
            >
              <span className="sr-only">Close modal</span>
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-800 dark:text-gray-400 grid gap-8">
              {cartItems.map(item=>(
              <CartItem key={item.id} {...item}/>)) }
            </p>


          <div className="my-14 -mr-40 font-bold text-2xl">
            Total:{" "}$
            {cartItems.reduce((total,cartItem)=>{
                  const item=storeItems.find(i=>i.id===cartItem.id)
                  return total+ (item?.price ||0)* cartItem.quantity
            },0)}
          </div>
          </div>
        </div>
      )}
    </>
  );
}
