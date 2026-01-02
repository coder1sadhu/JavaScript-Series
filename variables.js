const accountId = "12345"
let accountName = "John Doe"
var accountPassword = "password123"
accountcity = "New York"
let accountstate 

// accountId = "67890" not allowed
accountName = "Jane Smith"
accountPassword = "1212121"
accountcity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var for variable because it has function scope
*/

console.table([accountId, accountName, accountPassword, accountcity, accountstate]);