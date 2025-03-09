import React, { useState } from 'react';

import { Layout, theme } from 'antd';
import { Outlet } from 'react-router';
import Menuitems from './sidebar/MenuItems';
import SideBar from './sidebar/SideBar';
import CustomFooter from './Footer/Footer';
import CustomHeader from './header/Header';

const { Content } = Layout;



const BaseLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <CustomHeader colorBgContainer={colorBgContainer}>Profule</CustomHeader>
      <div style={{ padding: '32px' }}>
        <Layout style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          
          <SideBar collapsed={collapsed} onCollapse={setCollapsed} menuItems={Menuitems} colorBgContainer={colorBgContainer}/>

          <Content style={{ margin: '0 16px' }}>

            <div
              style={{
                padding: 12,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </div>
          </Content>

        </Layout>
      </div>
      <CustomFooter />
    </Layout>
  );
};

export default BaseLayout;