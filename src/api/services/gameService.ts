import apiSlice from "../apiSlice";
import Team from "./teamsService";

interface Game {
    id: number,
    date: string,
    season: number,
    status: string,
    period: number,
    time: string,
    postseason: boolean,
    home_team_score: number,
    visitor_team_score: number,
    home_team: Team,
    visitor_team: Team,
}

export interface GamesResponse {
    data: Game[],
    meta: {
        next_cursor: string,
        per_page: string,
    }
}

export const gameService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllGames: builder.query<GamesResponse, string | null>({
            query: (cursor) => ({
                url: `/games`,
                method: 'GET',
                params: { cursor },
            })
        }),
        getGameById: builder.query<Game, number> ({
            query: (id) => ({
                url: `/games/${id}`,
                method: 'GET',
            })
        })
    })
})

export default Game;