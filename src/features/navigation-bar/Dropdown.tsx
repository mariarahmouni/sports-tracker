
export interface DropLink {
    id: number;
    name: string;
    image: string; //what type should images be?
}

interface DropLinksProps {
    data: DropLink[];
    more: string;
}

export const DropdownComponent = ({ data, more }: DropLinksProps): JSX.Element => {
    return (
        <div> 
            {data.map((d) => (
                <div key={d.id}>
                <h1 > {d.name}</h1>
                <img src={d.image} alt={d.name}style={{ width: '50px', height: '50px' }} />
                </div>
            ))};
            <div>{more}</div>
        </div>
    );
};
// return (
//     <div>
//         {monsters.map((monster) => (
//             <h1 key = {monster.id}> {monster.name} </h1>
//         ))}
//     </div>
// )
