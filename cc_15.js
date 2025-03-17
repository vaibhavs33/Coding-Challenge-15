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

    //Task 4 - Risk Categorization
    //Applying the background color based on the risk level 
    //(red for high risk, yellow for medium risk, and green for low risk)
    if (riskLevel.toLowerCase() == 'high') {
        riskCard.classList.add('high-risk')
    }
    else if (riskLevel.toLowerCase() == 'medium') {
        riskCard.classList.add('medium-risk')
    }
    else if (riskLevel.toLowerCase() == 'low') {
        riskCard.classList.add('low-risk')
    }

    //Task 3 - Removing Risk Items
    //Creating a "Resolve" button to remove the risk card
    const resolveBtn = document.createElement('button');
    resolveBtn.setAttribute('class', 'resolve-btn');
    resolveBtn.textContent = 'Resolve';
    riskCard.append(resolveBtn); 

    //Adding event listener to remove the risk card when resolved
    resolveBtn.addEventListener('click', (event) => {
        //Removing the card from the dashboard
        riskCard.remove();
        console.log(`Resolved risk: ${riskName}`);
            
        //Ensures clicking inside a risk card does not trigger unwanted events on the dashboard
        event.stopPropagation();
    });
    
    //Appending the risk card to the dashboard
    divRiskDashboard.appendChild(riskCard);

    //Task 6 - Event Propagation Fix
    //Preventing clicks inside the risk card from affecting the dashboard
    riskCard.addEventListener('click', (event) => {
        console.log(`Clicked on risk: ${riskName}`);
            
        //Ensures clicking inside a risk card does not trigger unwanted events on the dashboard
        event.stopPropagation();
    });

    return riskCard;
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

//Task 5 - Bulk Risk Updates
//Increasing risk levels when the "Increase Risk Level" button is clicked
document.getElementById('increaseRiskBtn').addEventListener('click', () => {
    const allRiskCards = document.querySelectorAll('.risk-card');
    const arrRiskCards = Array.from(allRiskCards);
    arrRiskCards.forEach((card ) => {
        const cardRiskLevel = card.querySelector('.risk-level');
        const cardRiskLevelValue = cardRiskLevel.textContent.replace('Risk Level: ','');
        
        //Increasing the risk level based on the current state
        if(cardRiskLevelValue.toLowerCase() == 'low'){
            cardRiskLevel.textContent = 'Risk Level: Medium';
            styleSingleCard(card);
        }
        else if(cardRiskLevelValue.toLowerCase() == 'medium'){
            cardRiskLevel.textContent = 'Risk Level: High';
            styleSingleCard(card);
        }
    })
})

//Task 4 - Risk Categorization
//Applying the appropriate background color based on the risk level
function styleSingleCard(currentCard){
    const riskLevel = currentCard.querySelector('.risk-level').textContent.replace('Risk Level: ','');
    
    //Checks if the priority is "High" and updates the styling
    if(riskLevel.toLowerCase() === 'high'){
        //Removing all risk styles
        removeCurrentRiskStyle(currentCard);
        
        //Applying high risk style
        currentCard.classList.add('high-risk');
    }
    else if(riskLevel.toLowerCase() === 'medium'){
        //Removing all risk styles
        removeCurrentRiskStyle(currentCard);
        
        //Applying medium risk style
        currentCard.classList.add('medium-risk');
    }
    else if(riskLevel.toLowerCase() === 'low'){
        //Removing all risk styles
        removeCurrentRiskStyle(currentCard);
        
        //Applying low risk style
        currentCard.classList.add('low-risk');
    }
}

//Resetting risk styles before applying new level
function removeCurrentRiskStyle(currentCard){
    currentCard.classList.remove('high-risk', 'medium-risk', 'low-risk');
}