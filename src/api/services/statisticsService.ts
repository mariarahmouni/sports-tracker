import apiSlice from "../apiSlice";
import Game from "./gameService";
import { Player } from "./playerService";
import { Team } from "./teamsService";

export interface Statistics {
    id: number,
    min: string,
    fgm: number,
    fga: number,
    fg_pct: number,
    fg3m: number,
    fg3a: number,
    fg3_pct: number,
    ftm: number,
    fta: number,
    ft_pct: number,
    oreb: number,
    dreb: number,
    reb: number,
    ast: number,
    stl: number,
    blk: number,
    turnover: number,
    pf: number,
    pts: number,
    player: Player,
    team: Team,
    game: Game,
}

export interface statsResponse {
    stats: Statistics,
    meta: {
        next_cursor: number | undefined,
        per_page: number | undefined,
    }

}

const statisticsService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSeasonAveragesByPlayerId: builder.query<statsResponse, number >( {
            query: (player_id) => ({
                url: `/stats/?player_ids[]=${player_id}`,
                method: 'GET',
            }),
        }),
    }),
});

export default statisticsService;
