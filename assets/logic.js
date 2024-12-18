
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

                    const entry = {
                        firstName: firstName,
                        lastName: lastName,
                        tvShow: tvShow,
                        rating: rating,
                        review: review
                    };

                    let entries = JSON.parse(localStorage.getItem('entries')) || [];
                    entries.push(entry);
                    localStorage.setItem('entries', JSON.stringify(entries));

                    console.log('Entry saved:', entry);
                });
            } else {
                console.error('Save changes button not found');
            }
        });
    } else {
        console.error('Example modal not found');
    }
});