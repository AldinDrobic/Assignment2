const arrayOfComputers = [];
const computerListElement = document.getElementById("computerListId");//Linked to the list id in html

fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
.then(function(response)
{
    return response.json()
})
.then(function(computerArray)
{
    for (computer of computerArray) //For every computer in the computer array, add it to my array.
    {
        arrayOfComputers.push(computer);
    }
    setComputerList(); //As fast the api is done fetching the data, this method will run and send data to the GUI.
    getSelectedComputer(); //This method must run here for the first time to get data from api.
})


function setComputerList()//This method will fill the selec lisst with data from api.
{
    for (computer of arrayOfComputers)
    {
        const computerElement = document.createElement("option");
        computerElement.value = computer.id;
        computerElement.appendChild(document.createTextNode(computer.title));
        computerListElement.appendChild(computerElement);
    }
}

function setFeaturesForComputer()
{
    return document.getElementById("computerDescription").innerHTML = selectedComputer.specs; //Returning something to html
}

function getSelectedComputer()//Get the selected computer by id
{
    let selectedComputer = document.getElementById("computerListId"); //Bring in the computer object from html
    let selectedComputerIndex = selectedComputer.selectedIndex; //store computer id here 
    let test = arrayOfComputers[selectedComputerIndex].specs;
    console.log(test);
    return document.getElementById("computerDescription").innerHTML = test; //Returning something to html
    
}
 
