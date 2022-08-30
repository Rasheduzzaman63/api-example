const loadQutes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQutes(data))
}

const displayQutes = qoute =>{
    const blockQoutes = document.getElementById('qoute')
    console.log(qoute)
    blockQoutes.innerText = qoute.quote;
}