import Game from "./gameService";
import { Player } from "./playerService";
import Team from "./teamsService";

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
