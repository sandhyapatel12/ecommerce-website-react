const AddCartReducer = (state, action) => {
    // console.log('reducer',state);
    if (action.type === "ADD_TO_CART") {
        let { id, productColor, productQuantity, singleproductData } = action.payload;

        //check products that added by users to already added or not
        let checkExitsProduct = state.cart.find((curItem) =>
            curItem.id == id + productColor  //curItem.id(user added product) is equal to unique id(id + productColor)
        )

        if (checkExitsProduct) {
            let updatedProduct = state.cart.map((curItem) => {
                //if curItem.id(user added product) is equal to unique id(id + productColor) means that product already exits than and product quantity of that product
                if (curItem.id == id + productColor) {
                    let newQuantity = curItem.productQuantity + productQuantity;

                    //if new quantity is larger than stock then new quantity is always equal to curItem.max(stock)
                    if (newQuantity >= curItem.max) {
                        newQuantity = curItem.max
                    }
                    return {
                        ...curItem,  //curItem stay as it is
                        productQuantity: newQuantity  //add new product quantity

                    }
                }
                else {
                    return curItem;  //if id is not match then return only curItem as it is without increment
                }

            })

            return {
                ...state,  //already define state remain as it is
                cart: updatedProduct,  //already added data into cart remain as it is and add new product data
            }
        }
        else {

            let cartProduct;

            cartProduct = {
                id: id + productColor,  //unique id for same products but different color
                name: singleproductData.name,
                productColor,
                productQuantity,
                image: singleproductData.image[0].url,  //display first image into addtocart page
                price: singleproductData.price,
                max: singleproductData.stock,
            };

            return {

                ...state,  //already define state remain as it is
                cart: [...state.cart, cartProduct],  //already added data into cart remain as it is and add new product data
            }
        }
    }

    if (action.type === "REMOVE_PRODUCT") {
        //if curElem(user remove product) id is not match width product then store all products in new varible updatedcart and display that cart
        //if match that id then remove that product automatically from add to cart
        let updatedCart = state.cart.filter((curElem) => curElem.id !== action.payload)  //here state.cart includes products which added by users --> action.payload includes all id

        return {

            ...state,  //already define state remain as it is
            cart: updatedCart,  //after removing any product display new updated cart to user

        }
    }

    if (action.type === "CLEAR_CART") {
        return {

            ...state,  //already define state remain as it is
            cart: [],  //remove all data from cart so empty cart[]

        }
    }


    if (action.type === "DECRESE_QUANTITY") {
        let updatedProduct = state.cart.map((curElem) => {

            if (curElem.id === action.payload) {
                let decreseQuantity = curElem.productQuantity - 1;

                //if decreseQuantity is equal to 1 or smaller than 1 then also product quantity is 1
                if (decreseQuantity <= 1) {
                    decreseQuantity = 1
                }

                // console.log("match id", curElem);

                return {
                    ...curElem,
                    productQuantity: decreseQuantity,
                }
            }
            else {
                return curElem;
            }
        })

        return {
            ...state,
            cart: updatedProduct
        }
    }

    if (action.type === "INCRESE_QUANTITY") {
        let updatedProduct = state.cart.map((curElem) => {

            if (curElem.id === action.payload) {
                let increseQuantity = curElem.productQuantity + 1;

                //if increseQuantity is equal to stock or bigger than stock then product quantity is always qual to stock(curelem.max)
                if (increseQuantity >= curElem.max) {
                    increseQuantity = curElem.max;
                }

                // console.log("match id", curElem);

                return {
                    ...curElem,
                    productQuantity: increseQuantity,
                }
            }
            else {
                return curElem;
            }
        })

        return {
            ...state,
            cart: updatedProduct
        }
    }

    if(action.type === "CART_TOTAL_ITEMS")
    {
        let cartTotalItem = state.cart.reduce((initialValue, curElem) =>
        {
            //destructure -- in productQuantity includes all items so we can get total items
            let {productQuantity} = curElem;

            initialValue = initialValue + productQuantity
            return initialValue;
        }, 0)

        return{
            ...state,
            total_items: cartTotalItem
        }
    }

    return state;
}


export default AddCartReducer
