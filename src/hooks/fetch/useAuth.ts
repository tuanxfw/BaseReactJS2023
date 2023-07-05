import axiosClient from "@restful/axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { keycloakUtil } from "@utils/commonUtil";

export const useLogin = () => {
  const fetch = async (data: any) => {
    const result = await axiosClient.login(keycloakUtil.getUrlLogin(), {
      grant_type: "password",
      ...data,
    });

    return result;
  };

  return useMutation(fetch, {});
};

export const useGetUserInfo = () => {
  const fetch = async () => {
    const result = await axiosClient.get(keycloakUtil.getUrlUserInfo());

    return result;
  };

  return useQuery(["UserInfo"], fetch, {
    enabled: false,
    staleTime: 1000 * 60 * 60 * 8,
  });
};
