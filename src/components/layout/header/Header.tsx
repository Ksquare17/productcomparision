import { Layout, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Header } = Layout;

type CustomHeaderProps = React.ComponentProps<typeof Header> & {
    colorBgContainer?: string;
  };
  

const CustomHeader: React.FC<CustomHeaderProps> = () => {
  return (
    <Header 
    style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        background: "#001529", 
        color: "#fff",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)"
    }}>
      
        <div style={{ display: "flex", alignItems: "center" }}>
            <ShoppingCartOutlined style={{ fontSize: "24px", marginRight: "10px", color: "#fff" }} />
            <Typography.Title level={3} style={{ margin: 0, color: "#fff" }}>
                Product Comparison
            </Typography.Title>
        </div>
    </Header>
  );
};

export default CustomHeader;