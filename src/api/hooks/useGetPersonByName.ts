import React from "react";
import { toast } from "react-toastify";
import { Person, personService } from "../services/personsService";

const useGetPersonByName = (): Person => {
    const[person, setPerson] = React.useState<Person>();

    const[triggerGetPersonByName, {isFetching}] = personService.useLazyGetPersonByNameQuery();

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