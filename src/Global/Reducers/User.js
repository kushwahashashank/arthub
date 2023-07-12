let user = { Id: "", Name: "", Email: "", Basket: [], Tokens: [] };

const controlUser = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return user;
    case "LOGOUT":
      return user;
    default:
      return user;
  }
};
