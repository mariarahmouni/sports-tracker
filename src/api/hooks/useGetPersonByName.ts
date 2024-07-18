import React from "react";
import { toast } from "react-toastify";
import { Player, playerService } from "../services/playerService";

const useGetPersonByName = (): Player => {
    const[person, setPerson] = React.useState<Player>();

    const[triggerGetPersonByName, {isFetching}] = playerService.useLazyGetPersonByNameQuery();

    React.useEffect(() => {
        if( !isFetching ){
            triggerGetPersonByName()
            .then((person) => {
                setPerson(person);
            })
            .catch(() => {
                toast.error('Uh Oh')
            })
        }
    })
}

export default useGetPersonByName;