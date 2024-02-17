//API URL 

let movieDataURL ='https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json';


//variables 
let movieData

//call canvas 
let canvas = d3.select('#canvas')
console.log(d3)

//create the drawing for the tree map
let createTreeMap = () => {
     
}

//call API 
console.log(movieDataURL)
d3.json(movieDataURL).then((data,error) => {
    if(error){
        console.log(error)
    } else {
        movieData = data 
        console.log(movieData)
        createTreeMap();

    }
})