import { useState, useEffect } from "react";
import statisticsService, { Statistics } from "../services/statisticsService";
import { toast } from "react-toastify";

const useGetStatsByPlayerId = (player_id: number): {
    stats?: Statistics,
    isLoading: boolean,
} => {
    const [stats, setStats] = useState<Statistics>();
    const [triggerGetStatesByPlayerId, { isFetching }] = statisticsService.useLazyGetStatsByPlayerIdQuery();

    useEffect (() => {
        if(!isFetching) {
            triggerGetStatesByPlayerId(player_id)
            .unwrap()
            .then((response) => {
                setStats(response.stats);
            })
            .catch(() => {
                toast.error("Uh, oh. Something went wrong retrieving this player's statistics.")
            })
        }
    }, [player_id]);
    return {
        stats,
        isLoading: isFetching,
    };
};

export default useGetStatsByPlayerId;