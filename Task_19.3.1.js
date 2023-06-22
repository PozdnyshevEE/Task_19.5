const ownCity = {
    ownCity: "Tambov"
}

const user = Object.create(ownCity);
user.name = "Ivan";
user.surname = "Petrov";
user.city = "Saratov";

function getProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + " : " + obj[key]);
        }
    }
}

getProperties(user);
