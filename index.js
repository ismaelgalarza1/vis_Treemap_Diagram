//API URL 

let movieDataURL ='https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json';


//variables 
let movieData

//call canvas 
let canvas = d3.select('#canvas')

console.log(d3) // <----- (troubleshooting) console.log to display d3 had issues loading it in the console  

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
        console.log(movieData) // <-----(troubleshooting) console.log to display d3 I had issues loading data to the console 
        createTreeMap();

    }
})