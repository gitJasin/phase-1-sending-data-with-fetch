function submitData (userName, userEmail) {
    const userInfo = {
        name: userName,
        email: userEmail
    }
    
    const createPost = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
    }

    return fetch('http://localhost:3000/users', createPost)
    .then(response => response.json())
    .then((user) => {
        document.querySelector('body').innerHTML = user.id
    })
    .catch((error) => {
        alert('Unauthorized Access')
        document.querySelector('body').innerHTML = error      
    }) 
}

