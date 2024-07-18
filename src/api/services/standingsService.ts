import { Area } from "./areaService";
import Competition, { Season, Stage } from "./competitionService";
import Team from "./teamsService";

export interface Standings {
    //not sure what to do with the filters
    area: Area,
    competition: Competition;
    season: Season,
    standings: standingsEntry[];
}

export interface standingsEntry {
    stage: Stage,
    type: string, //check enum
    group: string | null //check enum
    table: Position[];
}

export interface Position {
    position: number,
    team: Team,
    playedGames: number,
    form: string,
    won: number,
    draw: number,
    lost: number,
    points: number,
    goalsFor: number,
    goalsAgainst: number,
    goalDifference: number,
}

export enum Group {
    GROUP_A = "GROUP_A",
    GROUP_B = "GROUP_B",
    GROUP_C = "GROUP_C",
    GROUP_D = "GROUP_D",
    GROUP_E = "GROUP_E",
    GROUP_F = "GROUP_F",
    GROUP_G = "GROUP_G",
    GROUP_H = "GROUP_H",
    GROUP_I = "GROUP_I",
    GROUP_J = "GROUP_J",
    GROUP_K = "GROUP_K",
    GROUP_L = "GROUP_L",

}
