const btn = document.querySelector('button')

// function clickHandler() {
//     console.log('a')
//     axios.get('https://swapi.dev/api/people/1')
//         .then((res) => {
//             console.log(res.data)
//             const name = document.createElement('h1')
//             name.textContent = res.data.name
//             console.log(name)
//             document.body.appendChild(name)

//             axios.get(res.data.homeworld)
//                 .then((res) => {
//                     console.log(res.data)
//                     const planetName = document.createElement('h2')
//                     planetName.textContent = `His home world is ${res.data.name}`
//                     document.body.appendChild(planetName)
//                 })
//         })
//     console.log('b')
// }

async function clickHandler() {
    let {data} = await axios.get('https://swapi.dev/api/people/1')
    // console.log(data)

    // const name = document.createElement('h1')
    // name.textContent = data.name
    // console.log(name)
    // document.body.appendChild(name)

    let {data: planetData} = await axios.get(data.homeworld)
    document.body.innerHTML += `<h2>${data.name}'s home planet is ${planetData.name}</h2>`
}

// function clickHandler() {
//     console.log(1)
//     setTimeout(() => console.log(2), 1000)
//     console.log(3)
// }

btn.addEventListener('click', clickHandler)