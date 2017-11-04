
function greetting(name) {
    let greeting;
    
    if (name) {
        greeting = "Welcome " + name;
    } else {
        greeting = "Welcome guest."
    }
    console.log(greeting);
    
}

greetting("cuong")