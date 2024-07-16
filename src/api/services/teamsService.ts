import apiSlice from "../apiSlice";
import { Area } from "./areaService";
import { Coach, Person } from "./personsService";

interface Team {
    area: Area,
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crest: string,
    address: string,
    website: string,
    founded: number,
    clubColors: string,
    venue: string,
    runningCompetitions: RunningCompetitions,
    coach: Coach,
    squad: Person[],
}

export interface RunningCompetitions {
    id: number,
    name: string,
    code: string,
    type: string,
    emblem: string,
}


export const teamsService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeamById: builder.query<Team, number> ({
            query: (id: number) => ({
                url: `/teams/${id}`,
                method: 'GET',
            })
        })
    })
})

export default Team;