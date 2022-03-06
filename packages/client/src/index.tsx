import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Navbar } from "./components/nav-bar";
import { store } from "./state";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
