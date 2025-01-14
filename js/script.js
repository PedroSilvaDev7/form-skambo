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
    try {
        let valueName = event.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
        valueName = valueName.replace(/\b\w/g, (char) => char.toUpperCase());
        event.target.value = valueName;
        
        if(campos[0].value.length < 3) {
            setError(0);
        } else {
            removeError(0)
        }
    } catch(erroName) {
        console.error("O input trouxe esse erro: " + erroName)
    }
}

function emailValidate(event) {
    try {
        let valueEmail = event.target.value.replace(/[^a-zA-Z0-9@._-]/g, "");
        event.target.value = valueEmail;

        if (!emailRegex.test(campos[1].value)) {
            setError(1);
        } else {
            removeError(1);
        }
    } catch(erroEmail) {
        console.error("O input trouxe esse erro: " + erroEmail)
    }
}

function passValidate() {
    try {
        if(campos[2].value.length < 8) {
            setError(2);
        } else {
            removeError(2)
        }
    } catch(erroPass) {
        console.error("O input trouxe esse erro: " + erroPass)
    }
}