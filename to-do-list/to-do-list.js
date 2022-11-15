/****************************** to do list ************************/

let formDOM = document.querySelector("#liveToastBtn")

let taskInput = document.querySelector("#task")

formDOM.addEventListener("submit", newElement)

function newElement(evente) {
    // event.preventDefault();
    console.log("islem");
    let liDOM = document.querySelector("#liDOM")
    let liDOMelements = document.createElement("li")
    liDOMelements.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    let inputDOMvalue = taskInput.value
    console.log(inputDOMvalue);
    liDOMelements.innerHTML = `${inputDOMvalue}<span><button type="button" class="btn-close border-0" aria-label="Close">x</button></span>`
    liDOM.prepend(liDOMelements)
    if (inputDOMvalue.length > 1) {
        fncAlerti()
    }
    else if(inputDOMvalue.length == 0){
        liDOMelements.innerHTML = "bos giris yaptiniz"
        fncAlert()
    }
    else if (inputDOMvalue.length > 1){
        inputDOMvalue == inputDOMvalue.classList.add("text-decoration-line-through")
    }
    else if (inputDOMvalue){
        taskInput += txtDec
    }
    localStorage.setItem("lastTasks",JSON.stringify(inputDOMvalue))
    var txtDec = liDOM.classList.add("text-decoration-line-through")
}

const fncAlert = window.onload = (event) => {
    let myAlert = document.querySelector(".toast");
    let msAlert = new bootstrap.Toast(myAlert);
        msAlert.show();
}
const fncAlerti = window.onload = (event) => {
    let myAlert = document.querySelector(".toasta");
    let msAlert = new bootstrap.Toast(myAlert);
        msAlert.show();
}
// localStorage.setItem("score", scoreInputDOM.value)