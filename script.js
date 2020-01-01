// Write your JavaScript code here!

window.addEventListener("load",function(){
   let form = document.querySelector("form");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json){
         let planetString = `<h2>Mission Destination</h2>
          <ol>
             <li>Name: ${json[2].name}</li>
             <li>Diameter: ${json[2].diameter}</li>
             <li>Star: ${json[2].star}</li>
             <li>Distance from Earth: ${json[2].distance}</li>
             <li>Number of Moons: ${json[2].moons}</li>
          </ol>
          <img src="${json[2].image}">`
          document.querySelector("#missionTarget").innerHTML = planetString;
         });
       });
   form.addEventListener("submit",function(event){
      event.preventDefault();
      let pilotName =document.querySelector("input[name=pilotName]");
      let coPilotName =document.querySelector("input[name=copilotName]");
      let fuelLevel =document.querySelector("input[name=fuelLevel]");
      let cargoMass =document.querySelector("input[name=cargoMass]");
      const faultyItem = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let coPilotStatus =  document.getElementById("copilotStatus");
      let fuelStatus =  document.getElementById("fuelStatus");
      let cargoStatus =  document.getElementById("cargoStatus");



      if (pilotName.value ===""|| coPilotName.value ===""|| fuelLevel.value ===""|| cargoMass.value ===""){
         alert("All fields are required!")
      
      } else if(!isNaN(pilotName.value)|| !isNaN(coPilotName.value)|| isNaN(fuelLevel.value)|| isNaN(cargoMass.value)){
         alert("Valid input required in each field")
        
      }else{
               
     

      if (fuelLevel.value <= 10000 && cargoMass.value <= 10000){
         coPilotName.innerHTML=`Pilot ${coPilotName.value} is ready.`
         pilotName.innerHTML=`Pilot ${pilotName.value} is ready.`
         faultyItem.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         fuelStatus.innerHTML = "there is not enough fuel for the journey!"
         launchStatus.style.color= "red"
         
      } else if (cargoMass.value >= 10000 && fuelLevel.value >= 10000 ){
         faultyItem.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         cargoStatus,innerHTML = "There is too much mass for the shuttle to take off!"
         launchStatus.style.color= "red"
         coPilotName.innerHTML=`Pilot ${coPilotName.value} is ready.`
         pilotName.innerHTML=`Pilot ${pilotName.value} is ready.`
         
      } 
     
      else if (cargoMass.value >= 10000 && fuelLevel.value <= 10000 ){
         faultyItem.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         cargoStatus,innerHTML = "There is too much mass for the shuttle to take off!"
         fuelStatus.innerHTML = "there is not enough fuel for the journey!"
         launchStatus.style.color= "red"
         coPilotName.innerHTML=`Pilot ${coPilotName.value} is ready.`
         pilotName.innerHTML=`Pilot ${pilotName.value} is ready.`
     
      }
      else{
         faultyItem.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color= "green";
         coPilotStatus.innerHTML=`Pilot ${coPilotName.value} is ready.`
         pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready.`
        
      }
   }
   })
  
})
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
 


