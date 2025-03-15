const apiKey = "e1f0ea6bd4624b907cd5abe3612a5321";
const baseURL = "https://api.themoviedb.org/3";

async function getMovies() {
    const response = await fetch(`${baseURL}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    
    const moviesList = document.getElementById("movies-list");
    moviesList.innerHTML = "";

    data.results.forEach(movie => {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");
        movieItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p>${movie.title}</p>
            <a href="https://moviebox.ph/embed/${movie.id}" target="_blank">Watch Now</a>
        `;
        moviesList.appendChild(movieItem);
    });
}

getMovies();
