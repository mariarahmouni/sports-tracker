import { Button, resolveClassNames } from "@mantine/core";
import useGetAllTeams from "../api/hooks/useGetAllTeams";
import NavBar from "../components/navigation-bar/NavBar";
import React from "react";

const Teams = () => {
    const { teams, isLoading, getTeams } = useGetAllTeams();

    const teamsList = React.useMemo(() =>
        /* MUST GET RID OF OUTDATED TEAMS! IT RESPONDS WITH SHEBOYGAN REDSKINS (50s) */
        teams.map((team) => (
            <div key={team.id} >
                <h2>{team.full_name}</h2>
            </div>
        ))
        , [teams]);


    return (
        <div>
            <NavBar />
            {teamsList}
            <Button onClick={getTeams} >
                {isLoading ? 'Loading...' : 'Load More'}
            </Button>

        </div>

    );
}

export default Teams; 