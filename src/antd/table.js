import React from "react";
import { Input,Table } from "antd";
import './App.css';

const onSearch = (value) => console.log(value);
const { Search } = Input;

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];



class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <Table dataSource={dataSource} columns={columns} />;

      </div>
    );
  }
}

export default App;
