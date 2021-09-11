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

    postScore = (score, id) => {
        return fetch("http://localhost:3000/scores", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({score: score, user_id:id}),
        })
        .then(response => response.json())
    }

    getUserScores = (id) => {
        return fetch(`http://localhost:3000/users/${id}`).then(res=>res.json())
    }
    

    getScores = () => {
       return  fetch("http://localhost:3000/scores").then(res=>res.json())
    }

    

}