const route = () => {
  // const history = useHistory();
  return {
    routeToHome() {
      window.location.href = "http://localhost:8082/#/home";
      // history.push("/home");
    },
    routeToDashboard() {
      window.location.href = "http://localhost:8082/";
      // history.push("/home");
    },
  };
};

const Routing = route();

export default Routing;
