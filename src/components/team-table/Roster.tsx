import { DataTable } from "mantine-datatable";
import useGetTeamRoster from "../../api/hooks/useGetTeamRoster";
import { Player } from "../../api/services/playerService";
import classes from "../../styles/TeamTable.module.css"
import { ScrollArea } from '@mantine/core';

interface RosterProps {
    teamId: number;
}

const Roster = ({ teamId }: RosterProps): JSX.Element => {
    const { roster, isLoading } = useGetTeamRoster(teamId);
    if (roster) {
        return (
                <DataTable
                    className={classes.roster}
                    records={roster}
                    columns={[
                        { accessor: 'name', title: 'Name', 
                            render: (player: Player) => `${player.first_name} ${player.last_name}` },
                        { accessor: 'jersey_number', title: 'Number'},
                        
                    ]}
                    
                    loaderType="dots"
                    loaderColor="blue"
                    loaderBackgroundBlur={2}
                    noRecordsText=""
                    noRecordsIcon={<div />}
                />

        );
    };
    return (
        <div> </div>
    );
};

export default Roster;