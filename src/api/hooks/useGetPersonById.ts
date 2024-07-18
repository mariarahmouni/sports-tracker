import React from "react";
import { toast } from "react-toastify";
import { Player, playerService } from "../services/playerService";
import Persons from "../../components/Players";

const useGetPersonById = (id: number): Player | undefined => {
    const [person, setPerson] = React.useState<Player>();

    const [triggerGetPersonById, { isFetching }] = playerService.useLazyGetPersonByIdQuery();

    React.useEffect(() => {
        if (!isFetching) {
            triggerGetPersonById(id)
                .unwrap()
                .then((person) => {
                    setPerson(person);
                })
                .catch(() => {
                    toast.error('Uh oh. Shit broke.')
                });

        }
    }, [id, isFetching, triggerGetPersonById]);
    return person;
}

export default useGetPersonById;