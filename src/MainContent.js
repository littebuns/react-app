import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Select from "./antd/Select";
import Step from "./antd/Step";
import AgGridDemon from './package/dataGrid/demon';
import ColumnDefinitions from './package/dataGrid/ColumnDefinitions'
import ShoppingCart from './base/hook/useContext/ShoppingCart'

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
  ]),
  getItem("Files", "9", <FileOutlined />),
  getItem("hooks", "/hooks", <UserOutlined />, [
    getItem("useContext", "/useContext"),
  ]),
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

              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainContent;
