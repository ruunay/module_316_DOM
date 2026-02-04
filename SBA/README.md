#SBA 316: Document Object Model - Album Tracker

## Project Description
This project is a single-page web application designed to manage a digital collection of music albums. It demonstrates the ability to bridge HTML and JavaScript by using the Document Object Model (DOM) to create, modify, and delete elements dynamically in response to user interaction.

## Key Features
* **Dynamic DOM Manipulation:** Uses createElement and appendChild to add new album entries to the page without a browser refresh.

* **Event-Driven Programming:** Implements multiple event listeners to handle form submissions and user-triggered deletions.
* **Form Validation:** Combines HTML5 validation attributes with JavaScript event-based logic to ensure all entries contain valid data.
* **DOM Traversal:** Navigates the DOM tree using parent-child-sibling relationships to identify and remove specific list items.
* **BOM Integration:** Utilizes Browser Object Model methods to provide feedback and interact with the browser environment.

## Technologies Used
* HTML5
* CSS3
* JavaScript (ES6)
* Whisk Labs.google

## How to Run
1. Clone this repository to your local machine.
2. Open index.html in any modern web browser.
3. Add an album name and artist to the form and click "Add to List."

##Reflection
* **Planning:** Mapping out the DOM tree structure beforehand helped in selecting the correct parent and child elements for manipulation.
* **Challenges:** Implementing the DocumentFragment interface to efficiently handle multiple updates was the most technical part of the project.
* **Future Improvements:** I would eventually add a search filter to allow users to quickly find specific artists within their growing collection.