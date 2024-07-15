import useGetAllPersons from "../api/hooks/useGetAllPersons";

const Persons = (): JSX.Element => {
    const persons = useGetAllPersons();

    return (<div>Persons!
        {persons.map((p) => <span>{`${p.firstName} ${p.lastName}`}</span>)}
    </div>)
}

export default Persons;