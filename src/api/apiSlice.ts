import axios, { AxiosError, AxiosRequestConfig, AxiosHeaderValue } from "axios"
import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';

export type RawAxiosHeaders = Record<string, AxiosHeaderValue>;

interface AxiosBaseQueryFn {
    baseUrl: string;
}

interface ApiResponse<T = unknown> {
    status: number;
    data: T;
}

const axiosBaseQuery =
    ({
        baseUrl = ''
    }: AxiosBaseQueryFn): BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
        headers?: RawAxiosHeaders;
        responseType?: AxiosRequestConfig['responseType'];
    }> =>
        async ({ url, headers = axios.defaults.headers, ...args }) => {
            
            try {
                const requestHeaders = headers;
                requestHeaders['Authorization'] = '49e29b21-bb46-4792-a920-c79ee2ac05cc';
                
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
        baseUrl: 'https://api.balldontlie.io/v1/'
    }),
});
export default apiSlice;
