import React from "react";
import { Player, playerService } from "../services/playerService";
import { toast } from "react-toastify";

const useGetAllPlayers = (): {
    players?: Player[],
    isLoading: boolean,
    getPlayers: (pageNumber: number) => void,
    pageNumber: number,
} => {
    const [players, setPlayers] = React.useState<Player[]>();
    const PAGE_SIZE = 10;
    const [triggerGetAllPlayers, { isFetching }] = playerService.useLazyGetAllPlayersQuery();

    React.useEffect(() => {
        getPlayers(1);
    }, [])

    const getPlayers = (pageNumber: number) => {
        if (!isFetching) {
            const cursor = (pageNumber - 1) * PAGE_SIZE;
            triggerGetAllPlayers(cursor.toString())
                .unwrap()
                .then((response) => {
                    const filteredPlayers = response.data.filter((player: Player) => player.draft_year >= 2003);

                    setPlayers(filteredPlayers);
                })
                .catch(() => {
                    toast.error('Uh oh! Something went wrong retrieving players.');
                });
        }
        
    }

    return {
        players,
        isLoading: isFetching,
        getPlayers,
        pageNumber: PAGE_SIZE
    };
}

export default useGetAllPlayers;

