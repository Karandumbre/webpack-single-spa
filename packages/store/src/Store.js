const createStore = () => {
  let userName = '';
  let isUserLoggedin = false;
  const subscribers = [];

  return {
    get userName() {
      return userName;
    },
    get isUserLoggedin() {
      return isUserLoggedin
    },
    setUserName(value) {
      userName = value;
      subscribers.forEach(fn => fn());
    },
    setIsUserLoggedin(value) {
      isUserLoggedin = value;
      subscribers.forEach(fn => fn());
    },
    subscribe(fn) {
      subscribers.push(fn);
    }
  }
};

const Store = createStore();

export default Store;
