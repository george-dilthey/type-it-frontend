class ApiService {


    findOrCreateUser = (username) => {
        return fetch("http://localhost:3000/users", {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username}),
        })
        .then(response => response.json())
    }
    

    getScores = () => {
       return  fetch("http://localhost:3000/scores").then(res=>res.json())
    }

    

}