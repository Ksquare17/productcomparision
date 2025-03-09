import React from "react";
import { Layout, Menu } from "antd";
import type { SiderProps } from "antd/es/layout/Sider";
import type { MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];


type CustomSiderProps = SiderProps & {
    menuItems: MenuItem[];
    colorBgContainer?: string;
    borderRadiusLG?: number;
};
const siderStyle: React.CSSProperties = {

    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "none",
    overflow: "hidden",

};
const SideBar: React.FC<CustomSiderProps> = ({ collapsed, onCollapse, menuItems, }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleMenuClick: MenuProps["onClick"] = (e) => {
        console.log(e)
        navigate(e.key);
    };
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse} style={siderStyle} 
        breakpoint="xs" 
          
        width={200}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline" items={menuItems} style={{ height: '100%', margin: '20px 0' }} onClick={handleMenuClick} />
        </Sider>
    );
};

export default SideBar;
