let count = 0; // Initializing Count value

function increaseCount(){
    count++; // increase count by 1
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById("countDisplay").innerHTML = count; // display count
}

function checkCountValue(){
    if(count===10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }
    else if(count===20){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}