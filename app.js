// Simulate architectural suggestions (dummy data)
const mockSuggestions = [
    "Modern Single-Family Home",
    "Traditional Townhouse",
    "Contemporary Apartment Building"
];

// Function to update architectural suggestions
function updateSuggestions() {
    const suggestionsContainer = document.getElementById("suggestions-container");
    suggestionsContainer.innerHTML = "";
    mockSuggestions.forEach((suggestion, index) => {
        const suggestionItem = document.createElement("div");
        suggestionItem.classList.add("suggestion-item");
        suggestionItem.innerText = `${index + 1}. ${suggestion}`;
        suggestionsContainer.appendChild(suggestionItem);
    });
}

// Event listener for the Upload button
const uploadButton = document.getElementById("upload-button");
uploadButton.addEventListener("click", () => {
    // Simulate loading PDF and processing data
    setTimeout(() => {
        // Display mock architectural suggestions
        updateSuggestions();
    }, 2000); // Simulate a 2-second delay for processing
});
