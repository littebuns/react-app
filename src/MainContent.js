import {
  DesktopOutlined, FileOutlined,
  PieChartOutlined, TeamOutlined, UserOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { TableGroup } from "antd/TableGroup";
import { AxiosRequest } from "package/proxy";
import { ResizePanel } from "package/react-resizable-panels";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Select from "./antd/Select";
import Step from "./antd/Step";
import Tab from "./antd/Tab";
import ShoppingCart from './js/react/hook/useContext/ShoppingCart';
import ColumnDefinitions from './package/dataGrid/ColumnDefinitions';
import AgGridDemon from './package/dataGrid/demon';
import Video from './package/other/VideoDemon';

const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("AgGrid", "/agGridDemon", <UserOutlined />, [
    getItem("AgGrid demon", "/agGrid"),
    getItem("AgGrid Column Definitions", "/agGrid-columnDef"),
    getItem("Alex", "5"),
  ]),
  getItem("Ant Design 组件", "sub2", <TeamOutlined />, [
    getItem("Select 组件", "/select"),
    getItem("Step 组件", "/Step"),
    getItem('Tab 组件', "/tab"),
    getItem('组合组件', "/group1")
  ]),
  getItem("Files", "9", <FileOutlined />,[
    getItem("Video", "/video")
  ]),
  getItem("hooks", "/hooks", <UserOutlined />, [
    getItem("useContext", "/useContext"),
  ]),
  getItem("js-package", "/jsPackage", <DesktopOutlined />,[
    getItem("react-resized-panels", "/resizePanel"),
    getItem("本地代理", "/proxy")
  ])
];

function MainContent() {
  const navigate = useNavigate();

  const menuClick = (e) => {
    console.log(e.key);
    navigate(e.key, {replace:true});
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={menuClick}
          />
        </Sider>
        <Layout className="site-layout">
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 800,
                background: colorBgContainer,
              }}
            >
              <Routes>
                <Route path="/select" element={<Select />}></Route>
                <Route path="/step" element={<Step />}></Route>
                <Route path="/agGrid" element={<AgGridDemon />}></Route>
                <Route path="/agGrid-columnDef" element={<ColumnDefinitions/>}></Route>
                <Route path="/useContext" element={<ShoppingCart/>}></Route>
                <Route path="/video" element={<Video/>}></Route>
                <Route path='/tab' element={<Tab/>}></Route>
                <Route path='/resizePanel' element={<ResizePanel/>}></Route>
                <Route path='/group1' element={<TableGroup/>}></Route>
                <Route path='/proxy' element={<AxiosRequest/>}></Route>
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainContent;
