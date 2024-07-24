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

export default Game;