import { useEffect, useState } from "react";
import { Player, playerService } from "../services/playerService";
import { toast } from "react-toastify";

const useGetTeamRoster = (team_id: number): {
    roster?: Player[],
    isLoading: boolean,
} => {
    const [roster, setRoster] = useState<Player[]>();

    const [triggerGetTeamRoster, { isFetching }] = playerService.useLazyGetTeamRosterQuery();

    useEffect(() => {
        if (!isFetching) {
            triggerGetTeamRoster(team_id)
                .unwrap()
                .then((response) => {
                    const filteredRoster = response.data.filter((player: Player) => player.draft_year >= 2003);
                    setRoster(filteredRoster);
                })
                .catch(() => {
                    toast.error("Uh oh! Something went wrong retrieving team roster.")
                });
        }
    }, [team_id])
    return {
        roster,
        isLoading: isFetching,
    };
}
export default useGetTeamRoster;