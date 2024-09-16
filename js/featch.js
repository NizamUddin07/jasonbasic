// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url).then(Response=> Response.json())
    .then(json=>console.log(json))
}

function loadUser(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch  (url).then(Response=>Response.json()).then(json=>console.log(json))
}



function displayUser2(data){
    for(const user of data){
        console.log(user.email);
    }
}