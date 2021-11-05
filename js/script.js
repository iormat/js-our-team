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
2. create an object containing new info
    2.1 save newCard in array
3. creaate a function to print newCard
*/

// 1.
const cardArray = [
    {
        "name" : "Wayne Barnett",
        "role" : "Founder - CEO",
        "image" : "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        "name" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "img/angela-caroll-chief-editor.jpg",
    },
    
    {
        "name" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "img/angela-lopez-social-media-manager.jpg",
    },

    {
        "name" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "img/walter-gordon-office-manager.jpg",
    },
    
    {
        "name" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "img/barbara-ramos-graphic-designer.jpg",
    },
    
    {
        "name" : "Scott Estrada",
        "role" : "Developer",
        "image" : "img/scott-estrada-developer.jpg",
    }
];

// print pre-existing team members
for (let i = 0; i < cardArray.length; i++) {
    printTeamMember(cardArray[i]);
}

// on click  to add new members 
document.getElementById('addMemberButton').addEventListener('click',

    function() {
        // 1.1, 1.2. 1.3
        const teamName = document.getElementById('name').value;
        const teamRole = document.getElementById('role').value;
        const teamImage = document.getElementById('image').value;
        // 2.
        const newCard = {
            "name" : teamName,
            "role" : teamRole,
            "image" : teamImage,
        }
        // 2.1
        cardArray.push(newCard);
        console.log(cardArray)
        console.log(newCard.name, newCard.role, newCard.image)
        // 3.
        printTeamMember(newCard);
    }
);

// 3. function to print member (old and new)
function printTeamMember(TakeKey) {
    document.querySelector('.team-container').innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
                src="${TakeKey.image}"
                alt="${TakeKey.name}"
            />
        </div>
        <div class="card-text">
            <h3>${TakeKey.name}</h3>
            <p>${TakeKey.role}</p>
        </div>
    </div>`;
}