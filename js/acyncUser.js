const loadUser = () =>{
    const url = `https://randomuser.me/api/?gender=female`
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
    .catch(error => console.log(error))
}

const displayUser = user =>{
    console.log(user)
}

const loadAcycnUser = async() =>{
    const url = `https://randomuser.me/api/?gender=female`

    try{
        const res = await fetch(url)
        const data = await res.json()
        displayAllAcync(data.results[0]);
    }
    catch(error){
        console.log(error)
    }
  
    
}

const displayAllAcync = user =>{
    console.log(user)
}