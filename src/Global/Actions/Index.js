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
export const SetUser = (email, basket, name) => {
  // console.log(email, name, "action index");
  return {
    type: "LOGIN",
    item: {
      email,
      basket,
      name,
    },
  };
};
export const LogoutUser = (id) => {
  return {
    type: "LOGOUT",
    item: id,
  };
};
