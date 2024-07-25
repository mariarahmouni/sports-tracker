import apiSlice from "../apiSlice";

interface Team {
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
    meta: {
        next_cursor: string | null;
        per_page: number;
    }
}

export const teamsService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        /* How to pass multiple parameters together? division + cursor + conference*/
        getAllTeams: builder.query<TeamsResponse, void>({
            query: (cursor) => ({
                url: `/teams`,
                method: 'GET',
                params: { cursor },
            })
        }),
        getTeamById: builder.query<TeamsResponse, number>({
            query: (id) => ({
                url: `/teams${id}`,
                method: 'GET'
            })
        })
    })
})


export default Team;