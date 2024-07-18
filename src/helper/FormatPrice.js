//desturucture price

const FormatPrice = ({price}) => {
  return Intl.NumberFormat ("en-IN",  //locales(which country price)
    {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,  //after . maximum two numbers
    }).format(price/100)   //convert (paise into rupees) 100 paise = 1 rupees  ->  rupee = paisa/100
}

export default FormatPrice
