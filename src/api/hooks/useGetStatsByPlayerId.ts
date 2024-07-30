import { useState, useEffect } from "react";
import statisticsService, { Statistics } from "../services/statisticsService";
import { toast } from "react-toastify";

const useGetSeasonAveragesByPlayerId = (player_id: number): {
    stats?: Statistics,
    isLoading: boolean,
} => {
    const [stats, setStats] = useState<Statistics>();
    const [triggerGetSeasonAveragesByPlayerId, { isFetching }] = statisticsService.useLazyGetSeasonAveragesByPlayerIdQuery();

    useEffect (() => {
        if(!isFetching) {
            triggerGetSeasonAveragesByPlayerId(player_id)
            .unwrap()
            .then((response) => {
                setStats(response.stats);
            })
            .catch(() => {
                toast.error("Uh, oh. Something went wrong retrieving this player's season averages.")
            })
        }
    }, [player_id]);
    return {
        stats,
        isLoading: isFetching,
    };
};

export default useGetSeasonAveragesByPlayerId;