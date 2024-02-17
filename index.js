//API URL 

let movieDataURL ='https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json';


//variables 
let movieData

//call canvas 
let canvas = d3.select('#canvas')

console.log(d3) // <----- (troubleshooting) console.log to display d3 had issues loading it in the console  

//create the drawing for the tree map and crate the hierarchy for d3 
let createTreeMap = () => {
     let hierarchy = d3.hierarchy(movieData, (node) => {
        return node ['children']
     } ).sum((node) => {
        return node['value']
     }).sort((node1,node2) => {
        return node2['value'] - node1['value']
     })

     let createMap = d3.treemap()
                        .size([1000,600])

    createMap(hierarchy)

    let moviesTiles = hierarchy.leaves()

    let blocks =  canvas.selectAll('g')
            .data(moviesTiles)
            .enter()
            .append('g')
            .attr('transform', (movie) => {
                return 'translate(' + movie['x0'] + ', ' + movie['y0'] + ')'
            })

    blocks.append('rect')
        .attr('class', 'tile')
        .attr('fill', (movie) => {
            let category = movie['data']['category']

//if statement to determine the tile colors 

            if(category === 'Action'){
                return 'orange'
            } else if (category === 'Drama'){
                return 'lightgreen'
            } else if (category === 'Adventure'){
                return 'coral'
            } else if(category ===  'Family'){
                return 'lightblue'
            } else if (category === 'Animation'){
                return 'pink'
            } else if(category === 'Comedy'){
                return 'khaki'
            } else if(category === 'Biography'){
                return 'tan'
            }
    // added attr with data of name, category, value, width, and height of the tiles
        }).attr('data-name', (movie) => {
            return movie['data']['name']
        }).attr('data-category' , (movie) => {
            return movie['data']['category']
        }).attr('data-value', (movie) => {
            return movie['data']['value']
        }).attr('width', (movie) => {
            return movie['x1'] - movie['x0']
        }).attr('height', (movie) => {
            return movie['y1'] - movie['y0']
        })
// append block to add text inside of the tiles 

    blocks.append('text').text((movie) => {
            return movie['data']['name']
        }).attr('x', 5)
            .attr('y', 20 )
}

//call API 
console.log(movieDataURL)
d3.json(movieDataURL).then((data,error) => {
    if(error){
        console.log(error)
    } else {
        movieData = data 
        console.log(movieData) // <-----(troubleshooting) console.log to display json Data I had issues loading data to the console 
        createTreeMap();

    }
})