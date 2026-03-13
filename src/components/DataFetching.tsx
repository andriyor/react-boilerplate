import { useQuery } from "@tanstack/react-query";

import { get } from "../api";

export const DataFetching = () => {
  const query = useQuery({ queryKey: ["get"], queryFn: get });

  return <div>{JSON.stringify(query.data)}</div>;
};

