import classes from "../../styles/PlayerTable.module.css"
import { Player } from "../../api/services/playerService";
import { Container } from "@mantine/core";
import { DataTable } from 'mantine-datatable';
import { useState, useEffect } from "react";


interface PlayerTableProps {
    players: Player[],
    getPlayers: () => void
}

const PlayerTable = ({ players, getPlayers }: PlayerTableProps): JSX.Element => {
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(players.slice(0, 25));

    useEffect(() => {
        const from = (page - 1) * 25;
        const to = from + 25;
        setRecords(players.slice(from, to));
    }, [page]);


    return (
        <Container >
            <DataTable
                columns={[
                    { accessor: 'first_name' },
                    { accessor: 'team.full_name', title: 'Team' },
                    { accessor: 'position' },
                    { accessor: 'jersey_number', title: 'Number' },
                ]}
                records={players}
                totalRecords={500}
                recordsPerPage={25}
                page={page}
                onPageChange={(p) => setPage(p)}

            />



        </Container>
    );
};

export default PlayerTable;