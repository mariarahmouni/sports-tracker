import classes from "../../styles/PlayerTable.module.css"
import { Card  } from "@mantine/core";
import { DataTable } from 'mantine-datatable';
import { useState  } from "react";
import useGetAllTeams from "../../api/hooks/useGetAllTeams";
import React from "react";
import Roster from "./Roster";

const TeamTable = (): JSX.Element => {
    const recordsPerPage = 10;
    const [page, setPage] = useState(1);
    const [teamId, setTeamId] = useState<number>();

    const { teams, isLoading} = useGetAllTeams();

    const currentRecords = React.useMemo(() => {
        const startIndex = (page - 1) * recordsPerPage;
        const endIndex = page * recordsPerPage;
        return teams?.slice(startIndex, endIndex); 
    }, [page, teams]);

    return (
        <div className={classes.wrapper}>
            <Card >
                <DataTable  
                    records={currentRecords}
                    columns={[
                        { accessor: 'full_name', title: 'Name' },
                        { accessor: 'conference', title: 'Conference', },
                        { accessor: 'division', title: 'Division'},
                    ]}
                    totalRecords={30}
                    recordsPerPage={recordsPerPage}
                    page={page}
                    onPageChange={(p) => {
                        setPage(p);
                    }}
                    fetching={isLoading}
                    loadingText="Loading..."
                    loaderType="dots"
                    loaderColor="blue"
                    loaderBackgroundBlur={2}
                    onCellClick={({record}) => {
                        setTeamId(record.id);
                    }}
                    noRecordsText=""
                    noRecordsIcon={<div/>}
                />
            </Card>
            <Roster teamId={teamId} />
        </div>
    );
};

export default TeamTable;