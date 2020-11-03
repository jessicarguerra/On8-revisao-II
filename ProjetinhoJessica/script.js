//https://api.github.com/users/${userGithubValue}

//http://api.giphy.com/v1/gifs/trending?api_key=b46MWywKt5JwuSCnpEa7q9KNRDtPUc02

let input = document.getElementById('input')
let botao = document.getElementById('btn')
let card = document.getElementById('card')

botao.addEventListener('click', async (e)=> {
    e.preventDefault()

    let userGithubValue = input.value;

    let user = await axios.get(`https://api.github.com/users/${userGithubValue}`)
    let userName = document.createElement('h2')
    userName.setAttribute('id', 'user')
    userName.innerHTML = `${user.data.name}, seu humor hoje é:`
    card.appendChild(userName)

    console.log(user)

    let gif = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=b46MWywKt5JwuSCnpEa7q9KNRDtPUc02`)
    let array = gif.data.data
    console.log(gif)
    console.log(array)

    let gifAleatorio = array.reduce( ()=>{
        return Math.floor(Math.random() * array.length) 
    })

    let capturargif = array[gifAleatorio].images.downsized.url
    let img = document.createElement('img')
    img.setAttribute('src', capturargif)
    card.appendChild(img)

});
