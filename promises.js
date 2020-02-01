function build (wall, callback) {
    console.log('I am building')
    wall.isBuilt = true
    const error = !wall.isBuilt
    callback(error, wall)
}

function planish (wall, callback) {
    console.log('I am planishing')
    wall.isPlanished = true
    const error = !wall.isPlanished
    callback(error, wall)
}

function paint (wall, callback) {
    console.log('I am painting')
    wall.isPainted = true
    const error = !wall.isPainted
    callback(error, wall)
} 



// const promesa =() =>{
//     return new Promise((resolve, reject) =>{

// })
// }

// function prom (){
//     return new Promise ((resolve, reject) => {

// })
// }

// function isMyName(name) {
//     const myName = 'itiel'
//     return new Promise ((resolve, reject) => {
//         if (name === myName) {
//                 return resolve(true)
//             }
//             reject(false)
//         })
//     }

