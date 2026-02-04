// Exercise 03: DOM Traversal
// ===========================
// Use DOM traversal methods to navigate between elements.
// Avoid using getElementById or querySelector for these exercises
// (except for the initial element selection where specified).

// Get a starting element to work from
const activeNavItem = document.querySelector('.nav-item.active');
const secondCard = document.getElementById('card-2');
const firstActionBtn = document.querySelector('.action-btn');

// ===== Part 1: Parent Navigation =====

// 1. Starting from activeNavItem, get its parent element (the <ul>)
// Your code here:

const parentUl = activeNavItem.parentElement;
console.log('1. Parent UL:', parentUl);


// 2. From the activeNavItem, navigate up to find the <nav> element
// Hint: Use parentElement twice, or use closest()
// Your code here:

const navElement = activeNavItem.parentElement.parentElement;
console.log('2. Nav Element:', navElement);

// 3. From firstActionBtn, find the closest .card ancestor
// Your code here:

const closestCard = firstActionBtn.closest('.card');
console.log('3. Closest Card:', closestCard);

// 4. From secondCard, navigate to its parent (main#content)
// Your code here:

const mainContent = secondCard.parentElement;
console.log('4. Main Content:', mainContent);


// ===== Part 2: Child Navigation =====

// 5. Get the nav-list element and find all its child elements
// Your code here:
const navList = document.getElementById('nav-list');
console.log('5. Nav Children:', navList.children);

// 6. Get the first child element of the navList
// Your code here:

const firstNavChild = navList.lastElementChild;
console.log('6. First Nav Child:', lastNavChild);

// 7. Get the last child element of the navList
// Your code here:

const lastNavChild = navList.lastElementChild;
console.log('7. Last Nav Child:', lastNavChild);

// 8. Get all children of secondCard
// Your code here:

const cardChildren = secondCard.children;
console.log('8. Card Children:', cardChildren);

// 9. Get the first element child of secondCard (the h2)
// Your code here:

const cardHeading = secondCard.firstElementChild;
console.log('9. Card Heading:', cardHeading);

// ===== Part 3: Sibling Navigation =====

// 10. From activeNavItem ("About"), get the previous sibling ("Home")
// Your code here:

const prevSibling = activeNavItem.previousElementSibling;
console.log('10. Previous Sibling:', prevSibling);

// 11. From activeNavItem ("About"), get the next sibling ("Services")
// Your code here:

const nextSibling = activeNavItem.nextElementSibling;
console.log('11. Next Sibling:', nextSibling);

// 12. From secondCard, get the previous sibling card (card-1)
// Your code here:

const prevCard = secondCard.previousElementSibling;
console.log('12. Previous Card:', prevCard);

// 13. From secondCard, get the next sibling card (card-3)
// Your code here:

const nextCard = secondCard.nextElementSibling;
console.log('13. Next Card:', nextCard);

// ===== Part 4: Combined Navigation =====

// 14. Starting from firstActionBtn, navigate to find the h2 of its card
// Hint: Go up to the card, then down to the first child
// Your code here:

const cardFromBtn = firstActionBtn.closest('.card');
const h2FromBtn = cardFromBtn.firstElementChild;
console.log('14. H2 from Button:', h2FromBtn);

// 15. Starting from secondCard, get the last nav item
// Hint: Navigate up, find header, then nav, then ul, then last child
// Your code here:

const containerFromCard = secondCard.closest('.container');
const headerFromContainer = containerFromCard.querySelector('header');
const lastNavItem = headerFromContainer.querySelector('ul').lastElementChild;
console.log('15. Last Nav Item:', lastNavItem);

// 16. Get all siblings of secondCard
// Hint: Start from parent's first child, then loop through nextElementSibling
// Your code here:

const siblings = [];
let sibling = secondCard.parentElement.firstElementChild;
while (sibling) {
    if (sibling !== secondCard) {
        siblings.push(sibling);
    }  
    sibling = sibling.nextElementSibling;
}
console.log('16. All Siblings:', siblings);


// ===== Part 5: Counting and Checking =====

// 17. Count how many child elements the main#content has
// Your code here:

const mainElement = document.getElementById('content');
const childCount = mainElement.children.length;
console.log('17. Child Count:', childCount);    

// 18. Check if secondCard has any children
// Hint: Check if children.length > 0 or use hasChildNodes()
// Your code here:

const hasChildren = secondCard.children.length > 0;


// 19. Check if activeNavItem has a previous sibling
// Your code here:

const hasPrevSibling = activeNavItem.previousElementSibling !== null;
console.log('19. Has Previous Sibling:', hasPrevSibling);

// ===== BONUS Challenges =====

// 20. Write a function that takes an element and returns all its ancestors as an array
// Your code here:

function getAncestors(element) {
    const ancestors = [];
    let current = element.parentElement;
    while (current) {
        ancestors.push(current);
        current = current.parentElement;
    }
    return ancestors;
}
console.log('20. Ancestors of activeNavItem:', getAncestors(activeNavItem));

// 21. Write a function that finds the index of an element among its siblings
// Your code here:

function getSiblingIndex(element) {
    let index = 0;
    let sibling = element.previousElementSibling;
    while (sibling) {
        index++;
        sibling = sibling.previousElementSibling;
    }
    return index;
}
console.log('21. Index of activeNavItem:', getSiblingIndex(activeNavItem));

// 22. Starting from any button, navigate to find the sidebar
// Your code here:

const sidebar = firstActionBtn.closest('.container').querySelector('#sidebar');
console.log('22. Sidebar from button:', sidebar);
