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
const cardArray = [];

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
        document.querySelector('.team-container').innerHTML += `
            <div class="team-card">
                <div class="card-image">
                    <img
                        src="${newCard.image}"
                        alt="${newCard.name}"
                    />
                </div>
                <div class="card-text">
                    <h3>${newCard.name}</h3>
                    <p>${newCard.role}</p>
                </div>
            </div>`;
    }

);