const myLibrary = [];

const form = document.querySelector('#bookform');

const display = document.querySelector('#display'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const newEntry = Object.fromEntries(formData.entries());

    myLibrary.push(newEntry);
    addBookToLibrary();
    console.log("Updated Array:", myLibrary);
    form.reset(); 
});

function addBookToLibrary() {
    display.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const bookCard = `
            <div class="book-card" style="border: 2px solid black; padding: 10px;
            display: grid; grid-template-column: 1fr; gap: 10px;">
                <h3>${book.name}</h3>
                <p>By: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <div>
                <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            </div>
        `;
        display.innerHTML += bookCard; 
    });
     setupRemoveButtons();
}



function setupRemoveButtons() {
    const buttons = document.querySelectorAll('.remove-btn');
    
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const indexToRemove = e.target.getAttribute('data-index');
            
            myLibrary.splice(indexToRemove, 1);
            addBookToLibrary();
        });
    });
}