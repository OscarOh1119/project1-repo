// Starter code for (project1-repo)
// Function to greet the user
function greetUser(name) {
    return `Hello, ${name}! Welcome to project1-repo.`;
}
// Example usage
const userName = 'User';
console.log(greetUser(userName));




























document.addEventListener('DOMContentLoaded', function() {
    const exampleModal = document.getElementById('exampleModal');
    
    if (exampleModal) {
        exampleModal.addEventListener('shown.bs.modal', function() {
            const saveChangesButton = document.getElementById('save-changes');
            if (saveChangesButton) {
                saveChangesButton.addEventListener('click', function() {
                    const firstName = document.getElementById('first-name').value;
                    const lastName = document.getElementById('last-name').value;
                    const tvShow = document.getElementById('TV-show').value;
                    const rating = document.getElementById('rating').value;
                    const review = document.getElementById('review').value;

                    console.log('First Name:', firstName);
                    console.log('Last Name:', lastName);
                    console.log('TV Show:', tvShow);
                    console.log('Rating:', rating);
                    console.log('Review:', review);
                });
            } else {
                console.error('Save changes button not found');
            }
        });
    } else {
        console.error('Example modal not found');
    }
});