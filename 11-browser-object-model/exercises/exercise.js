// Exercise 11: Browser Object Model
// ==================================

// ===== Part 1: Window Properties =====

// 1. When "Show Window Info" is clicked, display:
// - innerWidth and innerHeight
// - outerWidth and outerHeight
// - scrollX and scrollY
// Display in #window-info
// Your code here:

document.getElementById('show-window-info').addEventListener('click', () => {
    document.getElementById('window-info').innerHTML = `
        <strong>Inner Size:</strong> ${window.innerWidth} x ${window.innerHeight}<br>
        <strong>Outer Size:</strong> ${window.outerWidth} x ${window.outerHeight}<br>
        <strong>Scroll Position:</strong> X: ${window.scrollX}, Y: ${window.scrollY}
    `;
});


// ===== Part 2: Dialog Methods =====

// 2. Show an alert when #show-alert is clicked
// Your code here:

const dialogResult = document.getElementById('dialog-result');

document.getElementById('show-alert').addEventListener('click', () => {
    alert('This is an alert message!');
});

// 3. Show a confirm dialog when #show-confirm is clicked
// Display the result (true/false) in #dialog-result
// Your code here:

document.getElementById('show-confirm').addEventListener('click', () => {
    const result = confirm('Do you want to proceed?');
    dialogResult.textContent = `You clicked: ${result ? 'OK' : 'Cancel'}`;
});

// 4. Show a prompt when #show-prompt is clicked
// Display what the user entered in #dialog-result
// Your code here:

document.getElementById('show-prompt').addEventListener('click', () => {
    const name = prompt('What is your name?', 'Anonymous');
    if (name) {
        dialogResult.textContent = `Hello, ${name}!`;
    } else {
        dialogResult.textContent = 'You cancelled the prompt.';
    }
});


// ===== Part 3: Location Object =====

// 5. Display location info when the button is clicked:
// - href, protocol, host, pathname, search, hash
// Your code here:

document.getElementById('show-location-info').addEventListener('click', () => {
    document.getElementById('location-info').innerHTML = `
        <strong>href:</strong> ${location.href}<br>
        <strong>protocol:</strong> ${location.protocol}<br>
        <strong>host:</strong> ${location.host}<br>
        <strong>pathname:</strong> ${location.pathname}<br>
        <strong>search:</strong> ${location.search || '(none)'}<br>
        <strong>hash:</strong> ${location.hash || '(none)'}
    `;
});

// 6. Add a hash to the URL when #add-hash is clicked
// Your code here:

document.getElementById('add-hash').addEventListener('click', () => {
    location.hash = 'section';
});

// 7. Reload the page when #reload-page is clicked
// (Comment this out during development!)
// Your code here:

document.getElementById('reload-page').addEventListener('click', () => {
   alert('location.reload() would refresh the page');
});

// ===== Part 4: Navigator Object =====

// 8. Display navigator info:
// - userAgent, language, onLine, cookieEnabled, platform
// Your code here:

document.getElementById('show-navigator-info').addEventListener('click', () => {
    document.getElementById('navigator-info').innerHTML = `
        <strong>User Agent:</strong> ${navigator.userAgent}<br>
        <strong>Language:</strong> ${navigator.language}<br>
        <strong>Online:</strong> ${navigator.onLine}<br>
        <strong>Cookies Enabled:</strong> ${navigator.cookieEnabled}<br>
        <strong>Platform:</strong> ${navigator.platform}
    `;
});

// 9. Update the online status indicator
// Show "Online" or "Offline" with appropriate styling
// Also listen for online/offline events
// Your code here:

const onlineStatus = document.getElementById('online-status');

function updateOnlineStatus() {
    if (navigator.onLine) {
        onlineStatus.textContent = 'Online';
        onlineStatus.className = 'online-status online';
    } else {
        onlineStatus.textContent = 'Offline';
        onlineStatus.className = 'online-status offline';
    }
}

updateOnlineStatus();
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);


// ===== Part 5: Timers =====

let timerInterval = null;
let seconds = 0;
const timerDisplay = document.getElementById('timer-display');


