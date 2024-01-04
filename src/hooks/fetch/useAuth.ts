import { AppConfig } from "@constants/constants";
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

export const useLoginSSO = () => {
  const fetch = async (code: string) => {
    const result = await axiosClient.login(keycloakUtil.getUrlLogin(), {
      grant_type: "authorization_code",
      client_id: AppConfig.VITE_CLIENT,
      client_secret: AppConfig.VITE_CLIENT_SECRET,
      code: code,
      redirect_uri: keycloakUtil.getRedirectUrl(),
    });

    return result;
  };

  return useMutation(fetch, {});
};

export const useLogout = () => {
  const fetch = async () => {
    const result = await axiosClient.logout();

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
