async function showToolsA(item) {
    document.getElementById("dropdownNTools").innerHTML = item.innerHTML;

    let groupA = document.getElementsByClassName("1-150");
    for (const circles of groupA) { circles.style.visibility = 'visible'; }
    
    let groupB = document.getElementsByClassName("151-300");
    for (const circles of groupB) { circles.style.visibility = 'hidden'; }

    let groupC = document.getElementsByClassName("301-352");
    for (const circles of groupC) { circles.style.visibility = 'hidden'; }
}

async function showToolsB(item) {
    document.getElementById("dropdownNTools").innerHTML = item.innerHTML;

    let groupA = document.getElementsByClassName("1-150");
    for (const circles of groupA) { circles.style.visibility = 'hidden'; }
    
    let groupB = document.getElementsByClassName("151-300");
    for (const circles of groupB) { circles.style.visibility = 'visible'; }

    let groupC = document.getElementsByClassName("301-352");
    for (const circles of groupC) { circles.style.visibility = 'hidden'; }
}

async function showToolsC(item) {
    document.getElementById("dropdownNTools").innerHTML = item.innerHTML;

    let groupA = document.getElementsByClassName("1-150");
    for (const circles of groupA) { circles.style.visibility = 'hidden'; }
    
    let groupB = document.getElementsByClassName("151-300");
    for (const circles of groupB) { circles.style.visibility = 'hidden'; }

    let groupC = document.getElementsByClassName("301-352");
    for (const circles of groupC) { circles.style.visibility = 'visisble'; }
}