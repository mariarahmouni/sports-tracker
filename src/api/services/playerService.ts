import apiSlice from "../apiSlice";
import { Team } from "./teamsService";

export interface Player {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    height: string;
    weight: string;
    jersey_number: string;
    college: string;
    country: string;
    draft_year: number;
    draft_round: number;
    draft_number: number;
    team: Team;
}

export interface PlayersResponse {
    data: Player[];
    meta: {
        next_cursor: string | null;
        per_page: number;
    };
}

export interface PlayerResponse {
    data: Player;
}


export const playerService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPlayerById: builder.query<PlayerResponse, number>({
            query: (id) => ({
                url: `/players/${id}`,
                method: 'GET',
            }),
        }),
        getAllPlayers: builder.query<PlayersResponse, string | null>({
            query: (cursor) => ({
                url: `/players`,
                method: 'GET',
                params: { cursor },
            }),
        }),
        getPlayerByName: builder.query<PlayerResponse, string>({
            query: (search) => ({
                url: `/players/`,
                method: 'GET',
                params: { search },
            })
        }),

    }),
    overrideExisting: true,
});


// import apiSlice from "../apiSlice";
// import Team from "./teamsService";

// export interface Player {
//     id: number,
//     first_name: string,
//     last_name: string,
//     position: string,
//     height: string,
//     weight: string,
//     jersey_number: string,
//     college: string,
//     country: string,
//     draft_year: number,
//     draft_round: number,
//     draft_number: number,
//     team: Team,
// }

// export interface PlayerResponse {
//     data: Player[],
//     meta: {
//         next_cursor: number | null,
//         per_page: number,
//     }
// }

// export const playerService = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         getPlayerById: builder.query<PlayerResponse, number>({
//             query: (id: number) => ({
//                 url: `/players/${id}`,
//                 method: 'GET',
//             }),
//         }),
//         // getPlayerByName: builder.query<Player, string> ({

//         // }),
//         getAllPlayers: builder.query<Player[], void>({
//             query: () => ({
//                 url: `/players?cursor=NEXT_CURSOR`,
//                 method: 'GET',
//             })
//         }),
//     }),
//     overrideExisting: true,
// });
