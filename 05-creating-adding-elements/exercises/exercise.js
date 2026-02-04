// Exercise 05: Creating and Adding Elements
// ==========================================

// ===== Part 1: Basic Element Creation =====

// 1. Create a paragraph element, set its text to "Hello, DOM!", and add it to #basic-output
// Your code here:

const para = document.createElement('p');
para.textContent = 'Hello, DOM!';
document.getElementById('basic-output').appendChild(para);

// 2. Create a div with the class "card", add some text, and append it to #basic-output
// Your code here:

const cardDiv = document.createElement('div');
cardDiv.classList.add('card');
cardDiv.textContent = 'This is a card element';
document.getElementById('basic-output').appendChild(cardDiv);

// 3. Create an h3 element, set its text and color (red), and prepend it to #basic-output
// Your code here:

const heading = document.createElement('h3');
heading.textContent = 'I am at the top!';
heading.style.color = 'red';
document.getElementById('basic-output').prepend(heading);

// 4. Create a link (anchor) that goes to "https://example.com", has text "Visit Example",
//    opens in a new tab, and append it to #basic-output
// Your code here:

const link = document.createElement('a');
link.href = 'https://example.com';
link.textContent = 'Visit Example';
link.target = '_blank';
document.getElementById('basic-output').appendChild(link);

// ===== Part 2: List Building =====

// 5. Add "Cherry" to the end of #fruit-list
// Your code here:

const cherry = document.createElement('li');
cherry.textContent = 'Cherry';
fruitList.appendChild(cherry);

// 6. Add "Grape" to the beginning of #fruit-list
// Your code here:

const grape = document.createElement('li');
grape.textContent = 'Grape';
fruitList.prepend(grape);

// 7. Add "Mango" before "Cherry" in the list
// Hint: You'll need to find Cherry first, then use insertBefore
// Your code here:

const mango = document.createElement('li');
mango.textContent = 'Mango';
fruitList.insertBefore(mango, cherry);

// 8. Create a function that adds a new fruit to the list
// The function should take the fruit name as a parameter
// Your code here:

function addFruit(fruitName) {
    const li = document.createElement('li');
    li.textContent = fruitName;
    fruitList.appendChild(li);
}
addFruit('Strawberry');


// ===== Part 3: Creating Cards =====

// 9. Create a function called createCard that takes title and description parameters
// It should return a div with class "card", containing an h3 for title and p for description
// Your code here:

function createCard(title, description, imageUrl = null) {
    const card = document.createElement('div');
    card.classList.add('card');

    // 11. Add image if provided
     if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = title;
        img.style.maxWidth = '100%';
        card.appendChild(img);
    }
    
    const h3 = document.createElement('h3');
    h3.textContent = title;
    card.appendChild(h3);
    
    const p = document.createElement('p');
    p.textContent = description;
    card.appendChild(p);
    
    return card;
}

// 10. Use your createCard function to add 3 cards to #cards-container
// Your code here:

const cardsContainer = document.getElementById('cards-container');
cardsContainer.appendChild(createCard('Card 1', 'This is the first card'));
cardsContainer.appendChild(createCard('Card 2', 'This is the second card'));
cardsContainer.appendChild(createCard('Card 3', 'This is the third card'));

// 11. Modify your createCard function to also accept an optional imageUrl parameter
// If provided, add an img element at the top of the card
// Your code here:



// ===== Part 4: Todo List =====

// 12. Create a function createTodoItem(text) that creates a todo item
// Each todo item should have:
// - A checkbox input
// - A span with the text
// - A delete button with class "delete-btn" and text "Delete"
// The whole thing should be wrapped in a div with class "todo-item"
// Your code here:

function createTodoItem(text) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const span = document.createElement('span');
    span.textContent = text;
    span.style.marginLeft = '10px';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        todoItem.remove();
    });
    
    todoItem.appendChild(checkbox);
    todoItem.appendChild(span);
    todoItem.appendChild(deleteBtn);
    
    return todoItem;
}

