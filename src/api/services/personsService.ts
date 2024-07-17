import apiSlice from "../apiSlice";
import Team from "./teamsService";

export interface Person {
    id: number,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    nationality: string,
    position: string,
    shirtNumber: number | null,
    lastUpdated: string,
    currentTeam: Team, 
}

export interface Coach { // unsure of whether this will be helpful
    id: number,
    firstName: string,
    lastName: string,
    name: string,
    dateOfBirth: string,
    nationality: string,
    contract: { start: string, until: string}
}

export const personService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPersonById: builder.query<Person, number>({
            query: (id:number) => ({
                url: `/persons/${id}`,
                method: 'GET',
            }),
        }),
        getPersonByName: builder.query<Person, string> ({
            query: (name: string) => ({
                url: `/persons.${name}`,
                method: 'GET',
            })
        }),
        getAllPersons: builder.query<Person[], void>({
            query: () => ({
                url: `/persons`,
                method: 'GET',
            })
        }),
    }),
    overrideExisting: true,
});
