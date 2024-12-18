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

// Step 5: Add the new entry to the array and store it on local storage
function storeShow(newShow) {
    const existingShows = readLocalStorage(); // Retrieve existing shows from local storage

    existingShows.push(newShow); // Add the new show to the existing array

    localStorage.setItem('show', JSON.stringify(existingShows)); // Store the updated array back in local storage
}

// Step 6: Allow the user to view their entries

// Step 7: Display the entries to the user

// Step 8: Allow the user to remove old entries

// Step 9: Show a modal to the user confirming removal
