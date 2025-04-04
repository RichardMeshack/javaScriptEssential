let userRole = "manager";
let accessLevel;

if(userRole==="admin"){
    accessLevel="Full Access Granted";
}
else if(userRole==="manager"){
    accessLevel="Limited Access Granted";
}
else{
    accessLevel="No Access Granted";
}

console.log("Access Level ",accessLevel )



let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="Welcome, Admin!";
    }
    else{userMessage="Welcome, User!";
    }
}
else{
    userMessage="Please log in to access the system";
}

console.log("User message ", userMessage );


let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);