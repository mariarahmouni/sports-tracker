import React from "react";
import { toast } from "react-toastify";
import { Player, playerService } from "../services/playerService";

const useGetPlayerById = (id: number): Player | undefined => {
    const [player, setPlayer] = React.useState<Player>();

    const [triggerGetPlayerById, { isFetching }] = playerService.useLazyGetPlayerByIdQuery();

    React.useEffect(() => {
        if (!isFetching) {
            triggerGetPlayerById(id)
                .unwrap()
                .then((response) => {
                    setPlayer(response.data);
                })
                .catch(() => {
                    toast.error('Uh oh. Shit broke.')
                });

        }
    }, [id, isFetching, triggerGetPlayerById]);
    
    return player;
}

export default useGetPlayerById;