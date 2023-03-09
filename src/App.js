
import { createClient } from '@supabase/supabase-js';


function App() {

  const supabase = createClient('http://192.168.93.16:8000', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTYwMzk2ODgzNCwiZXhwIjoyNTUwNjUzNjM0LCJyb2xlIjoic2VydmljZV9yb2xlIn0.necIJaiP7X2T2QjGeV-FhpkizcNTX8HjDDBAxpgQTEI');

  async function getDatas() {
    const countries = await supabase.from('address').select()
    console.log(countries)
  }

  getDatas();
  return (
    <div>

    </div>
  );
}

export default App;
