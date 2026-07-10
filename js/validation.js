/* =========================================
   validation.js — Booking Form Validation
   Interstellar Agency
   Strictly NO HTML5 validation attributes.
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('booking-form');
    if (!form) return; // Not on the booking page

    const bookingCard = document.getElementById('booking-card');

    /* -----------------------------------------
       FIELD REFERENCES
    ----------------------------------------- */
    const fields = {
        name: {
            input: document.getElementById('traveler-name'),
            error: document.getElementById('error-name'),
            group: document.getElementById('field-name'),
        },
        email: {
            input: document.getElementById('contact-email'),
            error: document.getElementById('error-email'),
            group: document.getElementById('field-email'),
        },
        spacecraft: {
            input: document.getElementById('spacecraft'),
            error: document.getElementById('error-spacecraft'),
            group: document.getElementById('field-spacecraft'),
        },
        travelClass: {
            // Radio group — we check the whole set
            inputs: document.querySelectorAll('input[name="travel-class"]'),
            error: document.getElementById('error-class'),
            group: document.getElementById('field-class'),
        },
    };

    /* -----------------------------------------
       VALIDATION HELPERS
    ----------------------------------------- */

    /**
     * Show error message for a field group.
     */
    function showError(field) {
        if (field.error) field.error.classList.add('visible');
        if (field.group) field.group.classList.add('has-error');
    }

    /**
     * Clear error state for a field group.
     */
    function clearError(field) {
        if (field.error) field.error.classList.remove('visible');
        if (field.group) field.group.classList.remove('has-error');
    }

    /**
     * Validate the traveler name — must not be empty and at least 2 chars.
     */
    function validateName() {
        const val = fields.name.input.value.trim();
        if (val.length < 2) {
            showError(fields.name);
            return false;
        }
        clearError(fields.name);
        return true;
    }

    /**
     * Validate the email — must contain '@' and a dot after '@'.
     * Pure JS — no HTML5 pattern attribute.
     */
    function validateEmail() {
        const val = fields.email.input.value.trim();

        // Must have at least one character before @
        const atIndex = val.indexOf('@');
        if (atIndex < 1) {
            showError(fields.email);
            return false;
        }

        // Must have a dot after the @ symbol (and not at the very end)
        const afterAt = val.slice(atIndex + 1);
        const dotIndex = afterAt.indexOf('.');
        if (dotIndex < 1 || dotIndex === afterAt.length - 1) {
            showError(fields.email);
            return false;
        }

        clearError(fields.email);
        return true;
    }

    /**
     * Validate spacecraft selection — must not be the default empty value.
     */
    function validateSpacecraft() {
        const val = fields.spacecraft.input.value;
        if (!val || val === '') {
            showError(fields.spacecraft);
            return false;
        }
        clearError(fields.spacecraft);
        return true;
    }

    /**
     * Validate travel class — at least one radio must be checked.
     */
    function validateTravelClass() {
        let checked = false;
        fields.travelClass.inputs.forEach(radio => {
            if (radio.checked) checked = true;
        });

        if (!checked) {
            showError(fields.travelClass);
            return false;
        }
        clearError(fields.travelClass);
        return true;
    }

    /* -----------------------------------------
       LIVE VALIDATION (on blur / change)
    ----------------------------------------- */
    fields.name.input.addEventListener('blur', validateName);
    fields.email.input.addEventListener('blur', validateEmail);
    fields.spacecraft.input.addEventListener('change', validateSpacecraft);
    fields.travelClass.inputs.forEach(radio => {
        radio.addEventListener('change', validateTravelClass);
    });

    /* -----------------------------------------
       SUBMIT HANDLER
    ----------------------------------------- */
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Always prevent default submission

        // Run all validations
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSpacecraftValid = validateSpacecraft();
        const isClassValid = validateTravelClass();

        if (!isNameValid || !isEmailValid || !isSpacecraftValid || !isClassValid) {
            // Scroll to the first error
            const firstError = document.querySelector('.form-group.has-error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // --- All validations passed ---

        // Gather add-ons for the success message
        const addonLabels = [];
        document.querySelectorAll('input[name="addons"]:checked').forEach(cb => {
            const label = cb.closest('.checkbox-label');
            if (label) addonLabels.push(label.textContent.trim());
        });

        const travelerName = fields.name.input.value.trim();
        const selectedClass = document.querySelector('input[name="travel-class"]:checked');
        const classLabel = selectedClass ? selectedClass.closest('.radio-label').textContent.trim() : 'Standard';

        // Build success message HTML
        const successHTML = `
            <div class="success-message">
                <h2>&#9733; Journey Booked Successfully</h2>
                <p>
                    Your inquiry has been received, <strong>${travelerName}</strong>.
                    A confirmation packet will be transmitted to your contact address within
                    24 standard hours.
                </p>
                <p>
                    <strong>Class:</strong> ${classLabel}
                    ${addonLabels.length ? `<br><strong>Add-ons:</strong> ${addonLabels.join(', ')}` : ''}
                </p>
                <p style="margin-top: 24px; font-style: italic; color: var(--accent-teal);">
                    The stars await. Safe travels.
                </p>
            </div>
        `;

        // Replace the form with the success message
        bookingCard.innerHTML = successHTML;

        // Scroll to the top of the message
        bookingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

});