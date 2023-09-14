// Event listener for the Upload button
const uploadButton = document.getElementById("upload-button");
const pdfImageFileInput = document.getElementById("pdf-image-file-input");
const planPreviewContainer = document.getElementById("plan-preview-container");

uploadButton.addEventListener("click", () => {
    const file = pdfImageFileInput.files[0]; // Get the selected file

    if (file) {
        // A file has been selected

        if (file.type.startsWith("image/")) {
            // It's an image file, display it as the Bebauungsplan
            const imageURL = URL.createObjectURL(file);
            planPreviewContainer.innerHTML = `<img src="${imageURL}" alt="Bebauungsplan">`;
        } else if (file.type === "application/pdf") {
            // It's a PDF file, you can add code to process and display PDFs here
            // For example, you can use PDF.js library for rendering PDFs
            // This requires more advanced PDF handling, not covered in this example
            planPreviewContainer.innerHTML = "PDF Bebauungsplan (Processing PDF)";
        }
    } else {
        // No file selected or selection canceled
        planPreviewContainer.innerHTML = ""; // Clear the preview
    }
});
