import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context";

const Cart = () => {
  const { cart } = useContext<any>(CartContext);
  const [total, setTotal] = useState<any>();

  useEffect(() => {
    setTotal(cart.reduce((acc: any, curr: any) => acc + curr.price, 0));
  }, [cart])
  

  return (
    <div className="cart flex gap-5 flex-wrap justify-center items-center mt-8">
      <div>
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          total :- 💰 {total}
        </h5>
      </div>
      {cart.map((item: any) => {
        return (
          <div className="flex justify-center" key={item.id}>
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <img
                className="rounded-t-lg"
                src={item.thumbnailUrl}
                // src="{https://mdbootstrap.com/img/new/standard/nature/182.jpg}"
                alt="adfsf"
              />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Item id :- {item.id}
                </h5>
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Item id :- 💲{item.price}
                </h5>
                <p className="text-gray-700 text-base mb-4">{item.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
