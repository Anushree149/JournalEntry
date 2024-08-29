// script.js
document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-button');
    const journalText = document.getElementById('journal-text');
    const entriesContainer = document.getElementById('entries-container');

    // Load saved entries from localStorage
    loadEntries();

    saveButton.addEventListener('click', function() {
        const text = journalText.value.trim();
        if (text !== '') {
            saveEntry(text);
            journalText.value = '';
        }
    });

    function saveEntry(text) {
        // Create a new entry element
        const entry = document.createElement('div');
        entry.classList.add('entry');
        entry.textContent = text;

        // Add the entry to the container
        entriesContainer.appendChild(entry);

        // Save entry to localStorage
        saveToLocalStorage(text);
    }

    function saveToLocalStorage(text) {
        let entries = localStorage.getItem('journalEntries');
        entries = entries ? JSON.parse(entries) : [];
        entries.push(text);
        localStorage.setItem('journalEntries', JSON.stringify(entries));
    }

    function loadEntries() {
        let entries = localStorage.getItem('journalEntries');
        if (entries) {
            entries = JSON.parse(entries);
            entries.forEach(entryText => {
                const entry = document.createElement('div');
                entry.classList.add('entry');
                entry.textContent = entryText;
                entriesContainer.appendChild(entry);
            });
        }
    }
});
