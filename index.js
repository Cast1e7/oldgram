const feedContainer = document.querySelector(".feed-container")
let feed = ""
let postNotLiked = []
let imgHeart = []

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for (i=0; i < posts.length; i++) {
    postNotLiked[i] = true
    imgHeart[i] = "images/icon-heart.png"
}

function displayPosts() {
    feedContainer.innerHTML = ""
    feed = ""
    for (let i=0; i < posts.length; i++) {
    feed += `<section class="post-container">
                <div class="user">
                    <img class="profile-pic" src="${posts[i].avatar}">
                    <div class="user-info">
                        <p class="bold user-name">${posts[i].name}</p>
                        <p class="user-location">${posts[i].location}</p>
                    </div>
                </div>
                <img class="post-image" ondblclick="likePost(${i})" src="${posts[i].post}">
                <div class="post-body">
                    <div class="icons">
                        <img class=".active icon-img" onclick="likePost(${i})" src=${imgHeart[i]}>
                        <img class="icon-img" src="images/icon-comment.png">
                        <img class="icon-img" src="images/icon-dm.png">                    
                    </div>
                    <p class="bold likes">${posts[i].likes} likes</p>
                    <p class="comments"><span class="bold">${posts[i].username}</span>&emsp;${posts[i].comment}</p>
                </div>
            </section>`
}

feedContainer.innerHTML = feed
}

displayPosts()


function likePost(u) {
    if (postNotLiked[u]) {
        posts[u].likes ++
        postNotLiked[u] = false
        imgHeart[u] = "images/postliked.png"
    } else {
        posts[u].likes --
        postNotLiked[u] = true
        imgHeart[u] = "images/icon-heart.png"
    }
     displayPosts() 
}
