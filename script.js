function goBack() {
    window.location.href = 'index.html'; // Redirects to index.html
}

function copyText() {
    // Get the text from the element with the class 'pix-code'
    const pixCodeText = document.querySelector('.pix-code').textContent;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(pixCodeText)
        .then(() => {
            // On successful copying, show the success message
            const messageDiv = document.getElementById('message');
            messageDiv.textContent = 'código copiado ✓';
            messageDiv.style.visibility = 'visible'; // Make it visible
        })
        .catch(err => {
            // Log an error message if copying fails
            console.error('Erro na cópia do código:', err);
        });
}

document.getElementById('myButton').addEventListener('click', copyText);
