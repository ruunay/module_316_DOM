// Exercise 02: Selecting Elements
// =================================
// Complete each task by selecting the specified element(s).
// Log your results to the console to verify.

// ===== Part 1: getElementById =====

// 1. Select the element with id "page-title" and store it in a variable
// Your code here:

const pageTitle = document.getElementById('page-title');

// 2. Select the element with id "main-header" and store it in a variable
// Your code here:

const mainHeader = document.getElementById('main-header');
console.log('2. Main Header:', mainHeader);

// 3. Select the contact form by its id
// Your code here:

const contactForm = document.getElementById('contact-form');
console.log('3. ContactForm:', contactForm);


// 4. Select the submit button by its id
// Your code here:

const submitBtn = document.getElementById('submit-btn');
console.log('4. Submit Button:', submitBtn);


// ===== Part 2: querySelector =====

// 5. Select the first paragraph with class "intro-text"
// Your code here:

const firstIntro = document.querySelector('.intro-text');
console.log('5. First Intro Text:', firstIntro);

// 6. Select the navigation element using its class
// Your code here:

const navigation = document.querySelector('.navigation');
console.log('6. Navigation:', navigation);

// 7. Select the h3 element that also has class "special"
// Your code here:

const specialTitle = document.querySelector('h3.special');
console.log('7. Special Title:', specialTitle);

// 8. Select the first card using its data attribute
// Hint: use [data-id="1"]
// Your code here:

const firstCard = document.querySelector('[data-id="1"]');
console.log('8. First Card:', firstCard);

// 9. Select the email input using an attribute selector
// Your code here:

const emailInput = document.querySelector('input[type="email"]');
console.log('9. Email Input:', emailInput);

// ===== Part 3: querySelectorAll =====

// 10. Select ALL nav links and store them in a variable
// Your code here:

const navLinks = document.querySelectorAll('.nav-link');
console.log('10. Nav Links:', navLinks);

// 11. Select ALL cards on the page
// Your code here:

const allCards = document.querySelectorAll('.card');
console.log('11. All Cards:', allCards);

// 12. Select ALL paragraphs with class "intro-text"
// Your code here:

const introTexts = document.querySelectorAll('.intro-text');
console.log('12. Intro Texts:', introTexts);

// 13. Select ALL input elements in the form
// Your code here:

const formInputs = document.querySelectorAll('#contact-form input');
console.log('13. Form Inputs:', formInputs);

// 14. Select ALL h2 AND h3 elements on the page
// Your code here:

const headings = document.querySelectorAll('h2, h3');
console.log('14. H2 and H3 elements:', headings);


// ===== Part 4: Caching and Using Selections =====

// 15. Cache the page title element, then log its text content
// Your code here:

const cachedTitle = document.getElementById('page-title');
console.log('15. Title text:', cachedTitle.textContent);

// 16. Cache all card titles, then log how many there are
// Your code here:

const cardTitles = document.querySelectorAll('.card-title');
console.log('16. Number of card titles:', cardTitles.length);


// 17. Select the footer and log its innerHTML
// Your code here:

const footer = document.getElementById('main-footer');
console.log('17. Footer HTML:', footer.innerHTML);



// ===== BONUS Challenges =====

// 18. Select the second nav-link (not the first, not all - just the second)
// Hint: Look up :nth-child() or :nth-of-type()
// Your code here:

const secondLink = document.querySelector('.nav-link:nth-child(2)');
console.log('18. Second Nav Link:', secondLink);

// 19. Select all cards that come after the first one
// Hint: Look up :not(:first-child)
// Your code here:

const otherCards = document.querySelectorAll('.card:not(:first-child)');
console.log('19. Cards after first:', otherCards);

// 20. Convert a NodeList to an array and log it
// Your code here:

const cardsArray = Array.from(document.querySelectorAll('.card'));
console.log('20. Cards as array:', cardsArray);
