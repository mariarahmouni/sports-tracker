import React from "react";
import { Player, playerService } from "../services/playerService";
import { toast } from "react-toastify";

const useGetAllPersons = (): Player[] => {
    const [persons, setPersons] = React.useState<Player[]>([]);

    const [triggerGetAllPersons, {isFetching}] = playerService.useLazyGetAllPersonsQuery();

    React.useEffect(() => {
        if (!isFetching) {
            triggerGetAllPersons()
            .unwrap()
            .then((persons) => {
                setPersons(persons);
            })
            .catch(() => {
                toast.error('Uh oh! Shit broke');
            });
        }
    }, []);

    return persons;
}

export default useGetAllPersons;