import classes from "../../styles/PlayerTable.module.css"
import { Player } from "../../api/services/playerService";
import { Card } from "@mantine/core";
import { DataTable } from 'mantine-datatable';
import { useState } from "react";
import useGetAllPlayers from "../../api/hooks/useGetAllPlayers";


const PlayerTable = (): JSX.Element => {
    const { players, isLoading, getPlayers, pageNumber } = useGetAllPlayers();
    const [page, setPage] = useState(1);


    return (
        <div className={classes.wrapper}>
            <Card className={classes.card}>
                <DataTable className={classes.table} 
                    striped
                    stripedColor="#40c057"
                    borderColor="#40c057"
                    highlightOnHover
                    withTableBorder
                    records={players}
                    columns={[
                        { accessor: 'name', title: 'Name', render: (player: Player) => `${player.first_name} ${player.last_name}` },
                        { accessor: 'team.full_name', title: 'Team', },
                        { accessor: 'position' },
                        { accessor: 'jersey_number', title: 'Number' },
                    ]}
                    totalRecords={500}
                    recordsPerPage={pageNumber}
                    page={page}
                    onPageChange={(p) => {
                        setPage(p);
                        getPlayers(p);
                    }}
                    fetching={true? isLoading : false}
                    loadingText="Loading..."
                    loaderType="dots"
                    loaderColor="blue"
                    loaderBackgroundBlur={2}
                />
            </Card>
        </div>
    );
};

export default PlayerTable;