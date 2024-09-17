// function getUserList(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=> res.json())
//     .then(data=> getUserList3(data))

// }

// function getUserList3(data){
//    const ul = document.getElementById('user-list');
//    for (const user of data){
//     console.log(user.name);
//     const li = document.createElement('li');
//     li.innerText = user.name;
//     ul.appendChild(li);
//    }

 
// }

function getUserList(){
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => getUser3(data))
}

function getUser3(data){
    const ul = document.getElementById('user-list');
    for (const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}