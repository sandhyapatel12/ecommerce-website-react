import { createContext, useContext, useReducer, useEffect } from "react";
import { useCustomProductContext } from "./ProductContext";
import FilterReducer from "../reducer/FilterReducer";

//create context api
const FilterContext = createContext();

//set object into initialState
// set all initialState data into state 
const initialState = {
    filterProducts: [],  //all api data included
    allProducts: [],  //all api data included
    gridView: true,  //display products in gridview
    sortingValue: "lowest",  //user can get products using sorting
    filterData: {
        text: " ", //for search bar
        category: "all",
        company: "all",
        colorData: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}

//create provider
const FilterProvider = ({ children }) => {

    //destructure product from productContext using custom hook useCustomProductContext
    const { products } = useCustomProductContext();

    const [state, dispatch] = useReducer(FilterReducer, initialState);

    //set gridview
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    //set listview
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }

    //sorting function
    const sorting = (e) => {
        let userValue = e.target.value;  //user click on which data that we can gets
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }

    //updatefilter function
    const updateFilter = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        return dispatch({ type: "UPDATE_FILTER_DATA", payload: { name, value } })

    }

    //clear filters
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" })
    
    }

    useEffect(() => {

        //work when user search into filter section
        dispatch({ type: "GET_FILTER_SECION_DATA" })

        //work when user select price
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [products, state.sortingValue, state.filterData])


    //only one time call dispatch method when app first time render
    useEffect(() => {

        //dispatch give order to action for do work as per instuctions -- action pass as a argument at ProductReducer function
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products })
    }, [products])

    // set all initialState data into state and passing value through that data
    return (<FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilter, clearFilters }}>
        {children}
    </FilterContext.Provider>)
}

//custom hook
const useCustomFilter = () => {
    return useContext(FilterContext)
}

export { FilterContext, FilterProvider, useCustomFilter };

