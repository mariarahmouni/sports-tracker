import React from "react";
import { toast } from "react-toastify";
import { Person, personService } from "../services/personsService";

const useGetPersonByName = (name:string): Person | undefined => {
    const[person, setPerson] = React.useState<Person>();

    const[triggerGetPersonByName, {isFetching}] = personService.useLazyGetPersonByNameQuery();

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