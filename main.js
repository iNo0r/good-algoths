fetch('https://api.ipify.org?format=json', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
