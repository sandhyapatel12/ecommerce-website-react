const FilterReducer = (state, action) => {
    switch (action.type) {

        case "LOAD_FILTER_PRODUCT":
            let priceData = action.payload.map((curElem) => curElem.price)
            // console.log(priceData)  //get all price

            //1 way
            // console.log(Math.max.apply(null, arrData))  //get max price

            //2 way
            // let maxPrice = arrData.reduce((initialValue, curValue) =>
            //     Math.max(initialValue, curValue), 0
            // )
            // console.log(maxPrice)

            // 3 way
            let maxPrice = Math.max(...priceData)
            // console.log("🚀 ~ FilterReducer ~ maxpr̥ice:", maxPr̥ice)


            return {
                ...state,  //which is define at productcontext that state remain as it is  
                filterProducts: [...action.payload],  //... spread operator used because when user filter data main product remain as it is
                allProducts: [...action.payload],
                filterData: { ...state.filterData, maxPrice, price: maxPrice }  //update maxprice and price value
            }
        case "SET_GRID_VIEW":

            return {
                ...state,
                gridView: true
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                gridView: false
            }
        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_val = userSortValue.options[userSortValue.selectedIndex].value;
            // console.log(sort_val)

            return {
                ...state,
                sortingValue: action.payload  //geted sorting value
            }
        case "SORTING_PRODUCTS":
            //create variable for new sorted data
            let newSortData;

            //destructure
            const { filterProducts, sortingValue } = state;

            // in tempSortData whole api data included
            let tempSortData = [...filterProducts]  //filterproducts stay as it is -->  here we used filterproducts copy  --> so don't accure error in actual data

            //create global function for sorting
            const sortingProducts = (a, b) => {

                //here all values like "lowest",... all set sort-section div into Sort.js file 

                //lowest price
                if (sortingValue === "lowest") {
                    return a.price - b.price;
                }

                //Highest price
                if (sortingValue === "highest") {
                    return b.price - a.price;
                }

                //ascending
                if (sortingValue === 'a-z') {
                    return a.name.localeCompare(b.name)
                }

                //descending
                if (sortingValue === 'z-a') {
                    return b.name.localeCompare(a.name)
                }

            }
            //set sored data into newsortdata
            newSortData = tempSortData.sort(sortingProducts)

            return {
                ...state,
                filterProducts: newSortData
            }

        case "UPDATE_FILTER_DATA":

            //destructure
            const { name, value } = action.payload
            return {
                ...state,
                filterData:
                {
                    ...state.filterData,  //all data stay as it is
                    [name]: value //user value set in name because name ia s text
                }
            }

        case "GET_FILTER_SECION_DATA":

            //destructure
            let { allProducts } = state;

            // in tempFilterData whole api data included
            let tempFilterData = [...allProducts]  //filterproducts stay as it is -->  here we used filterproducts copy  --> so don't accure error in actual data

            const { text, category, company, colorVal, price} = state.filterData

            //when user find products throught out search bar
            if (text) {
                tempFilterData = tempFilterData.filter((currentText) => {
                    return currentText.name.toLowerCase().includes(text);  //used name because name is a text -> includes function can incluse all element which remain in products name
                })
            }

            //if select all then don't filter any products and display all products

            //when user find products throught out category
            if (category !== "all") {
                tempFilterData = tempFilterData.filter(
                    (curCategory) => curCategory.category === category  //used name because name is a text -> includes function can incluse all element which remain in products name
                )
            }

            //when user find products throught out company
            if (company !== "all") {
                tempFilterData = tempFilterData.filter((curCompany) => 
                     curCompany.company.toLowerCase() === company.toLowerCase()  //used name because name is a text -> includes function can incluse all element which remain in products name
                )
            }

            //when user find products throught out colors
            if (colorVal !== "all") {
                tempFilterData = tempFilterData.filter((curElem) =>
                    curElem.colors.includes(colorVal)
                );
            }

            // when user find products throught out price
            if (price === 0) {
                tempFilterData = tempFilterData.filter((curPrice) =>
                    curPrice.price == price)  //display only that products which is user through selected price is minimum any products or equal to that product
            }
            else{
                tempFilterData = tempFilterData.filter((curPrice) =>
                    curPrice.price <= price)  //display only that products which is user through selected price is minimum any products or equal to that product
            }





            return {
                ...state,
                filterProducts: tempFilterData  //set sorted data (which search by user set into tempFilterData)
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filterData: {
                    ...state.filterData,
                    text: " ", //for search bar
                    category: "all",
                    company: "all",
                    colorVal: "all",
                    maxPrice:0,
                    minPrice:state.filterData.maxPrice,
                    price: state.filterData.maxPrice
                }
            }


        default:
            return state;
    }

}

export default FilterReducer
