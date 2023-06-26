import { Button } from "antd";
import axios from "axios";
import { useState } from "react";

export const AxiosRequest = () => {
  function getData() {
    axios.get("http://localhost:4000/api/hello").then(
      (data) => {
        console.log(data);
        setData(data["data"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  const [data, setData] = useState("数据为空");

  return (
    <>
      <Button type="primary" onClick={getData}>
        Get Data
      </Button>
      {data}
    </>
  );
};
