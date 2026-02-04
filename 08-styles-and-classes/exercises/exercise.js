// Exercise 08: Modifying Styles and Classes
// ==========================================

// ===== Part 1: Inline Styles =====

// 1. When "Change Color" is clicked, change #style-box background to a random color
// Hint: Generate a random hex color
// Your code here:

document.getElementById('change-color-btn').addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    styleBox.style.backgroundColor = randomColor;
});

// 2. When "Change Size" is clicked, increase the box size by 20px (both width and height)
// Your code here:

document.getElementById('change-size-btn').addEventListener('click', () => {
    const currentWidth = parseInt(window.getComputedStyle(styleBox).width);
    const currentHeight = parseInt(window.getComputedStyle(styleBox).height);
    styleBox.style.width = (currentWidth + 20) + 'px';
    styleBox.style.height = (currentHeight + 20) + 'px';
});

// 3. When "Reset" is clicked, reset all inline styles
// Hint: Use element.style.cssText = '' or removeAttribute('style')
// Your code here:

document.getElementById('reset-style-btn').addEventListener('click', () => {
    styleBox.removeAttribute('style');
});

// ===== Part 2: classList Methods =====

// 4. Toggle the "rounded" class on #class-box when "Toggle Round" is clicked
// Your code here:

document.getElementById('toggle-round-btn').addEventListener('click', () => {
    classBox.classList.toggle('rounded');
});

// 5. Toggle the "large" class on #class-box when "Toggle Large" is clicked
// Your code here:

document.getElementById('toggle-large-btn').addEventListener('click', () => {
    classBox.classList.toggle('large');
});

// 6. Toggle the "hidden" class on #class-box when "Toggle Hidden" is clicked
// Your code here:

document.getElementById('toggle-hidden-btn').addEventListener('click', () => {
    classBox.classList.toggle('hidden');
});

// 7. Add the "highlight" class when "Add Highlight" is clicked
// Your code here:

document.getElementById('add-highlight-btn').addEventListener('click', () => {
    classBox.classList.add('highlight');
});

// 8. Remove the "highlight" class when "Remove Highlight" is clicked
// Your code here:

document.getElementById('remove-highlight-btn').addEventListener('click', () => {
    classBox.classList.remove('highlight');
});

// ===== Part 3: Dark Mode =====

// 9. Toggle dark mode on the body when the button is clicked
// Also update the button text to show "Light Mode" or "Dark Mode"
// Your code here:

const darkModeBtn = document.getElementById('dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

// ===== Part 4: Navigation Active State =====

// 10. When a nav link is clicked:
// - Remove 'active' class from all nav links
// - Add 'active' class to the clicked link
// - Update the #current-page text
// Your code here:

const navLinks = document.querySelectorAll('#main-nav .nav-link');
const currentPage = document.getElementById('current-page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        navLinks.forEach(l => l.classList.remove('active'));
        
        link.classList.add('active');
        
        currentPage.textContent = 'Current page: ' + link.textContent;
    });
});

// ===== Part 5: Accordion =====

// 11. Create an accordion where:
// - Clicking a header toggles its content's "open" class
// - Only one section can be open at a time
// Your code here:

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.classList.contains('open');
        
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.classList.remove('open');
        });
        
        if (!isOpen) {
            content.classList.add('open');
        }
    });
});

// ===== Part 6: Progress Bar =====

// 12. When the slider changes:
// - Update the progress bar width
// - Update the percentage text inside the bar
// - Add appropriate color class based on value:
//   - 0-33: 'low' (red)
//   - 34-66: 'medium' (yellow)
//   - 67-100: 'high' (green)
// Your code here:

const progressBar = document.getElementById('progress-bar');
const progressSlider = document.getElementById('progress-slider');

progressSlider.addEventListener('input', () => {
    const value = progressSlider.value;
    
    progressBar.style.width = value + '%';
    progressBar.textContent = value + '%';
    
    progressBar.classList.remove('low', 'medium', 'high');
    
    if (value <= 33) {
        progressBar.classList.add('low');
    } else if (value <= 66) {
        progressBar.classList.add('medium');
    } else {
        progressBar.classList.add('high');
    }
});


// ===== Part 7: Card Selection =====

// 13. Allow multiple card selection:
// - Clicking a card toggles its 'selected' class
// - Update #selected-cards to show the values of selected cards
// Your code here:

const cards = document.querySelectorAll('.card');
const selectedCardsSpan = document.getElementById('selected-cards');

function updateSelectedDisplay() {
    const selected = document.querySelectorAll('.card.selected');
    if (selected.length === 0) {
        selectedCardsSpan.textContent = 'None';
    } else {
        const values = [...selected].map(c => c.dataset.value);
        selectedCardsSpan.textContent = values.join(', ');
    }
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('selected');
        updateSelectedDisplay();
    });
});

// ===== Part 8: Button States =====

// 14. When #action-btn is clicked:
// - Toggle the 'active' class
// - Change text between "Click Me" and "Clicked!"
// Your code here:

const actionBtn = document.getElementById('action-btn');
actionBtn.addEventListener('click', () => {
    actionBtn.classList.toggle('active');
    const isActive = actionBtn.classList.contains('active');
    actionBtn.textContent = isActive ? 'Clicked!' : 'Click Me';
});

// 15. When #loading-btn is clicked:
// - Add 'disabled' class
// - Change text to "Loading..."
// - After 2 seconds, remove 'disabled' class and change text back to "Submit"
// Your code here:

const loadingBtn = document.getElementById('loading-btn');
loadingBtn.addEventListener('click', () => {
    loadingBtn.classList.add('disabled');
    loadingBtn.textContent = 'Loading...';
    loadingBtn.disabled = true;
    
    setTimeout(() => {
        loadingBtn.classList.remove('disabled');
        loadingBtn.textContent = 'Submit';
        loadingBtn.disabled = false;
    }, 2000);
});

// ===== BONUS Challenges =====

// 16. Create a color picker that changes the background of a box
// using the style property with the input color value
// Your code here:

function setupColorPicker() {
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = '#007bff';
    document.getElementById('section-1').appendChild(colorInput);
    
    colorInput.addEventListener('input', () => {
        styleBox.style.backgroundColor = colorInput.value;
    });
}

// 17. Implement a "Select All" / "Deselect All" for the cards
// Your code here:

function selectAllCards() {
    cards.forEach(card => card.classList.add('selected'));
    updateSelectedDisplay();
}

function deselectAllCards() {
    cards.forEach(card => card.classList.remove('selected'));
    updateSelectedDisplay();
}

// 18. Get the computed background color of the body and log it
// Your code here:

const bodyBg = window.getComputedStyle(document.body).backgroundColor;
console.log('Body background color:', bodyBg);

console.log('All styles and classes exercises completed!');