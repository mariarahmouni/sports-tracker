import useGetAllPersons from "../../api/hooks/useGetAllPersons";
import NavBar from "../navigation-bar/NavBar";
import { Person } from "../../api/services/personsService";
import Practice from "./Practice";


const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <Practice /> 
            <h1>Hello, I am the Dashboard.</h1>
           
        </div>
    );
};

export default Dashboard;

// interface Monster {
//     id: number
//     name: string
// }

// interface CardListProps {
//     monsters: Monster[]
// }

// const Dashboard = ({monsters} : CardListProps) => {

//     const navigate = useNavigate();
    
//     return (<div>
//         <button onClick={() => navigate('home')}>Take me away to a secret hideaway</button>
//         {monsters.map((monster) => (
//             <h1 key = {monster.id}> {monster.name} </h1>
//         ))}
//     </div>);
// }