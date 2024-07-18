import React from "react";
import { toast } from "react-toastify";
import { Player, playerService } from "../services/playerService";

const useGetPersonByName = (): Player => {
    const[person, setPerson] = React.useState<Player>();

    const[triggerGetPersonByName, {isFetching}] = playerService.useLazyGetPersonByNameQuery();

    React.useEffect(() => {
        if( !isFetching ){
            triggerGetPersonByName(name)
            .unwrap()
            .then((person) => {
                setPerson(person);
            })
            .catch(() => {
                toast.error('Uh Oh')
            })
        }
    },[name, isFetching, triggerGetPersonByName]);

    return person;
}

export default useGetPersonByName;