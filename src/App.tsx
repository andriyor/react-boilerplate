import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { DataFetching } from "./components/DataFetching.tsx";

const queryClient = new QueryClient();

function App({ name = "vite" }: { name?: string }) {
  const [count, setCount] = useState(1);
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>
          Hello {name} x{count}!
        </h1>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      <div>
        Data Fetching example:
        <DataFetching />
      </div>
    </QueryClientProvider>
  );
}

export default App;
