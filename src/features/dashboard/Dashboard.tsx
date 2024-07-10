import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    return <h1>Hello, this is the dashboard.</h1>;
};

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