
import useGetAreaById from "../../api/hooks/useGetAllAreas";

const Practice = () => {
    const area = useGetAreaById(2000);
    if (area) {
        return (
            <h1>{area.name}</h1>
        );
    }
}

export default Practice;