import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Content from "./components/Content";
import Header from "./components/Header";
import { store } from "./state";
import Footer from "./components/Footer";
import { Layout } from "antd";
const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Content />
   
      </Layout>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
