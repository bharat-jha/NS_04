const github_api = 'https://api.github.com/users/akshaymarch7'

const users = fetch(github_api);

console.log(users);
console.log("Bharat testing Promises");

const user_f = function(data) {
    console.log(data.json);
}

users.then(function(data) {
    console.log(data.json);
});