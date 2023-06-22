const user = {
    name : "Ivan",
    surname : "Petrov",
    city : "Saratov",
}

function isPropertys(str, obj) {
    return str in obj;
}

console.log(isPropertys("name", user));