// Helper function to format time
function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

// 10. Implement start, stop, and reset for the timer
// - Start: Begin counting seconds (use setInterval)
// - Stop: Pause the timer (use clearInterval)
// - Reset: Set back to 00:00
// Your code here:

document.getElementById('start-timer').addEventListener('click', () => {
    if (timerInterval) return; // Already running
    timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = formatTime(seconds);
    }, 1000);
});

document.getElementById('stop-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    timerDisplay.textContent = formatTime(seconds);
});

// 11. Implement the countdown button
// When clicked, start a 5-second countdown
// Display "5... 4... 3... 2... 1... Done!"
// Your code here:

document.getElementById('countdown-btn').addEventListener('click', () => {
    const countdownDisplay = document.getElementById('countdown-display');
    let count = 5;
    
    countdownDisplay.textContent = count;
    
    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownDisplay.textContent = count;
        } else {
            countdownDisplay.textContent = 'Done!';
            clearInterval(countdownInterval);
        }
    }, 1000);
});


// ===== Part 6: Local Storage =====

// 12. Save key-value pairs to localStorage when Save is clicked
// Your code here:

const storageList = document.getElementById('storage-list');


// 13. Display all items in localStorage
// Create a function to refresh the list display
// Your code here:

function refreshStorageList() {
    storageList.innerHTML = '';
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        
        const item = document.createElement('div');
        item.className = 'storage-item';
        item.innerHTML = `
            <span><strong>${key}:</strong> ${value}</span>
            <button class="btn" onclick="removeStorageItem('${key}')">Remove</button>
        `;
        storageList.appendChild(item);
    }
    
    if (localStorage.length === 0) {
        storageList.innerHTML = '<p>No items in localStorage</p>';
    }
}

window.removeStorageItem = function(key) {
    localStorage.removeItem(key);
    refreshStorageList();
};

// 14. Clear all localStorage when Clear All is clicked
// Your code here:

document.getElementById('clear-storage').addEventListener('click', () => {
    if (confirm('Clear all localStorage?')) {
        localStorage.clear();
        refreshStorageList();
    }
});

// 15. Load and display stored items when page loads
// Your code here:

refreshStorageList();

// ===== Part 7: Dark Mode with Persistence =====

// 16. Implement dark mode toggle that:
// - Toggles 'dark-mode' class on body
// - Saves preference to localStorage
// - Loads preference when page loads
// Your code here:

const darkModeKey = 'darkMode';

if (localStorage.getItem(darkModeKey) === 'true') {
    document.body.classList.add('dark-mode');
}

document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem(darkModeKey, isDark);
});


// ===== Part 8: Scroll & Screen =====

// 17. Scroll to top smoothly
// Your code here:

document.getElementById('scroll-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// 18. Scroll to bottom smoothly
// Your code here:

document.getElementById('scroll-bottom').addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// 19. Display screen info:
// - screen.width, screen.height
// - screen.availWidth, screen.availHeight
// - screen.colorDepth
// Your code here:

document.getElementById('show-screen-info').addEventListener('click', () => {
    document.getElementById('screen-info').innerHTML = `
        <strong>Screen Size:</strong> ${screen.width} x ${screen.height}<br>
        <strong>Available:</strong> ${screen.availWidth} x ${screen.availHeight}<br>
        <strong>Color Depth:</strong> ${screen.colorDepth} bits
    `;
});


// ===== BONUS Challenges =====

// 20. Create a "copy to clipboard" button that copies some text
// and shows a confirmation
// Your code here:

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// 21. Track and display how many times the user has visited this page
// Using localStorage
// Your code here:

let visitCount = parseInt(localStorage.getItem('visitCount') || '0') + 1;
localStorage.setItem('visitCount', visitCount);
console.log(`You have visited this page ${visitCount} times`);


// 22. Implement a debounced window resize handler
// Log the new dimensions, but only after user stops resizing for 300ms
// Your code here:

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        console.log(`Window resized to: ${window.innerWidth} x ${window.innerHeight}`);
    }, 300);
});

console.log('All BOM exercises completed!');