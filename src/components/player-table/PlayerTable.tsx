import classes from "../../styles/PlayerTable.module.css"
import { Player } from "../../api/services/playerService";
import { Container } from "@mantine/core";
import { DataTable } from 'mantine-datatable';
import { useState, useEffect } from "react";
import useGetAllPlayers from "../../api/hooks/useGetAllPlayers";


interface PlayerTableProps {
    players: Player[],
    getPlayers: () => void
}

const PlayerTable = ({ players, getPlayers }: PlayerTableProps): JSX.Element => {
    const PAGE_SIZE = 25;
    const [page, setPage] = useState(1);
    // const [records, setRecords] = useState(players.slice(0,PAGE_SIZE));


    useEffect(() => {
        getPlayers();
    }, [page]);

    return (
        <Container >
            <DataTable
                records={players}
                columns={[
                    { accessor: 'first_name' },
                    { accessor: 'team.full_name', title: 'Team' },
                    { accessor: 'position' },
                    { accessor: 'jersey_number', title: 'Number' },
                ]}
                totalRecords={500}
                recordsPerPage={PAGE_SIZE}
                page={page}
                onPageChange={(p) => setPage(p)}

            />



        </Container>
    );
};

export default PlayerTable;