// 13. Create 3 todo items and add them to #todo-list
// Your code here:

const todoList = document.getElementById('todo-list');
todoList.appendChild(createTodoItem('Learn JavaScript'));
todoList.appendChild(createTodoItem('Practice DOM manipulation'));
todoList.appendChild(createTodoItem('Build a project'));

// 14. Make the delete button actually remove the todo item when clicked
// Hint: Use event delegation or add event listener when creating
// Your code here:



// ===== Part 5: Navigation =====

const navItems = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Contact', href: '#contact' }
];

// 15. Loop through navItems and create navigation links
// Each should be an anchor with class "nav-item"
// Add them all to #main-nav
// Your code here:

const mainNav = document.getElementById('main-nav');
navItems.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    a.classList.add('nav-item');
    mainNav.appendChild(a);
});

// ===== Part 6: Button Factory =====

// 16. Create a function createButton(text, color, onClick) that:
// - Creates a button with the given text
// - Sets the background color to the color parameter
// - Attaches the onClick function as a click event handler
// - Returns the button element
// Your code here:

function createButton(text, color, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('btn');
    button.style.backgroundColor = color;
    button.addEventListener('click', onClick);
    return button;
}

// 17. Use createButton to create 3 buttons:
// - "Red Button" (red) - shows alert "Red clicked!"
// - "Green Button" (green) - logs "Green clicked!" to console
// - "Blue Button" (blue) - changes the background of #button-output to blue
// Add all buttons to #button-container
// Your code here:

const buttonContainer = document.getElementById('button-container');
const buttonOutput = document.getElementById('button-output');

buttonContainer.appendChild(
    createButton('Red Button', 'red', () => alert('Red clicked!'))
);
buttonContainer.appendChild(
    createButton('Green Button', 'green', () => console.log('Green clicked!'))
);
buttonContainer.appendChild(
    createButton('Blue Button', 'blue', () => {
        buttonOutput.style.backgroundColor = 'blue';
        buttonOutput.style.height = '50px';
    })
);

// ===== BONUS Challenges =====

// 18. Create a table from this data:
const tableData = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 35, city: 'Chicago' }
];

const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.marginTop = '20px';

// Create a table with headers and rows, append to #basic-output
// Your code here:

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
['Name', 'Age', 'City'].forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.style.border = '1px solid #ddd';
    th.style.padding = '8px';
    th.style.backgroundColor = '#f4f4f4';
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');
tableData.forEach(row => {
    const tr = document.createElement('tr');
    Object.values(row).forEach(cellValue => {
        const td = document.createElement('td');
        td.textContent = cellValue;
        td.style.border = '1px solid #ddd';
        td.style.padding = '8px';
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
});
table.appendChild(tbody);
document.getElementById('basic-output').appendChild(table);

// 19. Create a function that takes HTML string and returns a DOM element
// function htmlToElement(htmlString) { ... }
// Your code here:

function htmlToElement(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    return template.content.firstChild;
}

const myElement = htmlToElement('<div class="test"><span>Hello</span></div>');
console.log('19. HTML to Element:', myElement);

// 20. Create a modal dialog component
// It should have a title, content, close button, and overlay background
// Your code here:

function createModal(title, content) {
    // Overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    // Modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 8px;
        min-width: 300px;
        max-width: 500px;
    `;
    
    // Title
    const titleEl = document.createElement('h2');
    titleEl.textContent = title;
    modal.appendChild(titleEl);
    
    // Content
    const contentEl = document.createElement('p');
    contentEl.textContent = content;
    modal.appendChild(contentEl);
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.classList.add('btn');
    closeBtn.addEventListener('click', () => overlay.remove());
    modal.appendChild(closeBtn);
    
    overlay.appendChild(modal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
    
    return overlay;
}

console.log('20. Modal function created');
