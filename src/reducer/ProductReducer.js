const ProductReducer = (state, action) => {
    switch (action.type) {

        //set object for feature products
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "PRODUCT_API":
            const featureData = action.payload.filter((e) => {
                return e.featured === true;  //featured is available at api data
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,   //set api data into products
                featureProdcuts: featureData
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }


        //set object for single products
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true
            }
        case "SINGLE_PRODUCT_API":
            return {
                ...state,
                isSingleLoading: false,
                singleproductData: action.payload
            }
        case "SINGLE_API_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isSingleError: true
            }

        default:
            return state;
    }

}

export default ProductReducer
