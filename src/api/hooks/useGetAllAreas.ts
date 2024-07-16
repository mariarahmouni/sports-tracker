import React from "react";
import { toast } from "react-toastify";
import { Area, areaService } from "../services/areaService";

const useGetAreaById = (id:number): Area | undefined => {
    const [area, setArea] = React.useState<Area>();
    const [triggerGetAreaById, {isFetching}] = areaService.useLazyGetAreaByIdQuery();

    React.useEffect(() => {
        if (!isFetching) {
            triggerGetAreaById(id)
            .unwrap()
            .then((response) => {
                setArea(response);
            })
            .catch(() => {
                toast.error('Uh oh! Shit broke');
            });
        }
    }, []);
    return area;
}

export default useGetAreaById;