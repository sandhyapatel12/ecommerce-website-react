import { createContext, useContext, useReducer } from "react";
import AddCartReducer from "../reducer/AddCartReducer";

//create context api
const AddCartContext = createContext();

const initialState =
{
    cart: [],
    total_products: "",
    total_productQuantity: "",
    shipping_fee: 50000,
}

//create provider
const AddCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AddCartReducer, initialState)


    const AddtoCartFunc = (id, productColor, productQuantity, singleproductData) => {
        console.log('dispatch')
        dispatch({ type: "ADD_TO_CART", payload: { id, productColor, productQuantity, singleproductData } })
        // console.log("clicking on...")
    }

    // set all initialState data into state and passing value through that data
    return (<AddCartContext.Provider value={{ ...state, AddtoCartFunc }}>
        {children}
    </AddCartContext.Provider>)
}

//custom hook
const useCustomcartContext = () => {
    return useContext(AddCartContext)
}

export { useCustomcartContext, AddCartProvider};