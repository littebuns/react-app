const ClickHouse = require("@apla/clickhouse");
const { assign } = require("lodash");

const xxb = process.argv[2];
console.log(xxb);


const options = {
  host: "192.168.93.14",
  port: "8123",
  user: "default",
  password: "qwerty",
};

const ch = new ClickHouse(
  assign(options, { dataObjects: true, queryOptions: { database: "rp_manager" } })
);

async function getData(){
    const { data } = await ch.querying(
        "select * from rp_manager.v_bpc_sap_pre_index where ym='202303'"
      );
      console.log(data);
      
}


getData();
