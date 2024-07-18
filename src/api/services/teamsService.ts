import apiSlice from "../apiSlice";
import { Area } from "./areaService";
import { Coach, Person } from "./personsService";

interface Team {
    area: Area,
    id: number,
    conference: string,
    division: string,
    city: string,
    name: string,
    full_name: string,
    abbreviation: string,
}

export default Team;