"use strict";

function Lottery() {
    var participantsList = [];
    var createTableRow = function(participant) {
        var trElem = document.createElement("tr");

        var tdName = document.createElement("td");
        tdName.innerText = participant.name;
        trElem.appendChild(tdName);

        var tdSurname = document.createElement("td");
        tdSurname.innerText = participant.surname;
        trElem.appendChild(tdSurname);


        var tdEmail = document.createElement("td");
        tdEmail.innerText = participant.email;
        trElem.appendChild(tdEmail);

        return trElem;
    }

    this.addParticipant = function() {
        var inpNameElem = document.getElementById("name");
        var inpEmailElem = document.getElementById("email");
        var inpSurnameElem = document.getElementById("surname");
        if (!inpNameElem.checkValidity() || !inpEmailElem.checkValidity() || !inpSurnameElem.checkValidity()) {
            alert("Please enter required fields with proper format.");
            return; // we can do it by inserting validation messages under each field but I show only alert for the simplicity
        }

        var participants = document.getElementById("participants");

        var participant = {
            name: inpNameElem.value,
            surname: inpSurnameElem.value,
            email: inpEmailElem.value
        };

        var trElem = createTableRow(participant);
        participants.appendChild(trElem);
        participantsList.push(participant);

        inpNameElem.value = "";
        inpSurnameElem.value = "";
        inpEmailElem.value = "";
    }

    this.showWinner = function() {
        if (participantsList.length === 0) return;
        var randomParticipant = participantsList[Math.floor(Math.random() * participantsList.length)];
        document.getElementById("winner").innerHTML = "Winner is: " + randomParticipant.name;
    }
}

var lottery = new Lottery();