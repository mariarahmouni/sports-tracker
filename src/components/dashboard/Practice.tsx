import { Person } from "../../api/services/personsService";
import useGetAllPersons from "../../api/hooks/useGetAllPersons";

const Practice = () => {
    const persons = useGetAllPersons();
    return (
        <ul>
            {persons.map((person) => (
                <li key={person.id}>{person.firstName}</li>
            ))}
        </ul>
    );
}

export default Practice;