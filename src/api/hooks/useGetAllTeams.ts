import React from "react";
import Team, { teamsService } from "../services/teamsService";
import { toast } from "react-toastify";

export const useGetAllTeams = (): {
    teams: Team[],
    isLoading: boolean,
    getTeams: () => void,
} => {
    const [teams, setTeams] = React.useState<Team[]>([]);
    const [cursor, setCursor] = React.useState<string | null>(null);

    const [triggerGetAllTeams, { isFetching }] = teamsService.useLazyGetAllTeamsQuery();

    const getTeams = () => {
        if(!isFetching) {
            triggerGetAllTeams( cursor )
            .unwrap()
            .then((teamsResponse) => {
                setTeams(teamsResponse.data);
                setCursor(teamsResponse.meta.next_cursor);
            })
            .catch(() => {
                toast.error("Uh oh! Something went wrong fetching teams.")
            });

        }
    }
    return {
        teams,
        isLoading: isFetching,
        getTeams,
    };
}

export default useGetAllTeams;