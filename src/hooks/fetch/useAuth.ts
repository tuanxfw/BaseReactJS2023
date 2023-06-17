import { LOGIN, USER_INFO } from '@constants/appPath';
import axiosClient from '@restful/axios';
import { useQuery, useMutation } from 'react-query';

export const useLogin = () => {

    const fetch = async (data: any) => {
        let result = await axiosClient.login(LOGIN, data);

        return result;
    };

    return useMutation(
        fetch,
        {}
    );

};

export const useGetUserInfo = () => {

    const fetch = async () => {

        let result = await axiosClient.get(USER_INFO);

        return result;
    };

    return useQuery(
        ["UserInfo"],
        fetch,
        {
            refetchInterval: false,
            staleTime: 1000 * 60 * 60,
        }
    );

};