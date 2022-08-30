const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUser(data.results))
} 

const displayUser = users => {
   for(const user of users){
    console.log(user)
    const userContainer = document.getElementById('user-container');
    const createDiv = document.createElement('div')
    createDiv.innerHTML = `
    <h2>Name : ${user.id.name} </h2>
    <h5>Email : ${user.email} </h5>
    <h5>Location : ${user.location.city} </h5>
    `
    userContainer.appendChild(createDiv)
   }
   
}

loadUser();