//Student Array
let myStudent = []

//1. find the element
const bodyRef = document.body;

//2. function to respond to event
function clickHandler(event)
{
    const target = event.target
    if (target.tagName === "BUTTON")
    {
        // If btn clicked
        if (target.textContent === "Submit")
        {
            // If submit btn clicked
            const firstNameInput = document.querySelector("#firstname");
            const lastNameInput = document.querySelector("#lastname");
            const progNameInput = document.querySelector("#progname");
            
            let student = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                progName: progNameInput.value
            }
            
            //check if an entry with student's info in the array is not duplicate
            let isStudent = false
            
            for (let array of myStudent)
            {
                if (array.firstName === student.firstName &&
                    array.lastName === student.lastName &&
                    array.progName === student.progName)
                {
                    alert("This student already exists")
                    isStudent = true;
                    break;
                }
            }

            if (isStudent === false)
            {
                myStudent.push(student)
                addStudentArray(student)    
            }

            firstNameInput.value = "";
            lastNameInput.value = "";
            progNameInput.value = "";
        }
        else if (target.id === "BGColorBtn")
        {
            // If BG color change Btn clicked
        }
    }
}

function addStudentArray(newstudent)
{
    const newLi = document.createElement("li");
    const ulCIT = document.querySelector("#CIT");
    const ulCST = document.querySelector("#CST");
    newLi.textContent = `${newstudent.firstName}, ${newstudent.lastName}`
    if (newstudent.progName === "CIT")
    {
        ulCIT.appendChild(newLi)
    }
    else if (newstudent.progName === "CST")
    {
        ulCST.appendChild(newLi)
    }
}

//3. addEventListner
bodyRef.addEventListener("click", clickHandler);