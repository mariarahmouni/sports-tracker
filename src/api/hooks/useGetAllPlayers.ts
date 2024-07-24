import React from "react";
import { Player, playerService } from "../services/playerService";
import { toast } from "react-toastify";

const useGetAllPlayers = (): {
    players: Player[],
    isLoading: boolean,
    getPlayers: () => void
} => {
    const [cursor, setCursor] = React.useState<string | null>(null);
    const [players, setPlayers] = React.useState<Player[]>([]);

    const [triggerGetAllPlayers, { isFetching }] = playerService.useLazyGetAllPlayersQuery();

    const getPlayers = () => {
        if (!isFetching) {
            triggerGetAllPlayers(cursor)
                .unwrap()
                .then((response) => {
                    setPlayers(response.data);
                    setCursor(response.meta.next_cursor)
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
    };
}

export default useGetAllPlayers;



// import React from "react";
// import { Player, playerService } from "../services/playerService";
// import { toast } from "react-toastify";

// const useGetAllPlayers = (): Player[] => {
//     const [players, setPlayers] = React.useState<Player[]>([]);

//     const [triggerGetAllPlayers, {isFetching}] = playerService.useLazyGetAllPlayersQuery();

//     React.useEffect(() => {
//         if (!isFetching) {
//             triggerGetAllPlayers()
//             .unwrap()
//             .then((players) => {
//                 setPlayers(players);
//             })
//             .catch(() => {
//                 toast.error('Uh oh! Shit broke');
//             });
//         }
//     }, []);

//     return players;
// }

// export default useGetAllPlayers;