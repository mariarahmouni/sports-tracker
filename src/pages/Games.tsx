import NavBar from "../components/navigation-bar/NavBar";
import useGetAllGames from "../api/hooks/useGetAllGames";
import React from "react";
import { Button } from "@mantine/core";

const Games = () => {
    const { games, isLoading, getGames } = useGetAllGames();

    const gamesList = React.useMemo(() =>
        /* NEED TO CHECK IF THERE ARE GAMES TO BE DISPLAYED FOR THIS CURRENT SEASON */
        games.map((game) => (
            <div key={game.id} >
                <h2>
                    Home Team: {game.home_team.full_name} Away Team: {game.visitor_team.full_name}</h2>
            </div>
        ))
        , [games]);

    return (
        <div>
            <NavBar />
            {gamesList}
            <Button onClick={getGames} >
                {isLoading ? 'Loading...' : 'Load More'}
            </Button>

        </div>
    )
}

export default Games;