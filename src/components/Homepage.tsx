import { useContext } from "react";
import { CartContext } from "../Context";
import { data } from "./data";

const Homepage = () => {
  
  const { cart, setCart } = useContext<any>(CartContext);
  
  return (
    <div className="homepage flex gap-5 flex-wrap justify-center items-center mt-8">
      {data.map((item) => {
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
                {cart.includes(item) ? (
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => {
                      setCart(cart.filter((i: any) => i.id !== item.id));
                    }}
                  >
                    remove from cart
                  </button>
                ) : (
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => {
                      setCart([...cart, item]);
                    }}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
