// Function to generate the resume from form inputs
function generateResume() {
    // Get user input values
    var name = document.getElementById('name').value || 'N/A';
    var email = document.getElementById('email').value || 'N/A';
    var phone = document.getElementById('phone').value || 'N/A';
    var education = document.getElementById('education').value || 'N/A';
    var experience = document.getElementById('experience').value || 'N/A';
    var skills = document.getElementById('skills').value || 'N/A';
    // Set values in editable resume sections
    document.getElementById('edit-name').innerText = sanitizeHTML(name);
    document.getElementById('edit-email').innerText = sanitizeHTML(email);
    document.getElementById('edit-phone').innerText = sanitizeHTML(phone);
    document.getElementById('edit-education').innerText = sanitizeHTML(education);
    document.getElementById('edit-experience').innerText = sanitizeHTML(experience);
    document.getElementById('edit-skills').innerText = sanitizeHTML(skills);
}
// Optional: Basic input sanitization to prevent XSS
function sanitizeHTML(input) {
    var div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
// Update form fields based on inline editing
function setupEditableListeners() {
    document.getElementById('edit-name').addEventListener('input', function () {
        document.getElementById('name').value = this.innerText;
    });
    document.getElementById('edit-email').addEventListener('input', function () {
        document.getElementById('email').value = this.innerText;
    });
    document.getElementById('edit-phone').addEventListener('input', function () {
        document.getElementById('phone').value = this.innerText;
    });
    document.getElementById('edit-education').addEventListener('input', function () {
        document.getElementById('education').value = this.innerText;
    });
    document.getElementById('edit-experience').addEventListener('input', function () {
        document.getElementById('experience').value = this.innerText;
    });
    document.getElementById('edit-skills').addEventListener('input', function () {
        document.getElementById('skills').value = this.innerText;
    });
}
// Initialize listeners on page load
document.addEventListener('DOMContentLoaded', setupEditableListeners);
