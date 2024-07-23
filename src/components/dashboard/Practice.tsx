import React from "react";
import useGetAllPlayers from "../../api/hooks/useGetAllPlayers";

const Practice = () => {
    const { players, isLoading, getPlayers } = useGetAllPlayers();

    const playersList = React.useMemo(() => 
        players.map((player) => (
            <div key={player.id}>
                <h2>{player.first_name} {player.last_name}</h2>
                <p>Position: {player.position}</p>
            </div>
        ))
    , [players]);

    return (
        <div>
            {playersList}
            <button onClick={getPlayers}>
                {isLoading ? 'Loading...' : 'Load More'}
            </button>
        </div>
    );
}

export default Practice;
