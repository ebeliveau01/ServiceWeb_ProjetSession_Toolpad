const form_creation = document.getElementById("form-real-creation");
const form_cle_api = document.getElementById("form-real-cle-api");
const info_creation = document.getElementById("info-creation");
const info_cle_api = document.getElementById("info-cle-api");

form_creation.onsubmit = submitCreation;
form_cle_api.onsubmit = submitCleApi;

async function submitCreation(event) {
    event.preventDefault();
    refreshCreation();

    let user = {
        "email": form_creation[0].value,
        "password": form_creation[1].value
    };

    let reponse = await fetch('http://127.0.0.1:3000/api/user/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user)
    });
    
    let resultat = await reponse.json();

    if (!reponse.ok) {
        info_creation.classList.add("error");
        console.log("Erreur code HTTP : ", reponse.status);
    } 
    else {
        info_creation.classList.add("success");
    }
    info_creation.innerHTML = resultat.message;

}

async function submitCleApi(event) {
    event.preventDefault();
    refreshCleApi();

    let user = {
        "email": form_cle_api[0].value,
        "password": form_cle_api[1].value
    };

    let reponse = await fetch('http://127.0.0.1:3000/api/user/newApiKey', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user)
    });
    
    let resultat = await reponse.json();

    if (!reponse.ok) {
        info_cle_api.classList.add("error");
        console.log("Erreur code HTTP : ", reponse.status);
    } 
    else {
        info_cle_api.classList.add("success");
    }
    info_cle_api.innerHTML = resultat.message;
}

function refreshCreation() {
    form_cle_api[0].value = "";
    form_cle_api[1].value = "";
    info_cle_api.innerHTML = "";
}

function refreshCleApi() {
    form_creation[0].value = "";
    form_creation[1].value = "";
    info_creation.innerHTML = "";
}