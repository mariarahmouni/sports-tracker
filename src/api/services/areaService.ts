import apiSlice from "../apiSlice";

export interface Area {
    id: number,
    name: string,
    countryCode: string,
    flag: string,
}


export const areaService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAreaById: builder.query<Area, number>({
            query: (id: number) => ({
                url: `/areas/${id}`,
                method: 'GET',
            })
        }),
        getAreaByName: builder.query<Area, string>({
            query: (name: string) => ({
                url: `/areas/${name}`,
                method: 'GET',
            })
        }),
        getAllAreas: builder.query<Area[], void>({
            query: () => ({
                url: `/areas`,
                method: 'GET',
            })
        })
    }),
})

