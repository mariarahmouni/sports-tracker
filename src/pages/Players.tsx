import React from "react";
import NavBar from "../components/navigation-bar/NavBar";
import useGetAllPlayers from "../api/hooks/useGetAllPlayers";
import { Button } from "@mantine/core";
import classes from '../styles/Players.module.css'

const Players = () => {
    const { players, isLoading, getPlayers } = useGetAllPlayers(); 

    const playersList = React.useMemo(() =>
        players.map((player) => (
            <div key={player.id}>
                <h2>{player.first_name} {player.last_name}</h2>
            </div>
        ))
        , [players]);
    

    return (
        <div>
            
            <NavBar />
            {playersList}
            
            <Button onClick={getPlayers} className = {classes.loadMoreButton}>
                {isLoading ? 'Loading...' : 'Load More'}
            </Button>
        </div>
    );
};

export default Players;

