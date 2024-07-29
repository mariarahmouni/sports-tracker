import useGetTeamRoster from "../api/hooks/useGetTeamRoster";
import NavBar from "../components/navigation-bar/NavBar";
import TeamTable from "../components/team-table/TeamTable";

const Teams = () => {
    const {roster, isLoading} = useGetTeamRoster(11);

    console.log(roster);
    return (
        <div>
        <NavBar />
           
           <TeamTable />

        </div>

    );
}

export default Teams; 