// Exercise 10: Event Handling
// ============================

// ===== Part 1: Click Events =====

// 1. Add a click event to #click-counter-btn that counts clicks
// Update the button text to show "Clicks: N"
// Your code here:

let clickCount = 0;
const clickCounterBtn = document.getElementById('click-counter-btn');
clickCounterBtn.addEventListener('click', () => {
    clickCount++;
    clickCounterBtn.textContent = `Clicks: ${clickCount}`;
});

// 2. Add a click event to #toggle-btn that toggles between ON/OFF
// Also toggle the 'active' class
// Your code here:

const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    toggleBtn.textContent = toggleBtn.classList.contains('active') ? 'ON' : 'OFF';
});


// 3. Add a double-click event to #double-click-btn
// Change the text to "Double Clicked!" and change background to green
// Your code here:

const doubleClickBtn = document.getElementById('double-click-btn');
doubleClickBtn.addEventListener('dblclick', () => {
    doubleClickBtn.textContent = 'Double Clicked!';
    doubleClickBtn.style.backgroundColor = '#28a745';
});

// ===== Part 2: Mouse Events =====

const mouseBox = document.getElementById('mouse-box');

// 4. Add mouseover event to change the box color to green
// Your code here:

mouseBox.addEventListener('mouseover', () => {
    mouseBox.style.backgroundColor = '#28a745';
});

// 5. Add mouseout event to change the box color back to blue
// Your code here:

mouseBox.addEventListener('mouseout', () => {
    mouseBox.style.backgroundColor = '#007bff';
});

// 6. Add mousemove event to #mouse-tracker that displays the mouse coordinates
// Update #mouse-pos with the current position
// Your code here:

const mousePos = document.getElementById('mouse-pos');
document.getElementById('mouse-tracker').addEventListener('mousemove', (e) => {
    mousePos.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

// 7. Add mousedown and mouseup events to the box
// - mousedown: scale the box to 0.9
// - mouseup: scale back to 1
// Your code here:

mouseBox.addEventListener('mousedown', () => {
    mouseBox.style.transform = 'scale(0.9)';
});
mouseBox.addEventListener('mouseup', () => {
    mouseBox.style.transform = 'scale(1)';
});

// ===== Part 3: Keyboard Events =====

const keyboardInput = document.getElementById('keyboard-input');
const keyDisplay = document.getElementById('key-display');
let keyTimeout;

// 8. Add keydown event to #keyboard-input
// Display the pressed key in #key-display
// Show the key, keyCode, and whether Shift/Ctrl/Alt was held
// Your code here:

keyboardInput.addEventListener('keydown', (e) => {
    keyDisplay.innerHTML = `
        Key: ${e.key}<br>
        Code: ${e.code}<br>
        Modifiers: ${e.shiftKey ? 'Shift ' : ''}${e.ctrlKey ? 'Ctrl ' : ''}${e.altKey ? 'Alt' : ''}
    `;
    clearTimeout(keyTimeout);
});

// 9. Add keyup event that clears the display after 1 second
// Your code here:

keyboardInput.addEventListener('keyup', () => {
    keyTimeout = setTimeout(() => {
        keyDisplay.textContent = 'Press any key';
    }, 1000);
});

// ===== Part 4: Form Events =====

const demoForm = document.getElementById('demo-form');
const formOutput = document.getElementById('form-output');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');

// 10. Add submit event to #demo-form
// Prevent the default submission
// Display the form data in #form-output
// Your code here:

demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formOutput.innerHTML = `
        <p>Username: ${usernameInput.value}</p>
        <p>Email: ${emailInput.value}</p>
    `;
});

// 11. Add input event to #username
// Show live character count
// Your code here:

usernameInput.addEventListener('input', () => {
    console.log(`Character count: ${usernameInput.value.length}`);
});

// 12. Add focus and blur events to #email
// Add/remove a 'focused' class (style it if you want)
// Your code here:

emailInput.addEventListener('focus', () => {
    emailInput.style.boxShadow = '0 0 5px rgba(0,123,255,0.5)';
});
emailInput.addEventListener('blur', () => {
    emailInput.style.boxShadow = 'none';
});

// ===== Part 5: Event Delegation =====

let itemCounter = 3;
const todoList = document.getElementById('todo-list');

// 13. Add click event to #add-item-btn to add new items to the list
// Your code here:

