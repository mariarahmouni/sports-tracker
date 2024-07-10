import axios, { AxiosError, AxiosRequestConfig, AxiosHeaderValue } from "axios"
import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { RootState } from "../store/configure";

type MaybePromise<T> = T | PromiseLike<T>;

type PrepareHeaders<T> = (
    headers: T,
    api: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>
) => MaybePromise<T | void>;
export type RawAxiosHeaders = Record<string, AxiosHeaderValue>;

interface AxiosBaseQueryFn {
    baseUrl: string;
    prepareHeaders: PrepareHeaders<RawAxiosHeaders>;
}

interface ApiResponse<T = unknown> {
    status: number;
    data: T;
}

const axiosBaseQuery =
    ({
        baseUrl = '',
        prepareHeaders = (h) => h,
    }: AxiosBaseQueryFn): BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
        headers?: RawAxiosHeaders;
        responseType?: AxiosRequestConfig['responseType'];
    }> =>
        async ({ url, headers = axios.defaults.headers, ...args }, api) => {

            try {
                const requestHeaders = (await prepareHeaders(headers, api)) || headers;
                const result = await axios({
                    ...args,
                    url: baseUrl + url,
                    headers: requestHeaders,
                });
                const apiResponse = result.data as ApiResponse;
                return { data: apiResponse.data };
            } catch (axiosError) {
                const err = axiosError as AxiosError<ApiResponse>;
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data.data || err.message,
                    },
                };
            }
        };


const apiSlice = createApi({
    reducerPath: 'api',
    endpoints: () => ({}),
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.football-data.org/v4',
        prepareHeaders: (headers, { getState }) => {
            const { token } = (getState() as RootState).auth;
            if (token) {
                headers.Authorization = `Bearer ${token}`;
            }
            return headers;
        },
    }),
});
export default apiSlice;
