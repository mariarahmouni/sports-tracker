import React from "react";
import { Player, playerService } from "../services/playerService";
import { toast } from "react-toastify";

const useGetPlayerByName = (search: string): Player | undefined => {
    const [player, setPlayer] = React.useState<Player>();
    const [triggerGetPlayerByName, isFetching] = playerService.useLazyGetPlayerByNameQuery();


    React.useEffect(() => {
        if (!isFetching) {
            triggerGetPlayerByName(search)
                .unwrap()
                .then((playerResponse) => {
                    setPlayer(playerResponse.data);
                })
                .catch(() => {
                    toast.error('Uh oh. Shit broke.')
                });

        }
    }, [search, isFetching, triggerGetPlayerByName]);

    return player
}

export default useGetPlayerByName;