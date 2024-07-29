import apiSlice from "../apiSlice";

export interface Team {
    id: number,
    conference: string,
    division: string,
    city: string,
    name: string,
    full_name: string,
    abbreviation: string,
}

export interface TeamsResponse {
    data: Team[],
}

export const teamsService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllTeams: builder.query<TeamsResponse, void>({
            query: () => ({
                url: `/teams`,
                method: 'GET',
            })
        }),
        getTeamById: builder.query<TeamsResponse, number>({
            query: (id) => ({
                url: `/teams${id}`,
                method: 'GET'
            })
        })
    }),
    overrideExisting: true,
});

