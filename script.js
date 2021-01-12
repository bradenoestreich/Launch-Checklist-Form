/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then(function (json) {
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
                <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${json[0].name}</li>
                        <li>Diameter: ${json[0].diameter}</li>
                        <li>Star: ${json[0].star}</li>
                        <li>Distance from Earth: ${json[0].distance}</li>
                        <li>Number of Moons: ${json[0].moons}</li>
                    </ol>
                <img src="${json[0].image}">
             `;
        });
    });
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        if (isNaN(fuelLevel) || isNaN(cargoMass) || !isNaN(pilotName) || !isNaN(copilotName)) {
            alert("Make sure to enter valid information for each field.");
            event.preventDefault();
        } else if (fuelLevel < 10000) {
            if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
                alert("All fields are required.");
                event.preventDefault();
            } else {
                let launchStatus = document.getElementById("launchStatus");
                let faultyItems = document.querySelector("#faultyItems");
                let pilotStatus = document.getElementById("pilotStatus");
                let copilotStatus = document.getElementById("copilotStatus");
                let fuelStatus = document.getElementById("fuelStatus");

                faultyItems.setAttribute("style", "visibility: visible");

                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.setAttribute("style", "color: red");

                pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
                copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
                fuelStatus.innerHTML = "Fuel level too low for launch";

                event.preventDefault();
            }
        } else if (cargoMass > 10000) {
            if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
                alert("All fields are required.");
                event.preventDefault();
            } else {
                let launchStatus = document.getElementById("launchStatus");
                let faultyItems = document.querySelector("#faultyItems");
                let pilotStatus = document.getElementById("pilotStatus");
                let copilotStatus = document.getElementById("copilotStatus");
                let cargoStatus = document.getElementById("cargoStatus");

                faultyItems.setAttribute("style", "visibility: visible");

                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.setAttribute("style", "color: red");

                pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
                copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
                cargoStatus.innerHTML = "Cargo mass too high for launch";

                event.preventDefault();
            }
        } else {
            if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
                alert("All fields are required.");
                event.preventDefault();
            } else {
                let launchStatus = document.getElementById("launchStatus");
                let faultyItems = document.querySelector("#faultyItems");

                launchStatus.innerHTML = "Shuttle is ready for launch";
                launchStatus.setAttribute("style", "color: green");

                faultyItems.setAttribute("style", "visibility: hidden");

                event.preventDefault();
            }
        }
    });
});