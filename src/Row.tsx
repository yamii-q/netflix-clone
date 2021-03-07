import {useEffect, useState} from "react";
import axios from "axios";
import {requests} from "./request";

type Props = {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

type Movie = {
    id: string;
    name: string;
    title: string;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
};

export const Row = ({title, fetchUrl, isLargeRow}: Props) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="Row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map((movie, i) => (
                    // <p>{movie.id}</p>
                    <div>
                        <img
                            key={movie.id}
                            className={`row-poster`}
                            src={`${requests.imageBaseUrl}${movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    </div>


                ))}
            </div>
        </div>
    );
};
