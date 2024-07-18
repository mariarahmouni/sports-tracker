import useGetAllPersons from "../api/hooks/useGetAllPersons";

const Persons = (): JSX.Element => {
    const persons = useGetAllPersons();

    return (<div>Persons!
        {persons.map((p) => <span>{`${p.first_name} ${p.last_name}`}</span>)}
    </div>)
}

export default Persons;