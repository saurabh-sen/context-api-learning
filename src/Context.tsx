import { createContext, useState } from "react";

export const CartContext = createContext({});

const Context = ({ children }:any) => {

    const [cart, setCart] = useState<any>([]);

    return (
        <CartContext.Provider value={{ cart, setCart }} >{children}</CartContext.Provider>
    )
};

export default Context;