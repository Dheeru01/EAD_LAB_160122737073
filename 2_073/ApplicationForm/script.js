document.getElementById("applicationForm").addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Input values
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector('input[name="Gender"]:checked');
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const resume = document.getElementById("resume").files[0];

    // Validation checks
    if (!firstname) {
        alert("Please enter your first name.");
        return;
    }

    if (!lastname) {
        alert("Please enter your last name.");
        return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    if (!address) {
        alert("Please enter your address.");
        return;
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (!dob) {
        alert("Please select your date of birth.");
        return;
    }

    if (!resume) {
        alert("Please upload your resume in PDF format.");
        return;
    }

    if (resume.type !== "application/pdf") {
        alert("Only PDF files are allowed for resume upload.");
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    // Optionally, submit the form data to the server
    // document.getElementById("applicationForm").submit();
});
