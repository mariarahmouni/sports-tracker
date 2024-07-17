import apiSlice from "../apiSlice";
import { Area } from "./areaService";
import Team from "./teamsService";

interface Matches {
    id: number,
    utcDate: string,
    status: Status,
    minute: number,
    injuryTime: number,
    attendance: number,
    stage: string,
    homeTeam: Team,
    area: Area,
    season: {id: number, startDate: string, endDate: string, currentMatchday: number},
}

export enum Status {
    SCHEDULED = "SCHEDULED",
    TIMED = "TIMED",
    IN_PLAY = "IN_PLAY",
    PAUSED = "PAUSED", 
    FINISHED = "FINISHED",
    SUSPENDED = "SUSPENDED",
    POSTPONED = "POSTPONED",
    CANCELLED = "CANCELLED", 
    AWARDED = "AWARDED",
}

export default Matches;