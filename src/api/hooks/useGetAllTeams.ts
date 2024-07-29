import React from "react";
import { Team, teamsService } from "../services/teamsService";
import { toast } from "react-toastify";

const useGetAllTeams = (): {
    teams: Team[] | undefined,
    isLoading: boolean,
} => {
    const [teams, setTeams] = React.useState<Team[]>();
    const [triggerGetAllTeams, { isFetching }] = teamsService.useLazyGetAllTeamsQuery();

    React.useEffect(() => {
        if (!isFetching) {
            triggerGetAllTeams()
                .unwrap()
                .then((response) => {
                    const filteredTeams = response.data.filter((team: Team) => team.division != "");
                    setTeams(filteredTeams);
                })
                .catch(() => {
                    toast.error("Uh oh! Something went wrong retrieving teams.")
                });
        }
    }, []
    )
    return {
        teams,
        isLoading: isFetching,
    };
}

export default useGetAllTeams;