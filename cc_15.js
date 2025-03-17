//Task 1 - Base Structure Setup
//When the document is fully loaded, a message will be logged to confirm
document.addEventListener('DOMContentLoaded', function (){
    console.log("Risk Dashboard Loaded");
})

//Task 2 - Adding Risk Items
function addRiskItem(riskName, riskLevel, department) {
    //Validation checks to prevent the user from adding empty inputs

    //Validates the risk name input
    if(!(riskName != null && riskName.trim() != '')){
        alert('Risk name cannot be empty.');
        return;
    }
    
    //Validates the risk level input (must be High, Medium, or Low)
    if(!(riskLevel != null && riskLevel.trim() != '')){
        alert('Risk Level cannot be empty.');
        return;
    }
    else if(riskLevel.toLowerCase() != 'high' 
        && riskLevel.toLowerCase() != 'medium'
        && riskLevel.toLowerCase() != 'low'){
        alert('Risk Level has to be High, Medium or Low.');
        return;
    }
    
    //Validates the department input
    if(!(department != null && department.trim() != '')){
        alert('Department cannot be empty.');
        return;
    }
    
    //Selecting the container where risk cards will be added
    let divRiskDashboard = document.getElementById('riskCards');
    
    //Creating a risk card container
    const riskCard = document.createElement('div');
    riskCard.setAttribute('class','risk-card');
    
    //Creating and appending the risk name element
    const rName = document.createElement('h2');
    rName.setAttribute('class', 'risk-name');
    rName.textContent = riskName;
    riskCard.append(rName);
    
    //Creating and appending the risk level element
    const rLevel = document.createElement('p');
    rLevel.setAttribute('class', 'risk-level');
    rLevel.textContent = `Risk Level: ${riskLevel}`;
    riskCard.append(rLevel);

    //Creating and appending the department label
    const dept = document.createElement('p');
    dept.setAttribute('class', 'department');
    dept.textContent = `Department: ${department}`;
    riskCard.append(dept);
}

//Task 2 - Adding Risk Items
document.addEventListener('DOMContentLoaded', function (){
    //Test cases for Tasks 2-5
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
    addRiskItem("Market Fluctuations", "High", "Finance");
    addRiskItem("Cybersecurity Threat", "High", "IT");
    addRiskItem("HR Compliance Issue", "Low", "Human Resources");
    addRiskItem("Employee Retention", "Low", "HR");
})

//Adding new risk item when the "Add New Risk" button is clicked
document.getElementById('newRiskBtn').addEventListener('click', () => {
    let riskNameInput = document.getElementById("riskName");
    let riskLevelInput = document.getElementById("riskLevel");
    let departmentInput = document.getElementById("department");

    //Adding risk item with user inputs
    let newRisk = addRiskItem(
        riskNameInput.value, 
        riskLevelInput.value, 
        departmentInput.value
    );

    //Clearing input fields if the risk was successfully added
    if (newRisk) { 
        riskNameInput.value = "";
        riskLevelInput.value = "";
        departmentInput.value = "";
    }
})