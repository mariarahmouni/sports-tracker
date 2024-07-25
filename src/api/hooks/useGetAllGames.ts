import React from "react";
import Game, { gameService} from "../services/gameService";
import { toast } from "react-toastify";

const useGetAllGames = (): {
    games: Game[],
    isLoading: boolean,
    getGames: () => void
} => {

    const [cursor, setCursor] = React.useState<string | null>(null);
    const [games, setGames] = React.useState<Game[]>([]);

    const [triggerGetAllGames, { isFetching }] = gameService.useLazyGetAllGamesQuery();

    const getGames = () => {
        if (!isFetching) {
            triggerGetAllGames(cursor)
            .unwrap()
            .then((response) => {
                setGames(response.data);
                setCursor(response.meta.next_cursor);
            })
            .catch(() => {
                toast.error('Uh oh! Something went wrong fetching all current season games.')
            })
        }
    }
    return {
        games, 
        isLoading: isFetching, 
        getGames,
    }
}

export default useGetAllGames;