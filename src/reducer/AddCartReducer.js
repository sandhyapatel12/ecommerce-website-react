const AddCartReducer = (action, state) => {
    console.log('reducer',state);
    if (action.type === "ADD_TO_CART") {
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
        }
        

        return {
            
            state,
            cart: [state.cart, cartProduct]  //already added data into cart remain as it is and add new product data
        }
    }
            return state;
}


export default AddCartReducer
