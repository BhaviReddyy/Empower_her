function signup(userName) {
    let users = ["Bhavya", "Ravi", "Priya"]; // existing users

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}


function login(userName, password) {
    let users = ["Bhavya", "Ravi", "Priya"]; // existing users

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== "Emp@123") {
        return "Wrong Password....";
    } else {
        return "Login Successful...";
    }
}


console.log(signup("Bhavya")); // Output: User Already Registered, Please Login
console.log(signup("NewUser")); // Output: Signup Successful, Please Login

console.log(login("Bhavya", "Emp@123")); // Output: Login Successful...
console.log(login("Ravi", "wrongpass")); // Output: Wrong Password....
console.log(login("NewUser", "Emp@123")); // Output: User Not Found, Please Signup