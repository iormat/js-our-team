/*
Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

/*
1. create array an of objects to represent each team member
    1.1 variable for name
        1.2 variable for role
            1.3 variable for image
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

// 1.
const cardArr = [
    {
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "img/wayne-barnett-founder-ceo.jpg"
    },
    
    {
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "img/wayne-barnett-founder-ceo.jpg"
    },


];
let allMembers = document.getElementsByClassName('team-container');

const memberName = document.getElementById('name').value;
const memberRole = document.getElementById('role').value;
const memberImage = document.getElementById('image').value;

const card = {
    "name" : memberName,
    "role" : memberRole,
    "image" : memberImage
};

card.name = memberName;
card.role = memberRole;
card.image = memberImage;

console.log(card.name, card.role, card.image)
cardArr.push(card);


// print results based on objects in array
document.getElementsByClassName()