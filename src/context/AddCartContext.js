import { createContext, useContext, useEffect, useReducer } from "react";
import AddCartReducer from "../reducer/AddCartReducer";

//create context api
const AddCartContext = createContext();

const getLocalCartData = () =>
{
    let localCartData = localStorage.getItem("AddtoCart")
    if(localCartData == [])  //when page first time render get empty array
    {
        return [];
    }
    else{
        return JSON.parse(localCartData)  //convert data into javascript object
    }
}

const initialState =
{
    // cart: [],  //empty cart for store all produtcs
    cart: getLocalCartData(),  //function for store data into localstorage
    total_items: "",    //includes all items which is display in navbar in cart icon 
    total_price: "",    //includes final price of all items
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

    //increament product into cart
    const setIncrese = (id) =>
    {
        dispatch({ type: "INCRESE_QUANTITY", payload: id})
    }

    //decrement product into cart
    const setDecrese = (id) =>
    {
        dispatch({ type: "DECRESE_QUANTITY", payload: id})

    }

    //remove products from cart
    const removeProduct = (id) =>
    {
        dispatch({type: "REMOVE_PRODUCT", payload:id })
    }

    //clear all the products from cart
    const clearCart = () =>
    {
        dispatch({type: "CLEAR_CART"})
    }

    //add data into local stroage
    useEffect(() => {
        //store data as a key value pair
        //can't use cart directly because cart includes in initialstate and initial state in our actual state so use also "state.cart"
        localStorage.setItem("AddtoCart", JSON.stringify(state.cart) )  //convert cart into string because in local storage data store in string formate 

        //display cart total items which is in navbar
        dispatch({type: "CART_TOTAL_ITEMS"})
    }, [state.cart])
    

    // set all initialState data into state and passing value through that data
    return (<AddCartContext.Provider value={{ ...state, AddtoCartFunc, removeProduct, clearCart, setIncrese, setDecrese }}>
        {children}
    </AddCartContext.Provider>)
}

//custom hook
const useCustomcartContext = () => {
    return useContext(AddCartContext)
}

export { useCustomcartContext, AddCartProvider};