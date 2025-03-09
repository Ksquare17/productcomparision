import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;


const CustomFooter: React.FC = () => {
  return (
        <Footer style={{ textAlign: 'center' }}>
          Product Comparision ©{new Date().getFullYear()} Created by Kahkasha Khan
        </Footer>
  );
};

export default CustomFooter;