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
            myStudent.push(student)

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

function studentArrayChecker()
{

}

//3. addEventListner
bodyRef.addEventListener("click", clickHandler);