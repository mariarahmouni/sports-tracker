import apiSlice from "../apiSlice";
import Team, { Area } from "./teamsService";

interface Matches {
    id: number,
    utcDate: string,
    status: string,
    minute: number,
    injuryTime: number,
    attendance: number,
    stage: string,
    homeTeam: Team,
    area: Area,
    season: {id: number, startDate: string, endDate: string, currentMatchday: number},
}

export default Matches;