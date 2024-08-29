// script.js
document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-button');
    const journalText = document.getElementById('journal-text');
    const entriesContainer = document.getElementById('entries-container');

    // Predefined journal entries
    const predefinedEntries = [
        "Today was a wonderful day! I went for a walk in the park and enjoyed the fresh air.",
        "Started a new book today. It's a mystery novel and I'm already hooked!",
        "Had a productive workday, managed to finish all my tasks ahead of time.",
        "Spent the evening cooking a new recipe, and it turned out delicious!"
    ];

    // Load predefined entries
    predefinedEntries.forEach(entryText => {
        createEntry(entryText);
    });

    saveButton.addEventListener('click', function() {
        const text = journalText.value.trim();
        if (text !== '') {
            createEntry(text);
            journalText.value = '';
        }
    });

    function createEntry(text) {
        const entry = document.createElement('div');
        entry.classList.add('entry');
        entry.textContent = text;
        entriesContainer.appendChild(entry);
    }
});
