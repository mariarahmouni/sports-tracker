import { Container } from "@mantine/core";
import NavBar from "../navigation-bar/NavBar";
import Persons from "../Players";


const Dashboard = () => {
    return (

        <>
            <NavBar />
            <h1>Hello, I am the Dashboard.</h1>
       </>
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