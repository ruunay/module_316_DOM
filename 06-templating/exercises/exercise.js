// Exercise 06: Templating with DocumentFragment and cloneNode
// ============================================================

// ===== Part 1: DocumentFragment Basics =====

// 1. Create a DocumentFragment and add 10 list items (1-10) to #numbers-list
// Use a for loop and add all items at once using the fragment
// Your code here:

const numbersList = document.getElementById('numbers-list');
const fragment1 = document.createDocumentFragment();

for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment1.appendChild(li);
}
numbersList.appendChild(fragment1);

// 2. Create a function that takes an array of strings and adds them
// to a list element using a DocumentFragment
// function addItemsToList(items, listId) { ... }
// Your code here:

function addItemsToList(items, listId) {
    const list = document.getElementById(listId);
    const fragment = document.createDocumentFragment();
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        fragment.appendChild(li);
    });
    
    list.appendChild(fragment);
}


// ===== Part 2: Using cloneNode =====

// 3. Get the #simple-card-template (hidden in the HTML)
// Clone it and create 3 cards with different titles and descriptions
// Add them to #cards-container
// Your code here:

const simpleTemplate = document.getElementById('simple-card-template');

function createCardFromClone(title, description) {
    const clone = simpleTemplate.cloneNode(true);
    clone.removeAttribute('id');
    clone.querySelector('.title').textContent = title;
    clone.querySelector('.description').textContent = description;
    return clone;
}

const cardsContainer = document.getElementById('cards-container');
cardsContainer.appendChild(createCardFromClone('Card 1', 'This is the first card'));
cardsContainer.appendChild(createCardFromClone('Card 2', 'This is the second card'));
cardsContainer.appendChild(createCardFromClone('Card 3', 'This is the third card'));

// 4. Create a function that takes title and description,
// clones the template, fills in the data, and returns the element
// function createCardFromClone(title, description) { ... }
// Your code here:



// ===== Part 3: HTML Template Element =====

// Product data
const products = [
    { 
        name: 'Wireless Headphones', 
        description: 'Premium sound quality',
        price: 99.99,
        image: 'https://picsum.photos/200/120?random=1'
    },
    { 
        name: 'Smart Watch', 
        description: 'Track your fitness',
        price: 199.99,
        image: 'https://picsum.photos/200/120?random=2'
    },
    { 
        name: 'Bluetooth Speaker', 
        description: 'Portable audio bliss',
        price: 49.99,
        image: 'https://picsum.photos/200/120?random=3'
    }
];

// 5. Use the #product-template to create product cards
// Loop through the products array and add each to #products-container
// Use a DocumentFragment for efficiency
// Your code here:


// 6. Add event listeners to the "Add to Cart" buttons
// When clicked, log the product name to the console
// Hint: You can add the listener when creating each card
// Your code here (modify your code from #5):



// ===== Part 4: Users List =====

// User data
const users = [
    { name: 'Alice Johnson', email: 'alice@example.com', avatar: 'https://i.pravatar.cc/40?img=1' },
    { name: 'Bob Smith', email: 'bob@example.com', avatar: 'https://i.pravatar.cc/40?img=2' },
    { name: 'Carol White', email: 'carol@example.com', avatar: 'https://i.pravatar.cc/40?img=3' },
    { name: 'David Brown', email: 'david@example.com', avatar: 'https://i.pravatar.cc/40?img=4' }
];

// 7. Use the #user-template to display the users
// Your code here:



// ===== Part 5: Chat Messages =====

// Message data
const messages = [
    { text: 'Hey! How are you?', time: '10:30 AM', sent: false },
    { text: 'I\'m good, thanks! You?', time: '10:31 AM', sent: true },
    { text: 'Great! Want to grab coffee?', time: '10:32 AM', sent: false },
    { text: 'Sure, sounds good!', time: '10:33 AM', sent: true },
    { text: 'Meet at 3pm?', time: '10:34 AM', sent: false }
];

// 8. Use the #message-template to display the chat messages
// Add the class "sent" or "received" based on the sent property
// Your code here:

const messageTemplate = document.getElementById('message-template');
const chatContainer = document.getElementById('chat-container');
const messageFragment = document.createDocumentFragment();

messages.forEach(message => {
    const clone = messageTemplate.content.cloneNode(true);
    const messageDiv = clone.querySelector('.message');
    
    messageDiv.classList.add(message.sent ? 'sent' : 'received');
    clone.querySelector('.text').textContent = message.text;
    clone.querySelector('.time').textContent = ` - ${message.time}`;
    
    messageFragment.appendChild(clone);
});

chatContainer.appendChild(messageFragment);

// ===== Part 6: Performance Test =====

// 9. Create a performance test that compares direct append vs DocumentFragment
// Clicking "Test Slow" should add 1000 items directly
// Clicking "Test Fast" should add 1000 items using a fragment
// Display the time taken in #performance-result
// Your code here:

const perfList = document.getElementById('performance-list');
const perfResult = document.getElementById('performance-result');

document.getElementById('test-slow').addEventListener('click', () => {
    perfList.innerHTML = '';
    const start = performance.now();
    
    for (let i = 0; i < 1000; i++) {
        const li = document.createElement('li');
        li.textContent = `Direct item ${i}`;
        perfList.appendChild(li);
    }
    
    const end = performance.now();
    perfResult.textContent = `Direct append: ${(end - start).toFixed(2)}ms`;
});

document.getElementById('test-fast').addEventListener('click', () => {
    perfList.innerHTML = '';
    const start = performance.now();
    
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 1000; i++) {
        const li = document.createElement('li');
        li.textContent = `Fragment item ${i}`;
        fragment.appendChild(li);
    }
    perfList.appendChild(fragment);
    
    const end = performance.now();
    perfResult.textContent = `Fragment append: ${(end - start).toFixed(2)}ms`;
});

// ===== BONUS Challenges =====

// 10. Create a reusable template factory function
// function createTemplateFactory(templateId) { ... }
// It should return a function that takes data and returns a filled clone
// Your code here:

function createTemplateFactory(templateId) {
    const template = document.getElementById(templateId);
    
    return function(fillFunction) {
        const clone = template.content.cloneNode(true);
        fillFunction(clone);
        return clone;
    };
}

// 11. Create a function that clears a container and repopulates it from data
// function refreshList(containerId, templateId, data, fillFunction) { ... }
// Your code here:

function refreshList(containerId, templateId, data, fillFunction) {
    const container = document.getElementById(containerId);
    const template = document.getElementById(templateId);
    const fragment = document.createDocumentFragment();
    
    container.innerHTML = '';
    
    data.forEach(item => {
        const clone = template.content.cloneNode(true);
        fillFunction(clone, item);
        fragment.appendChild(clone);
    });
    
    container.appendChild(fragment);
}

// 12. Create a nested template system (e.g., a card with multiple items inside)
// Your code here:

function createNestedComponent(parentData, childrenData) {
    const parentTemplate = document.createElement('div');
    parentTemplate.classList.add('parent-component');
    
    const header = document.createElement('h3');
    header.textContent = parentData.title;
    parentTemplate.appendChild(header);
    
    const childContainer = document.createElement('div');
    childContainer.classList.add('children');
    
    const childFragment = document.createDocumentFragment();
    childrenData.forEach(child => {
        const childEl = document.createElement('div');
        childEl.classList.add('child-item');
        childEl.textContent = child;
        childFragment.appendChild(childEl);
    });
    childContainer.appendChild(childFragment);
    parentTemplate.appendChild(childContainer);
    
    return parentTemplate;
}

console.log('All template exercises completed!');
