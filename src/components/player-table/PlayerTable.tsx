import classes from "../../styles/PlayerTable.module.css"
import { Player } from "../../api/services/playerService";
import { Container } from "@mantine/core";
import { DataTable } from 'mantine-datatable';
import { useState, useEffect } from "react";
import useGetAllPlayers from "../../api/hooks/useGetAllPlayers";


const PlayerTable = (): JSX.Element => {
    const { players, isLoading, getPlayers, pageNumber } = useGetAllPlayers();
    const [page, setPage] = useState(1);


    return (
        <Container className={classes.container}>
            <DataTable
                records={players}
                columns={[
                    { accessor: 'first_name' },
                    { accessor: 'team.full_name', title: 'Team' },
                    { accessor: 'position' },
                    { accessor: 'jersey_number', title: 'Number' },
                ]}
                totalRecords={3060}
                recordsPerPage={pageNumber}
                page={page}
                onPageChange={(p) => {
                    setPage(p);
                    getPlayers(p);
                }}
                loadingText="Loading..."
            />
        </Container>
    );
};

export default PlayerTable;