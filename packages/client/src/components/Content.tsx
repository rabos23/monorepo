import { Layout } from "antd";
import "antd/dist/antd.min.css";
const Content = () => {
  return (
    <Layout.Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 64 }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        Content
      </div>
    </Layout.Content>
  );
};
export default Content;
