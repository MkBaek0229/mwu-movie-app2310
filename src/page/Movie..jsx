import { data } from "../data/test";


function Movie() {
    return (
        <>
            <Header />
            {data.results.map((movie) => (
                <ul key={movie.id}> 
                    <li>{movie.title}</li>
                </ul>
            ))}
        </>
    );
}
	

export default Movie;