import { Button } from "antd";
import axios from "axios";
import { useState } from "react";

export const AxiosRequest = () => {
  function getData() {
    axios.get("http://localhost:4000/api1/api/hello").then(
      (data) => {
        console.log(data);
        setData1(data["data"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  function getData2() {
    axios.get("http://localhost:4000/api2/hello").then(
      (data) => {
        console.log(data);
        setData2(data["data"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  const [data1, setData1] = useState("数据为空");
  const [data2, setData2] = useState("数据为空");


  return (
    <>
      <Button type="primary" onClick={getData}>
        Get Data
      </Button>
      {data1}

      <Button type="primary" onClick={getData2}>
        Get Data
      </Button>
      {data2}
    </>
  );
};
