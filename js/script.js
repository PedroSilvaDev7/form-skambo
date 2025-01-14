const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".skambo-required");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function setError (index) {
    campos[index].style.border = "2px solid #e63636";
    spans[index].style.display = "block"
}

function removeError (index) {
    campos[index].style.border = "none";
    spans[index].style.display = "none"
}

function nameValidate(event) {
    let valueName = event.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    valueName = valueName.replace(/\b\w/g, (char) => char.toUpperCase());
    event.target.value = valueName;
    
    if(campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0)
    }
}

function emailValidate(event) {
    let valueEmail = event.target.value.replace(/[^a-zA-Z0-9@._-]/g, "");
    event.target.value = valueEmail;

    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    } else {
        removeError(1);
    }
}

function passValidate() {
    if(campos[2].value.length < 8) {
        setError(2);
    } else {
        removeError(2)
    }
}