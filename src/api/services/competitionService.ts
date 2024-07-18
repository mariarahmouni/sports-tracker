import { Area } from "./areaService";
import { Person } from "./personsService";
import Team from "./teamsService";

export interface Competition {
    area: Area,
    id: number,
    name: string,
    code: string,
    type: string,
    emblem: string,
    currentSeason: Season,
    seasons: Season[],
}

export interface Season {
    id: number,
    startDate: string,
    endDate: string,
    currentMatchday: number | null,
    winner: Team | null,
    stages: Stage[],

}

export interface Scorers {
    count: number,
    competition: Competition,
    season: Season,
    scorers: ScorerInformation[],
}

export interface ScorerInformation {
    player: Person,
    team: Team,
    goals: number,
    assists: number,
    penalties: number,
}

export enum Stage {
    FINAL = "FINAL",
    THIRD_PLACE = "THIRD_PLACE",
    SEMI_FINALS = "SEMI_FINALS",
    QUARTER_FINALS = "QUARTER_FINALS",
    LAST_16 = "LAST_16",
    LAST_32 = "LAST_32",
    LAST_64 = "LAST_64",
    ROUND_4 = "ROUND_4",
    ROUND_3 = "ROUND_3",
    ROUND_2 = "ROUND_2",
    ROUND_1 = "ROUND_1",
    GROUP_STAGE = "GROUP_STAGE",
    PRELIMINARY_ROUND = "PRELIMINARY_ROUND",
    QUALIFICATION = "QUALIFICATION",
    QUALIFICATION_ROUND_1 = "QUALIFICATION_ROUND_1",
    QUALIFICATION_ROUND_2 = "QUALIFICATION_ROUND_2",
    QUALIFICATION_ROUND_3 = "QUALIFICATION_ROUND_3",
    PLAYOFF_ROUND_1 = "PLAYOFF_ROUND_1",
    PLAYOFF_ROUND_2 = "PLAYOFF_ROUND_2",
    PLAYOFFS = "PLAYOFFS",
    REGULAR_SEASON = "REGULAR_SEASON",
    CLAUSURA = "CLAUSURA",
    APERTURA = "APERTURA",
    CHAMPIONSHIP_ROUND = "CHAMPIONSHIP_ROUND",
    RELEGATION_ROUND = "RELEGATION_ROUND",
}

export default Competition;