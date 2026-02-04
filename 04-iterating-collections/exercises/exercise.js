// Exercise 04: Iterating Over Collections
// ========================================
// Practice iterating over DOM collections using different methods.

// Helper function to display results
function displayResult(label, value) {
    const output = document.getElementById('output');
    output.innerHTML += `<p><strong>${label}:</strong> ${value}</p>`;
}

// ===== Part 1: Basic Iteration =====

// 1. Use a for loop to log all product names to the console
// Your code here:

const products = document.querySelectorAll('.product');
for (let i = 0; i < products.length; i++) {
    console.log('1.', products[i].querySelector('h3').textContent);
}

// 2. Use a for...of loop to add the class "processed" to each product
// Your code here:

for (const product of products) {
    product.classList.add('processed');
} 
console

// 3. Use forEach to log each task's text content
// Your code here:

const tasks = document.querySelectorAll('.task');
tasks.forEach(task => {
    console.log('3.', task.textContent);
});


// ===== Part 2: forEach with Index =====

// 4. Use forEach to number each nav link (add "1. ", "2. ", etc. before the text)
// Your code here:

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link, index) => {
    link.textContent = `${index + 1}. ${link.textContent}`;
});
console.log('4. Numbered all nav links');

// 5. Add a data-index attribute to each task showing its position
// Your code here:

tasks.forEach((task, index) => {
    task.dataset.index = index;
});
console.log('5. Added data-index to all tasks');


// ===== Part 3: Converting and Using Array Methods =====

// 6. Get all products, convert to array, and use map() to get an array of prices
// Display the result using displayResult()
// Your code here:

const prices = Array.from(products).map(product => 
    parseFloat(product.dataset.price)
);
displayResult('6. Prices', prices.join(', '));

// 7. Use filter() to get only products that are on sale
// Log the count of on-sale products
// Your code here:

const onSaleProducts = [...products].filter(product => 
    product.classList.contains('on-sale')
);
displayResult('7. On sale count', onSaleProducts.length);

// 8. Use filter() to get only completed tasks
// Your code here:

const completedTasks = [...tasks].filter(task => 
    task.classList.contains('completed')
);
displayResult('8. Completed tasks', completedTasks.length);

// 9. Use find() to get the first priority task
// Your code here:

const firstPriority = [...tasks].find(task => 
    task.classList.contains('priority')
);
displayResult('9. First priority task', firstPriority?.textContent);

// 10. Use reduce() to calculate the total price of all products
// Your code here:

const totalPrice = [...products].reduce((sum, product) => {
    return sum + parseFloat(product.dataset.price);
}, 0);
displayResult('10. Total price', `$${totalPrice.toFixed(2)}`);


// ===== Part 4: Combining Methods =====

// 11. Get all products in the "electronics" category and calculate their total price
// Hint: filter then reduce
// Your code here:

const electronicsTotal = [...products]
    .filter(p => p.dataset.category === 'electronics')
    .reduce((sum, p) => sum + parseFloat(p.dataset.price), 0);
displayResult('11. Electronics total', `$${electronicsTotal.toFixed(2)}`);

// 12. Get the names of all on-sale products as an array of strings
// Hint: filter then map
// Your code here:

const saleNames = [...products]
    .filter(p => p.classList.contains('on-sale'))
    .map(p => p.querySelector('h3').textContent);
displayResult('12. On sale products', saleNames.join(', '));

// 13. Find the most expensive product and log its name
// Hint: Use reduce to compare prices
// Your code here:

const mostExpensive = [...products].reduce((max, product) => {
    const price = parseFloat(product.dataset.price);
    const maxPrice = parseFloat(max.dataset.price);
    return price > maxPrice ? product : max;
});
displayResult('13. Most expensive', mostExpensive.querySelector('h3').textContent);

// ===== Part 5: Practical Applications =====

// 14. Add click event listeners to all nav links that log their data-page attribute
// Your code here:

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('14. Clicked page:', link.dataset.page);
    });
});

// 15. Hide all completed tasks (add the "hidden" class)
// Your code here:

completedTasks.forEach(task => {
    task.classList.add('hidden');
});
console.log('15. Hidden completed tasks');

// 16. Make all priority tasks have red text
// Your code here:

document.querySelectorAll('.task.priority').forEach(task => {
    task.style.color = 'red';
});
console.log('16. Made priority tasks red');

// 17. Add a sale badge (text "[SALE]") to the beginning of on-sale product names
// Your code here:

onSaleProducts.forEach(product => {
    const h3 = product.querySelector('h3');
    h3.textContent = '[SALE] ' + h3.textContent;
});
console.log('17. Added sale badges');

// ===== Part 6: HTMLCollection vs NodeList =====

// 18. Get products using getElementsByClassName and try to use forEach
// This will fail! Fix it by converting to an array first.
// Your code here:

const productsCollection = document.getElementsByClassName('product');
Array.from(productsCollection).forEach(product => {
    console.log('18.', product.querySelector('h3').textContent);
});

// 19. Demonstrate the "live" nature of HTMLCollection
// Get the products count, add a new product, check the count again
// Your code here:

const liveCollection = document.getElementsByClassName('product');
console.log('19. Before adding:', liveCollection.length);

// ===== BONUS Challenges =====

// 20. Group products by category and display the count for each
// Expected output: { electronics: 3, clothing: 1, accessories: 1 }
// Your code here:

const categories = [...products].reduce((groups, product) => {
    const category = product.dataset.category;
    groups[category] = (groups[category] || 0) + 1;
    return groups;
}, {});
displayResult('20. Categories', JSON.stringify(categories));

// 21. Create a function that toggles the "completed" class on all tasks
// Your code here:

function toggleAllCompleted() {
    document.querySelectorAll('.task').forEach(task => {
        task.classList.toggle('completed');
    });
}
console.log('21. toggleAllCompleted function created');

// 22. Sort tasks: priority first, then incomplete, then completed
// This is tricky! You'll need to use sort with a custom compare function
// Your code here:

function sortTasks() {
    const tasksContainer = document.getElementById('tasks-section');
    const taskElements = [...document.querySelectorAll('.task')];
    
    taskElements.sort((a, b) => {
        const aScore = a.classList.contains('priority') ? 0 : 
                       a.classList.contains('completed') ? 2 : 1;
        const bScore = b.classList.contains('priority') ? 0 : 
                       b.classList.contains('completed') ? 2 : 1;
        return aScore - bScore;
    });
    }
console.log('22. sortTasks function created');