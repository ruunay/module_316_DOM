/**
 * SBA 316: Vinyl Vault - Logic
 * Adapted from Task Manager Solution
 */

let albums = [];

const albumForm = document.getElementById('album-form');
const albumList = document.getElementById('album-list');
const albumTemplate = document.getElementById('album-template');
const albumInput = document.getElementById('album-input');
const artistInput = document.getElementById('artist-input');
const widthDisplay = document.getElementById('window-width');
const errorMessage = document.getElementById('error-message');

function init() {
    setupEventListeners();
    updateWidthDisplay();
    console.log('Vinyl Vault initialized!');
}

function setupEventListeners() {

    albumForm.addEventListener('submit', handleSubmit);
    albumList.addEventListener('click', handleListClick);
    window.addEventListener('resize', updateWidthDisplay);
}

function handleSubmit(e) {
    e.preventDefault();
    
    if (albumInput.value.trim().length < 2 || artistInput.value.trim() === "") {
        showError("Please enter a valid Album and Artist.");
        return;
    }

    const newAlbum = {
        id: Date.now(),
        title: albumInput.value.trim(),
        artist: artistInput.value.trim()
    };

    addAlbum(newAlbum);
    albumForm.reset();
    hideError();
}

function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.style.display = 'block';
}

function hideError() {
    errorMessage.style.display = 'none';
}

// ===== DOM Manipulation (CRUD) =====
function addAlbum(album) {
    // Clone Template (Requirement)
    const clone = albumTemplate.content.cloneNode(true);
    const li = clone.querySelector('.album-card');
    const infoSpan = clone.querySelector('.info');

    li.dataset.id = album.id;
    infoSpan.textContent = `${album.title} by ${album.artist}`;
    albumList.appendChild(clone);
}

function handleListClick(e) {
    if (e.target.classList.contains('delete-btn')) {
        const itemToRemove = e.target.closest('.album-card');
        
        if (window.confirm("Delete this record from your vault?")) {
            itemToRemove.remove();
        }
    }
}

function updateWidthDisplay() {

widthDisplay.textContent = `// ${window.innerWidth} bpm`;
// 
}

document.addEventListener('DOMContentLoaded', init);