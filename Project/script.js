let movie = [

    {
        name: "Blade runner 2049",
        poster: "https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=90&crop=false",
        rating: 8.7
    },

    {
        name: "Joker",
        poster: "https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF1000,1000_QL80_.jpg",
        rating: 9.5
    },

    {
        name: "Avengers Endgame",
        poster: "https://images-cdn.ubuy.co.in/634d0a48023cd2292277f3df-avengers-endgame-marvel-studios-framed.jpg",
        rating: 8.5
    },

    {
        name: "Oppenheimer",
        poster: "https://www.tallengestore.com/cdn/shop/products/Oppenheimer-CillianMurphy-ChristopherNolan-HollywoodMoviePoster_1_512x512.jpg?v=1647416509",
        rating: 9.0
    },

    {
        name: "The dark knight",
        poster: "https://www.kwikkopy.com.au/wp-content/uploads/2014/11/The-Dark-Knight.jpg",
        rating: 8.0
    },

    {
        name: "Titanic",
        poster: "https://lh4.googleusercontent.com/rMTDOXqasjSxgJ9CcABK5JL1C0CFQHq2ImGz162m6QYD-PFfXuQxkyX53E4kyilHum_OGMXJoPONY8rlYTEKWkmTwJXtXlblA0uitj4RBlyKi6hm_-Lbgq9EGMwpQwdIsFn06m51",
        rating: 8.5
    },

    {
        name: "Harry potter",
        poster: "https://www.designmantic.com/blog/wp-content/uploads/2017/10/Harry-Potter.jpg",
        rating: 9.7
    }


];


function searchMovie() {
    let movieName = document.getElementById('search').value;
    
    if(movieName!=="")
    {
        let result = movies.filter(function(movie)
        {
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })

        displayMovies(result);
    }
}

function displayMovies(data) 
{

document.getElementById("movies").innerHTML="";

    let htmlString = ``;

    for (let i = 0; i < data.length; i++) 
    {
        htmlString = htmlString + `        
        <div class="movie">
            <div class="overlay">
                <div class="video">
 
                </div>
 
            <div class="details">
                <h1>${data[i].name}</h1>
                <h2>IMDB : ${data[i].rating}</h2>
                <P>John wick . Robert Pattison . Emma Stone</P>
            </div>
 
            </div>
            <img  class="poster" src="${data[i].poster}">
        </div>
    `
    }

    console.log(htmlString);

    document.getElementById("movies"), innerHTML = htmlString;
}

displayMovies(movies);









// let movie = document.createElement("div");
// movie.classList.add("Movie");

// let overlay = document.createElement("overlay");
// overlay.classList.add("Overlay");

// movie.appendChild(overlay)

// console.log(movie);