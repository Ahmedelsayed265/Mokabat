import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetDegrees() {
  const { lang } = useSelector((state) => state.language);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["education-degrees", lang],

    queryFn: async () => {
      const res = await axiosInstance.get("/education-degrees");
      return res?.data?.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
