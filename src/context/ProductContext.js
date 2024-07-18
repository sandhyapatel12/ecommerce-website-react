import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../reducer/ProductReducer";
import { type } from "@testing-library/user-event/dist/type";

//create context api
const ProductContext = createContext();

//define api 
const API = "https://api.pujakaitem.com/api/products";

//set object into initialState
const initialState = {
    
    //set defalut object for feature products
    isLoading: false,
    isError: false,
    products: [],
    featureProdcuts: [],

    //set defalut object for single products
    isSingleLoading: false,
    singleproductData: {},
    isSingleError: false
}


//create ProductProvider
const ProductProvider = ({ children }) => {

    //dispatch give order to action for do work as per instuctions -- action pass as a argument at ProductReducer function
    const [state, dispatch] = useReducer(ProductReducer, initialState)

    //api call for feature products
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })

        //try catch also used for handle unwanted error
        try {
            const response = await axios.get(url);  //getting data from api
            // console.log(response)
            const productData = await response.data;  //destructure only data from whole response
            console.log(productData)
            dispatch({ type: "PRODUCT_API", payload: productData })  //in payload pass the data which required for do that work
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    //api call for single products
    const getsingleProducts = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })

        //try catch also used for handle unwanted error
        try {
            const response = await axios.get(url);  //getting data from api
            // console.log(response)
            const singleproductData = await response.data;  //destructure only data from whole response
            console.log(singleproductData)
            dispatch({ type: "SINGLE_PRODUCT_API", payload: singleproductData })  //in payload pass the data which required for do that work
        }
        catch (error) {
            dispatch({ type: "SINGLE_API_ERROR" })
        }
    }


    //only one time call getProduct function when app first time render
    useEffect(() => {
        getProducts(API);
    }, [])

    // set all initialState data into state and passing value through that data
    return <ProductContext.Provider value={{ ...state, getsingleProducts }}>
        {children}
    </ProductContext.Provider>
}

//custom hook
const useCustomProductContext = () => {
    return useContext(ProductContext)
}
export { ProductProvider, ProductContext, useCustomProductContext };