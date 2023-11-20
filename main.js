class Movie {
    constructor(Name, Yera, Img) {
        this.Name = Name;
        this.Year = Yera;
        this.Img = Img;
    }
}



const getSearchMovie = async () => {

    const inputvalue = document.getElementById("inputs").value
    const FecthMovie = await (await fetch(`https://www.omdbapi.com/?s=${inputvalue}&page=1&apikey=fb542122`)).json()
    console.log(FecthMovie.Search)
    const AllData = FecthMovie.Search
    console.log(AllData)
    const a = getmovieMapa(AllData)
    const b = a.map((birdata) => {
        return birdata.Year
    })
    console.log(b)
}

const getmovieMapa = (data) => {
    return data.map((data) => (
        new Movie(data.Title, data.Year, data.Poster)
    ));
}




document.getElementById("btns").addEventListener("click", getSearchMovie)

