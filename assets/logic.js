// document.addEventListener('DOMContentLoaded', function() {
//     const exampleModal = document.getElementById('exampleModal');
    
//     if (exampleModal) {
//         exampleModal.addEventListener('shown.bs.modal', function() {
//             const saveChangesButton = document.getElementById('save-changes'); 
//             if (saveChangesButton) {
//                 saveChangesButton.addEventListener('click', function() {
//                     const firstName = document.getElementById('firstname').value;
//                     const lastName = document.getElementById('lastname').value;
//                     const tvshow = document.getElementById('tvshow').value;
//                     const rating = document.getElementById('rating').value;
//                     const review = document.getElementById('review').value;
    
//                     // Check if any field is empty
//                     if (!firstName || !lastName || !tvshow || !rating || !review) {
//                         alert('Please fill in all fields.'); // Display an error message
//                         return; // Exit the function if validation fails
//                     }
    
//                     // If all fields are filled, save to localStorage
//                     localStorage.setItem('firstName', firstName);
//                     localStorage.setItem('lastName', lastName);
//                     localStorage.setItem('tvShow', tvshow);
//                     localStorage.setItem('rating', rating);
//                     localStorage.setItem('review', review);
    
//                     console.log('First Name:', firstName);
//                     console.log('Last Name:', lastName);
//                     console.log('TV Show:', tvshow);
//                     console.log('Rating:', rating);
//                     console.log('Review:', review);
//                 });
//             }
//         });
//     }



// Form logic

// Step 1: Identify the fields I want to extract data from
const elements = document.getElementById("form");
console.log(elements);

// Step 2: Add an event listener and Create an object to store shows 
elements.addEventListener("submit", function(submit) {
    submit.preventDefault(); // Preventing default form behavior
    console.log("form submitted");

    // Step 3: loop through all the fields for form validation 
    const inputFields = elements.querySelectorAll('input, textarea, select'); // Corrected 'selelct' to 'select'
    let allFieldsFilled = true; // Flag to check if all fields are filled

    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value === "") {
            alert("Please fill out all fields");
            allFieldsFilled = false; // Set the flag to false if a field is empty
            break; // Exit the loop if an empty field is found
        }
    }

    if (allFieldsFilled) {
        const newShow = { // Changed variable name from 'show' to 'newShow' for clarity
            firstName: document.getElementById("firstname").value,
            lastName: document.getElementById("lastname").value,
            tvShow: document.getElementById("tvshow").value,
            rating: document.getElementById("rating").value,
            review: document.getElementById("review").value,
        };

        console.log(newShow);
        storeShow(newShow); // Call the storeShow function to save the new entry
        
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    }
});

// Step 4: Retrieve existing entries from local storage (if none use an empty [])
function readLocalStorage() {
    const showItem = JSON.parse(localStorage.getItem('show'));

    if (showItem === null) {
        return [];
    }

    return showItem;
}

// Step 6: Add the new entry to the array and store it on local storage
function storeShow(newShow) {
    const existingShows = readLocalStorage(); // Retrieve existing shows from local storage

    existingShows.push(newShow); // Add the new show to the existing array

    localStorage.setItem('show', JSON.stringify(existingShows)); // Store the updated array back in local storage
}

// Step 8: Allow the user to view their entries

// Step 9: Display the entries to the user

// Step 10: Allow the user to remove old entries

// Step 11: Show a modal to the user confirming removal