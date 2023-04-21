
const ClickHouse = require("@apla/clickhouse");
const { assign, groupBy } = require("lodash");
// ts-node .\src\package\clickhouse\getData.ts xxb


const options = {
  host: "192.168.93.14",
  port: "8123",
  user: "default",
  password: "qwerty",
};

const ch = new ClickHouse(
  assign(options, {
    dataObjects: true,
    queryOptions: { database: "rp_manager" },
  })
);

async function getData() {
  const { data } = await ch.querying(
    "select * from rp_manager.v_bpc_sap_pre_index where ym='202303'"
  );
  let result = groupBy(
    data,
    ({ branch, year, month, prod }) => `${branch}_${year}_${month}_${prod}`
  );
  console.log(result);

}

getData();

