class ApiService {


    login = (username) => {
        return fetch('http://localhost:3000/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username}),
        })
        .then(response => response.json())
    }
}