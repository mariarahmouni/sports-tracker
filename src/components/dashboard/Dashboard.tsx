import NavBar from "../navigation-bar/NavBar";
import Persons from "../Players";


const Dashboard = () => {
    

    return (
        <div>
            <NavBar />
            <Persons />
           <h1>Hello, this is the dashboard.</h1> 
           {/* <DropdownComponent data={} more="More items here" /> */}
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