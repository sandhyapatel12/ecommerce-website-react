const AddCartReducer = (state, action) => {
    // console.log('reducer',state);
    if (action.type === "ADD_TO_CART") 
        {
            let { id, productColor, productQuantity, singleproductData } = action.payload;
            // console.log(singleproductData);


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

    if(action.type === "REMOVE_PRODUCT")
    {
        //if curElem(user remove product) id is not match width product then store all products in new varible updatedcart and display that cart
        //if match that id then remove that product automatically from add to cart
        let updatedCart = state.cart.filter((curElem) => curElem.id !== action.payload)  //here state.cart includes products which added by users --> action.payload includes all id

        return{

            ...state,  //already define state remain as it is
            cart: updatedCart,  //after removing any product display new updated cart to user

        }
    }
            return state;
}


export default AddCartReducer
