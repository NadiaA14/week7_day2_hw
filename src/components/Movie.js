import React from "react";

const Movie = ({movie}) => {

    return (
        <>
        <h2><a href="{movie.url}">{movie.name}</a></h2>
        </>
    )
}

export default Movie;