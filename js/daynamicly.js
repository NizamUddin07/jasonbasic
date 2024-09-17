function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data=>displayPost(data))
}


// 1.get the element where you want to add 
// 2. create child element 
// 3. set innerText to innerHTML
// 4. appandChild


function displayPost(posts){
    const postContainer = document.getElementById('post-container');
   for(const post of posts){
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
    <h4>user-${post.userId}</h4>
    <h5> Post : ${post.title}</h5>
    <p> Paragraph: ${post.body}</p>
    `;
    postContainer.appendChild(postDiv);




    console.log(post)
   }
}

loadPost();