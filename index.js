const user ={
    name: "Ryan",
    lastname: "Ray",
    age: 20,
    nickname: "Rayn123",
    hobbies: ["run", "code", "eat"],
    address: {
        street: "123 Main St",
        city: "New York ",
    },
    married: false,
    greet() {
        return 'Hello'
    },
    something(){}
}

const friends = [
    {name: "joe", nickname: "joe123"},
    {name: "marcos", nickname: "marcos123"},
    {name: "juan", nickname: "juan123"},
    {name: "jose", nickname: "jose123"},
    {name: "juan", nickname: "juan123"},
]

user.friend = friends

let output = ''

for(let i = 0; i < friends.length; i++){
    output = output +  `<li>${friends[i].name} - ${friends[i].nickname}</li>`
}

fetch('/user.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('people').innerHTML = `<h1>${data.name} ${data.lastname}</h1>`
    })

console.log(JSON.stringify(user))