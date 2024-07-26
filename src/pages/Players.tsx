import React, { useEffect } from "react";
import NavBar from "../components/navigation-bar/NavBar";
import useGetAllPlayers from "../api/hooks/useGetAllPlayers";
import { Button } from "@mantine/core";
import classes from '../styles/Players.module.css'
import PlayerTable from "../components/player-table/PlayerTable";

const Players = () => {
    const { players, isLoading, getPlayers } = useGetAllPlayers();
    
    // const playersList = React.useMemo(() =>
    //     players.map((player) => (
    //         <div key={player.id}>
    //             <h2>{player.first_name} {player.last_name}</h2>
    //         </div>
    //     ))
    //     , [players]);

    return (
        <div>

            <NavBar />
            
            <PlayerTable players={players} getPlayers={getPlayers}/>           
        </div>
    );
};

export default Players;

