let basket = [];

export const getbasketSize = (Basket) =>
  Basket?.reduce((value, item) => value + item.count, 0);
export const getbaskettotal = (Basket) =>
  Basket?.reduce((amount, item) => amount + item.price * item.count, 0);
const controlBasket = (state, action) => {
  switch (action.type) {
    case "DELETEFROMBASKET":
      var x = -1;
      x = state.findIndex((basketItem) => basketItem.id === action.id);
      let nBasket = [...basket];
      if (x >= 0 && nBasket[x].count > 1) {
        nBasket[x].count--;
        nBasket[x].cartprice = nBasket[x].price * nBasket[x].count;
      }
      basket = nBasket;
      return nBasket;
    case "ADDTOCART":
      let tempBasket = [...basket];
      var b = true;
      for (var i = 0; i < tempBasket.length; i++) {
        if (tempBasket[i].id === action.item.id) {
          b = false;
          tempBasket[i].count++;
          tempBasket[i].cartprice = tempBasket[i].count * tempBasket[i].price;
        }
      }
      if (b) {
        tempBasket.push(action.item);
      }
      basket = tempBasket;
      return tempBasket;
    case "REMOVEFROMBASKET":
      var index = -1;
      index = state.findIndex((basketItem) => basketItem.id === action.id);
      let newBasket = [...basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      basket = newBasket;
      return newBasket;
    case "SETBASKET":
      basket = action.item;
      return basket;
    case "UNSETBASKET":
      basket = [];
      return basket;
    default:
      return basket;
  }
};
export default controlBasket;
