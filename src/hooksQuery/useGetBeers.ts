import { useQuery } from "@tanstack/react-query";
import { getBeers } from "../API/getBeers";

export const useGetBeers = (tab: "pizza" | "meat" | "") => {
  return useQuery({
    queryKey: ["beers", tab],
    queryFn: getBeers,
    staleTime: Infinity,
  });
};
