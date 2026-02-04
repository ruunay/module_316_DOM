// Exercise 07: Modifying Content
// ================================

// ===== Part 1: textContent Basics =====

// 1. When "Change Text" is clicked, change #text-target's text to "The text has been changed!"
// Your code here:

document.getElementById('change-text-btn').addEventListener('click', () => {
    document.getElementById('text-target').textContent = 'The text has been changed!';
});

// 2. When "Clear Text" is clicked, clear all text from #text-target
// Your code here:

document.getElementById('clear-text-btn').addEventListener('click', () => {
    document.getElementById('text-target').textContent = '';
});


// ===== Part 2: Understanding Differences =====

// 3. When "Compare" is clicked, display the textContent, innerText, and innerHTML
// of #mixed-content in #comparison-output
// Format it nicely so the differences are clear
// Your code here:

document.getElementById('compare-btn').addEventListener('click', () => {
    const element = document.getElementById('mixed-content');
    const output = document.getElementById('comparison-output');
    
    output.innerHTML = `
        <h4>textContent:</h4>
        <pre>${element.textContent}</pre>
        <h4>innerText:</h4>
        <pre>${element.innerText}</pre>
        <h4>innerHTML:</h4>
        <pre>${escapeHtml(element.innerHTML)}</pre>
    `;
});

// ===== Part 3: Counter =====

// 4. Implement the counter functionality
// - Clicking + should increment the count
// - Clicking - should decrement the count
// - Clicking Reset should set it back to 0
// Display the count in #counter-display
// Your code here:

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

let count = 0;
const counterDisplay = document.getElementById('counter-display');

document.getElementById('increment-btn').addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

document.getElementById('decrement-btn').addEventListener('click', () => {
    count--;
    counterDisplay.textContent = count;
});

document.getElementById('reset-btn').addEventListener('click', () => {
    count = 0;
    counterDisplay.textContent = count;
});


// ===== Part 4: innerHTML =====

// 5. When "Replace with HTML" is clicked, replace #html-container's content
// with a heading and a paragraph
// Your code here:

document.getElementById('replace-html-btn').addEventListener('click', () => {
    document.getElementById('html-container').innerHTML = `
        <h3>New Heading</h3>
        <p>This is a new paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
    `;
});

// 6. When "Add a List" is clicked, add an unordered list with 3 items
// to #html-container (without removing existing content)
// Your code here:

document.getElementById('add-list-btn').addEventListener('click', () => {
    document.getElementById('html-container').innerHTML += `
        <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ul>
    `;
});


// ===== Part 5: User Input Display =====

// 7. As the user types in #user-input, display the text in #input-display
// Make sure to use textContent (not innerHTML) for safety
// If the input is empty, show "Your message will appear here"
// Your code here:

document.getElementById('user-input').addEventListener('input', (e) => {
    const display = document.getElementById('input-display');
    const value = e.target.value.trim();
    display.textContent = value || 'Your message will appear here';
});


let quoteIndex = 0;

document.getElementById('next-quote-btn').addEventListener('click', () => {
    const quote = quotes[quoteIndex];
    document.getElementById('quote-text').textContent = `"${quote.text}"`;
    document.getElementById('quote-author').textContent = `— ${quote.author}`;
    quoteIndex = (quoteIndex + 1) % quotes.length;
});

// ===== Part 6: Quote Rotator =====

// 8. Create a quote rotator that cycles through these quotes:
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
];

// When "Next Quote" is clicked, display the next quote
// Update both #quote-text and #quote-author
// Your code here:



// ===== Part 7: Live Preview =====

// 9. As the user types in #preview-input, show the content in #live-preview
// Convert newlines to <br> tags
// Your code here:

document.getElementById('preview-input').addEventListener('input', (e) => {
    const preview = document.getElementById('live-preview');

    const text = e.target.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>');
    preview.innerHTML = text;
});

// ===== Part 8: Word Counter =====

// 10. As the user types in #word-input:
// - Count the number of words and display in #word-count
// - Count the number of characters and display in #char-count
// Hint: split by whitespace and filter empty strings for word count
// Your code here:

document.getElementById('word-input').addEventListener('input', (e) => {
    const text = e.target.value;

        document.getElementById('char-count').textContent = text.length;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById('word-count').textContent = words.length;
});

// ===== BONUS Challenges =====

// 11. Create a simple markdown preview:
// - **text** becomes bold
// - *text* becomes italic
// - # text becomes h1
// Your code here:

function simpleMarkdown(text) {
  return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
        .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
        .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
        .replace(/\n/g, '<br>');
}

// 12. Create a typing effect that reveals text one character at a time
// Your code here:

function typeText(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}


// 13. Create a function that sanitizes HTML input (removes script tags, etc.)
// Your code here:

function sanitizeHtml(html) {
    const temp = document.createElement('div');
    temp.textContent = html; 

    
  temp.querySelectorAll('script').forEach(el => el.remove());
    
    temp.querySelectorAll('*').forEach(el => {
        [...el.attributes].forEach(attr => {
            if (attr.name.startsWith('on')) {
                el.removeAttribute(attr.name);
            }
        });
    });
    
    return temp.innerHTML;
}

console.log('All content modification exercises completed!');