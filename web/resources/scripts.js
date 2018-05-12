//changes the lock icon
function setAction() {
    var src = document.getElementById("algorithmSel");
    var value = src.options[src.selectedIndex].value;

    if(value === "CIPHER"){
        document.getElementById("lockIcon1").classList.remove("fa-lock");
        document.getElementById("lockIcon1").classList.add("fa-lock-open");
    }
    else{
        document.getElementById("lockIcon1").classList.remove("fa-lock-open");
        document.getElementById("lockIcon1").classList.add("fa-lock");
    } 
}

//shoots the action
function setFilename(e){
    var src = e.value;
    var res = src.split("\\");
    var filename = res[res.length-1];
    if(e.attributes["id"].value === "file"){
        document.getElementById("fileInput").innerHTML = filename;
    }
    else{
        document.getElementById("musicfileInput").innerHTML = filename;
    }
}

//downloads the file
function download(){
    swal("File downloaded", "You clicked the button!", "success");
}

function randomColor(element){
	var str="#"+((1<<24)*Math.random()|0).toString(16);
	element.style.color=""+str;
}


