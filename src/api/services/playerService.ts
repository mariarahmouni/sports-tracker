import apiSlice from "../apiSlice";
import Team from "./teamsService";

export interface Player {
    id: number,
    first_name: string,
    last_name: string,
    position: string,
    height: string,
    weight: string,
    jersey_number: string,
    college: string,
    country: string,
    draft_year: number,
    draft_round: number,
    draft_number: number,
    team: Team,
    dateOfBirth: string,
    nationality: string,
    shirtNumber: number,
    lastUpdated: string,
}

export const playerService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPersonById: builder.query<Player, number>({
            query: (id:number) => ({
                url: `/persons/${id}`,
                method: 'GET',
            }),
        }),
        getPersonByName: builder.query<Player, string> ({
            query: (name: string) => ({
                url: `/persons.${name}`,
                method: 'GET',
            })
        }),
        getAllPersons: builder.query<Player[], void>({
            query: () => ({
                url: `/persons`,
                method: 'GET',
            })
        }),
    }),
    overrideExisting: true,
});
