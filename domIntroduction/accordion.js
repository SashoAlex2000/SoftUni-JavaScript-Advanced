

function toggle() {
    
    // let buttonText = document.getElementsByClassName("button")[0].innerText;

    if (document.getElementsByClassName("button")[0].innerText == "MORE") {
        document.getElementById('extra').style.display = "block";
        document.getElementsByClassName("button")[0].innerText = "LESS"

    }else if (document.getElementsByClassName("button")[0].innerText == "LESS") {
        document.getElementById('extra').style.display = "none";
        document.getElementsByClassName("button")[0].innerText = "MORE";

    }

}