document.getElementById('add-item-btn').addEventListener('click', () => {
    itemCounter++;
    const newItem = document.createElement('div');
    newItem.className = 'list-item';
    newItem.innerHTML = `
        <input type="checkbox">
        <span>Task ${itemCounter}</span>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(newItem);
});

// 14. Use event delegation on #todo-list to handle:
// - Delete button clicks (remove the item)
// - Checkbox changes (toggle 'completed' class)
// Your code here:

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('.list-item').remove();
    }
    
    if (e.target.type === 'checkbox') {
        e.target.closest('.list-item').classList.toggle('completed');
    }
});

// ===== Part 6: Event Propagation =====

let stopPropagation = false;
const propagationLog = document.getElementById('propagation-log');
const propDemo = document.getElementById('propagation-demo');

// 15. Add click events to all three propagation divs
// Log which element was clicked to #propagation-log
// Your code here:

propDemo.addEventListener('click', (e) => {
    if (stopPropagation && e.target !== propDemo) return;
    propagationLog.textContent = 'Clicked: Outer (blue)';
});

propDemo.querySelector('.inner').addEventListener('click', (e) => {
    if (stopPropagation) e.stopPropagation();
    propagationLog.textContent = 'Clicked: Inner (green)';
});

propDemo.querySelector('.innermost').addEventListener('click', (e) => {
    if (stopPropagation) e.stopPropagation();
    propagationLog.textContent = 'Clicked: Innermost (yellow)';
});

// 16. Implement the toggle button to enable/disable stopPropagation
// Your code here:

document.getElementById('stop-propagation-btn').addEventListener('click', () => {
    stopPropagation = !stopPropagation;
    document.getElementById('stop-propagation-btn').textContent = 
        stopPropagation ? 'Stop Propagation: ON' : 'Toggle Stop Propagation';
});

// ===== Part 7: Prevent Default =====

const preventLog = document.getElementById('prevent-log');


// 17. Prevent the link from navigating and log a message instead
// Your code here:

document.getElementById('prevented-link').addEventListener('click', (e) => {
    e.preventDefault();
    preventLog.textContent = 'Link click prevented! Would have gone to: ' + e.target.href;
});


// 18. Prevent the form from submitting and log a message instead
// Your code here:

document.getElementById('prevented-form').addEventListener('submit', (e) => {
    e.preventDefault();
    preventLog.textContent = 'Form submit prevented!';
});

// ===== Part 8: Counter with Multiple Events =====

let count = 0;
const counterDisplay = document.getElementById('counter-display');

function updateCounter() {
    counterDisplay.textContent = count;
}

// 19. Add click events to increment, decrement, and reset buttons
// Your code here:

document.getElementById('increment-btn').addEventListener('click', () => {
    count++;
    updateCounter();
});

document.getElementById('decrement-btn').addEventListener('click', () => {
    count--;
    updateCounter();
});

document.getElementById('reset-btn').addEventListener('click', () => {
    count = 0;
    updateCounter();
});

// 20. Add keydown event to document
// Arrow Up increases, Arrow Down decreases
// Hold Shift to change by 10 instead of 1
// Your code here:

document.addEventListener('keydown', (e) => {
    const change = e.shiftKey ? 10 : 1;
    
    if (e.key === 'ArrowUp') {
        count += change;
        updateCounter();
    } else if (e.key === 'ArrowDown') {
        count -= change;
        updateCounter();
    }
});


// ===== BONUS Challenges =====

// 21. Create a long-press detection (button held for 1+ seconds)
// Your code here:

function setupLongPress(element, callback, duration = 1000) {
    let pressTimer;
    
    element.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
            callback();
        }, duration);
    });
    
    element.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
    });
    
    element.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer);
    });
}


// 22. Create a drag-and-drop functionality for an element
// Your code here:

function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;
    
    element.style.position = 'absolute';
    
    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            element.style.left = (e.clientX - offsetX) + 'px';
            element.style.top = (e.clientY - offsetY) + 'px';
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}


// 23. Add a 'once' event that only fires once
// Your code here:

const onceBtn = document.createElement('button');
onceBtn.textContent = 'Click me (only once)';
onceBtn.className = 'btn';
document.getElementById('section-1').appendChild(onceBtn);

onceBtn.addEventListener('click', () => {
    alert('This only fires once!');
    onceBtn.textContent = 'Already clicked';
}, { once: true });

console.log('All event handling exercises completed!');