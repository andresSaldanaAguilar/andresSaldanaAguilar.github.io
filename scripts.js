function setAction(e) {
    document.getElementById("dropdownAction").innerHTML = e.target.innerText;   

    if(e.target.innerHTML == "Cipher"){
        document.getElementById("lockIcon").classList.remove("fa-lock-open");
        document.getElementById("lockIcon").classList.add("fa-lock");
    }
    else{
        document.getElementById("lockIcon").classList.remove("fa-lock");
        document.getElementById("lockIcon").classList.add("fa-lock-open");
    } 
}

function setAlgorithm(e) {
    document.getElementById("dropdownAlgorithm").innerHTML = e.target.innerText;  
}

function setMode(e) {
    document.getElementById("dropdownMode").innerHTML = e.target.innerText;  
}

function go(){
    swal("Error!", "You clicked the button!", "error");
}

function download(){
    swal("File downloaded", "You clicked the button!", "success");
}