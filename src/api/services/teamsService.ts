
interface Team {
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
    area: Area,
}

export interface Area {
    id: number,
    name: string,
    code: string,
    flag: string,
}

export interface RunningCompetitions {
    id: number,
    name: string,
    code: string,
    type: string,
    emblem: string,
}


export default Team;