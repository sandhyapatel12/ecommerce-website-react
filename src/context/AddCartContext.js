import { createContext, useContext, useEffect, useReducer } from "react";
import AddCartReducer from "../reducer/AddCartReducer";

//create context api
const AddCartContext = createContext();

const initialState =
{
    cart: [],  //empty cart for store all produtcs
    total_products: "",
    total_productQuantity: "",
    shipping_fee: 50000,
}

//create provider
const AddCartProvider = ({ children }) => {

    //Usereducer
    const [state, dispatch] = useReducer(AddCartReducer, initialState)


    //add products into cart
    const AddtoCartFunc = (id, productColor, productQuantity, singleproductData) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, productColor, productQuantity, singleproductData } })
    }

    //remove products from cart
    const removeProduct = (id) =>
    {
        dispatch({type: "REMOVE_PRODUCT", payload:id })
        console.log("remove product...");
    }

    //add data into local stroage
    useEffect(() => {
      localStorage.setItem("add product", )
    }, [])
    

    // set all initialState data into state and passing value through that data
    return (<AddCartContext.Provider value={{ ...state, AddtoCartFunc, removeProduct }}>
        {children}
    </AddCartContext.Provider>)
}

//custom hook
const useCustomcartContext = () => {
    return useContext(AddCartContext)
}

export { useCustomcartContext, AddCartProvider};