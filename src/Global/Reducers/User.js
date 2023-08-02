let user = { Name: "", Email: "", Basket: [] };
console.log("Printing initial User",user)
const controlUser = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // console.log(action.item.email, "userjs");
      user.Basket = action.item.basket;
      user.Name = action.item.name;
      user.Email = action.item.email;
      console.log("User is set", user);
      return user;
    case "LOGOUT":
      user = { Name: "", Email: "", Basket: [] };
      return user;
    default:
      return user;
  }
};
export default controlUser;
