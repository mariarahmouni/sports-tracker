interface RosterProps {
    teamId?: number;
}

const Roster = ({teamId}: RosterProps): JSX.Element => {
    
    return <div>{teamId}</div>
}

export default Roster;