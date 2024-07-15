import React from "react";
import { toast } from "react-toastify";
import { Person, personService } from "../services/personsService";
import Persons from "../../components/Persons";

const useGetPersonById = (id: number): Person | undefined => {
    const [person, setPerson] = React.useState<Person>();

    const [triggerGetPersonById, { isFetching }] = personService.useLazyGetPersonByIdQuery();

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