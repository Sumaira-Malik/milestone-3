// Function to generate the resume from form inputs
function generateResume(): void {
    // Get user input values
    const name = (document.getElementById('name') as HTMLInputElement).value || 'N/A';
    const email = (document.getElementById('email') as HTMLInputElement).value || 'N/A';
    const phone = (document.getElementById('phone') as HTMLInputElement).value || 'N/A';
    const education = (document.getElementById('education') as HTMLInputElement).value || 'N/A';
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value || 'N/A';
    const skills = (document.getElementById('skills') as HTMLInputElement).value || 'N/A';

    // Set values in editable resume sections
    (document.getElementById('edit-name') as HTMLElement).innerText = sanitizeHTML(name);
    (document.getElementById('edit-email') as HTMLElement).innerText = sanitizeHTML(email);
    (document.getElementById('edit-phone') as HTMLElement).innerText = sanitizeHTML(phone);
    (document.getElementById('edit-education') as HTMLElement).innerText = sanitizeHTML(education);
    (document.getElementById('edit-experience') as HTMLElement).innerText = sanitizeHTML(experience);
    (document.getElementById('edit-skills') as HTMLElement).innerText = sanitizeHTML(skills);
}

// Optional: Basic input sanitization to prevent XSS
function sanitizeHTML(input: string): string {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Update form fields based on inline editing
function setupEditableListeners() {
    (document.getElementById('edit-name') as HTMLElement).addEventListener('input', function() {
        (document.getElementById('name') as HTMLInputElement).value = (this as HTMLElement).innerText;
    });

    (document.getElementById('edit-email') as HTMLElement).addEventListener('input', function() {
        (document.getElementById('email') as HTMLInputElement).value = (this as HTMLElement).innerText;
    });

    (document.getElementById('edit-phone') as HTMLElement).addEventListener('input', function() {
        (document.getElementById('phone') as HTMLInputElement).value = (this as HTMLElement).innerText;
    });

    (document.getElementById('edit-education') as HTMLElement).addEventListener('input', function() {
        (document.getElementById('education') as HTMLInputElement).value = (this as HTMLElement).innerText;
    });

    (document.getElementById('edit-experience') as HTMLElement).addEventListener('input', function() {
        (document.getElementById('experience') as HTMLTextAreaElement).value = (this as HTMLElement).innerText;
    });

    (document.getElementById('edit-skills') as HTMLElement).addEventListener('input', function() {
        (document.getElementById('skills') as HTMLInputElement).value = (this as HTMLElement).innerText;
    });
}

// Initialize listeners on page load
document.addEventListener('DOMContentLoaded', setupEditableListeners);
