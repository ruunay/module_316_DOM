// Exercise 09: Modifying Attributes
// ==================================

// ===== Part 1: Basic getAttribute/setAttribute =====

const testLink = document.getElementById('test-link');
const linkInfo = document.getElementById('link-info');

// 1. When "Show Attributes" is clicked, display the href, target, and title 
// of #test-link in #link-info
// Your code here:

document.getElementById('show-attrs-btn').addEventListener('click', () => {
    linkInfo.innerHTML = `
        <strong>href:</strong> ${testLink.getAttribute('href')}<br>
        <strong>target:</strong> ${testLink.getAttribute('target') || 'not set'}<br>
        <strong>title:</strong> ${testLink.getAttribute('title') || 'not set'}
    `;
});

// 2. When "Change URL" is clicked, change the href to "https://google.com"
// and update the title attribute too
// Your code here:

document.getElementById('change-href-btn').addEventListener('click', () => {
    testLink.setAttribute('href', 'https://google.com');
    testLink.setAttribute('title', 'Visit Google');
    testLink.textContent = 'Visit Google';
});

// 3. When "Toggle Target" is clicked, toggle the target attribute
// If it's "_blank", change to "_self" (and vice versa)
// If the attribute doesn't exist, add target="_blank"
// Your code here:

document.getElementById('toggle-target-btn').addEventListener('click', () => {
    if (testLink.hasAttribute('target')) {
        const current = testLink.getAttribute('target');
        testLink.setAttribute('target', current === '_blank' ? '_self' : '_blank');
    } else {
        testLink.setAttribute('target', '_blank');
    }
});

// ===== Part 2: Image Attributes =====

const mainImage = document.getElementById('main-image');
const imageInfo = document.getElementById('image-info');
let imageIndex = 1;

// 4. When "Change Image" is clicked, change the image src to a new random image
// Also update the alt attribute
// Hint: Use https://picsum.photos/300/200?random=N where N is a number
// Your code here:

document.getElementById('change-image-btn').addEventListener('click', () => {
    imageIndex++;
    mainImage.setAttribute('src', `https://picsum.photos/300/200?random=${imageIndex}`);
    mainImage.setAttribute('alt', `Random image ${imageIndex}`);
});

// 5. When "Show Image Info" is clicked, display the src, alt, and loading 
// attributes in #image-info
// Your code here:

document.getElementById('show-image-info-btn').addEventListener('click', () => {
    imageInfo.innerHTML = `
        <strong>src:</strong> ${mainImage.getAttribute('src')}<br>
        <strong>alt:</strong> ${mainImage.getAttribute('alt')}<br>
        <strong>loading:</strong> ${mainImage.getAttribute('loading') || 'not set'}
    `;
});

// ===== Part 3: Form Attributes =====

const agreeCheckbox = document.getElementById('agree-checkbox');
const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name-input');

// 6. When the checkbox is checked, enable the submit button (remove disabled)
// When unchecked, disable the button (add disabled)
// Your code here:

agreeCheckbox.addEventListener('change', () => {
    if (agreeCheckbox.checked) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'true');
    }
});

// 7. Log the input's placeholder and maxlength attributes when the page loads
// Your code here:

console.log('Placeholder:', nameInput.getAttribute('placeholder'));
console.log('Maxlength:', nameInput.getAttribute('maxlength'));

// 8. Change the input's placeholder when it receives focus
// and change it back when it loses focus
// Your code here:

nameInput.addEventListener('focus', () => {
    nameInput.setAttribute('placeholder', 'Start typing...');
});

nameInput.addEventListener('blur', () => {
    nameInput.setAttribute('placeholder', 'Enter your name');
});

// ===== Part 4: Data Attributes =====

const cart = [];
const cartDisplay = document.getElementById('cart-display');

function updateCartDisplay() {
    if (cart.length === 0) {
        cartDisplay.textContent = 'Empty';
    } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartDisplay.textContent = `${cart.length} items - $${total.toFixed(2)}`;
    }
}

// 9. Add click handlers to the "Add to Cart" buttons
// When clicked, get the product's data-id, data-price, and data-category
// Add the product to the cart array and update the cart display
// Your code here:

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.closest('.product-card');
        const id = product.dataset.id;
        const price = parseFloat(product.dataset.price);
        const category = product.dataset.category;
        
        cart.push({ id, price, category });
        console.log(`Added product ${id} (${category}) - $${price}`);
        updateCartDisplay();
    });
});

// 10. Toggle the "selected" class on product cards when clicked
// Also update the data-selected attribute to "true" or "false"
// Your code here:

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') return; // Don't toggle when clicking button
        
        const isSelected = card.dataset.selected === 'true';
        card.dataset.selected = !isSelected;
        card.classList.toggle('selected', !isSelected);
    });
});


// 11. Filter products by category - log all products in the "electronics" category
// Your code here:

const electronics = document.querySelectorAll('[data-category="electronics"]');
console.log('Electronics products:', [...electronics].map(p => p.dataset.id));

// ===== Part 5: Tab Interface =====

// 12. Implement the tab functionality using data attributes:
// - When a tab is clicked, get its data-tab value
// - Hide all tab content (remove 'active' class)
// - Show the matching content (where data-content matches data-tab)
// - Update tab active states
// Your code here:

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector(`[data-content="${tabId}"]`).classList.add('active');
    });
});

// ===== Part 6: Links Management =====

const links = document.querySelectorAll('#link-list a');

// 13. Add target="_blank" to all external links (those starting with http)
// Your code here:

links.forEach(link => {
    const href = link.getAttribute('href');
    if (href.startsWith('http')) {
        link.setAttribute('target', '_blank');
    }
});

// 14. When "Open External in New Tab" is clicked, add target="_blank" and 
// rel="noopener noreferrer" to all external links
// Your code here:

document.getElementById('open-external-btn').addEventListener('click', () => {
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('http')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// 15. Add a download attribute to a specific link
// Your code here:

document.getElementById('add-download-btn').addEventListener('click', () => {
    const firstLink = document.querySelector('#link-list a');
    firstLink.setAttribute('download', 'homepage.html');
});

// ===== BONUS Challenges =====

// 16. Create a function that copies all data attributes from one element to another
// function copyDataAttributes(source, target) { ... }
// Your code here:

function copyDataAttributes(source, target) {
    Object.keys(source.dataset).forEach(key => {
        target.dataset[key] = source.dataset[key];
    });
}


// 17. Create a tooltip system using data-tooltip attribute
// When hovering over elements with data-tooltip, show the tooltip text
// Your code here:

function setupTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.style.position = 'relative';
        
        element.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = element.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                white-space: nowrap;
                z-index: 1000;
            `;
            element.appendChild(tooltip);
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = element.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
}

// 18. Create a function that logs all attributes of an element
// function logAllAttributes(element) { ... }
// Your code here:

function logAllAttributes(element) {
    console.log('Attributes for:', element);
    [...element.attributes].forEach(attr => {
        console.log(`  ${attr.name}: ${attr.value}`);
    });
}

logAllAttributes(testLink);

console.log('All attribute exercises completed!');