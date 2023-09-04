const { createClient } = require("@supabase/supabase-js");
const {chain, groupBy, map, partition} = require('lodash')

const supabase = createClient(
  "http://192.168.93.14:8000",
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTYwMzk2ODgzNCwiZXhwIjoyNTUwNjUzNjM0LCJyb2xlIjoic2VydmljZV9yb2xlIn0.necIJaiP7X2T2QjGeV-FhpkizcNTX8HjDDBAxpgQTEI"
);

async function getDatas() {
  const countries = await supabase
    .from("rp_area")
    .select()
    .eq("month", "202305")
    .then(({ data }) => {
      let test = chain(data)
      .groupBy('area')
      .map((arr, area)=>{
        
        const [sub_areas, [main_area]] = partition(
          arr,
          ({ name }) => name !== area
        );
        console.log(111);
        console.log(sub_areas);
        console.log(222);
        console.log(main_area);
        
        
                
        
      })
      .value()
      
    });
  console.log(countries);
}

getDatas();
