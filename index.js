// Ejemplo con chrome.
// Setear breakpoints manuales.
// Setear breakpoints condicionales.
// Setear breakpoints con debugger en VSC.
// Step In, Step Over, Step Out, Play.
// CallStack
// Scope
// Watchers

function myFunction(param){
    console.log(param);
    for(let i=0; i<10; i++){
        debugger
        console.log(i)
    }
}

const myGlobalVariable = 2;

document.querySelector("button").onclick = function (e){
    const myPrivateVariable = 1;
    myFunction(e.target.textContent);
    console.log("fin");
    console.log("fin");

    
}


