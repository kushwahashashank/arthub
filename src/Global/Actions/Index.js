export const AddToCart = (photo, text, price, id, cartprice, count) => {
  return {
    type: "ADDTOCART",
    item: {
      photo,
      text,
      price,
      id,
      cartprice,
      count,
    },
  };
};
export const RemoveFromCart = (id) => {
  return {
    type: "REMOVEFROMBASKET",
    id,
  };
};
export const DeleteFromCart = (id) => {
  return {
    type: "DELETEFROMBASKET",
    id,
  };
};
export const SetBasket = (basket) => {
  return {
    type: "SETBASKET",
    item: basket,
  };
};
