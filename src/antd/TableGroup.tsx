import { Button, Col, Row, Space, Table, Tag, Tree, Watermark } from "antd";
import { ColumnsType } from "antd/es/table";
import { DataNode } from "antd/es/tree";
import IframeResizer from "iframe-resizer-react";

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "12%",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: "30%",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a href="/#">Add </a>
        <a href="/#">Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: "John Brown sr.",
    age: 60,
    address: "New York No. 1 Lake Park",
    children: [
      {
        key: 11,
        name: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park",
      },
      {
        key: 12,
        name: "John Brown jr.",
        age: 30,
        address: "New York No. 3 Lake Park",
        children: [
          {
            key: 121,
            name: "Jimmy Brown",
            age: 16,
            address: "New York No. 3 Lake Park",
          },
        ],
      },
      {
        key: 13,
        name: "Jim Green sr.",
        age: 72,
        address: "London No. 1 Lake Park",
        children: [
          {
            key: 131,
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park",
            children: [
              {
                key: 1311,
                name: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park",
              },
              {
                key: 1312,
                name: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];

interface DataType1 {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns1: ColumnsType<DataType1> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="/#">{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a href="/#">Invite {record.name}</a>
        <a href="/#">Delete</a>
      </Space>
    ),
  },
];

const data1: DataType1[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const treeData: DataNode[] = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
          {
            title: "leaf",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: "leaf",
            key: "0-0-1-0",
          },
        ],
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        children: [
          {
            title: "leaf",
            key: "0-0-2-0",
          },
          {
            title: "leaf",
            key: "0-0-2-1",
          },
        ],
      },
    ],
  },
];

export const TableGroup = () => {
  return (
    <>
      <Watermark content="Ant Design">
        <Button type="primary">新增菜单</Button>

        <Table columns={columns} dataSource={data} />
        <Row>
          <Col span={8}>
            <Tree
              showLine
              defaultExpandedKeys={["0-0-0"]}
              treeData={treeData}
            />
          </Col>
          <Col span={16}>
            <Button type="primary">新增用户</Button>
            <Table columns={columns1} dataSource={data1} />
          </Col>
        </Row>
        <IframeResizer
          src={
            "http://192.168.93.14/other/report/%E7%AE%A1%E7%90%86%E6%8A%A5%E5%91%8A"
          }
          frameBorder="0"
          style={{
            width: "1px",
            minWidth: "100%",
            height: "1700px"
          }}
          checkOrigin={false}
          //@ts-ignore
          // scrolling
          // heightCalculationMethod="grow"
          // 使 iframe 内的鼠标移动,外面组件能捕捉到, 用来判断页面的 isIdle 状态
          //@ts-ignore
        />

      </Watermark>
    </>
  );
};
