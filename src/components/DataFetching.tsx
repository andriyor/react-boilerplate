import { useQuery } from "@tanstack/react-query";

import { example, get } from "../api";

export const DataFetching = () => {
  const { data: exampleData } = useQuery({
    queryKey: ["get"],
    queryFn: example,
  });
  // there is no warning that I use the same key???
  const { data: getData } = useQuery({ queryKey: ["get"], queryFn: get });

  return (
    <div>
      {JSON.stringify(getData)} <div>{JSON.stringify(exampleData)}</div>
    </div>
  );
};
