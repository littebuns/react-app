import { Tabs } from "antd";
import React from "react";

const Tab = () => {
  return (
    <>
      <Tabs
        tabPosition={"left"}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab${i}`,
            key: id,
            children: `${i}`,
          };
        })}
      ></Tabs>
    </>
  );
};
export default Tab;
