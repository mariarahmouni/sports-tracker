import React from "react";
import { Person, personService } from "../services/personsService";
import { toast } from "react-toastify";

const useGetAllPersons = (): Person[] => {
    const [persons, setPersons] = React.useState<Person[]>([]);

    const [triggerGetAllPersons, {isFetching}] = personService.useLazyGetAllPersonsQuery();

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