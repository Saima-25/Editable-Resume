// Get elements
var resumeForm = document.getElementById('resume-form');
var generateResumeButton = document.getElementById('generate-resume-button');
var editResumeButton = document.getElementById('edit-resume-button');
var resumeOutput = document.getElementById('resume-output');
// Function to generate resume
var generateResume = function () {
    var resumeData = {
        fullName: document.getElementById('Sname').value,
        fatherName: document.getElementById('LName').value,
        gender: document.querySelector('input[name="Gender"]:checked').value,
        cnic: document.getElementById('numeric').value,
        nationality: document.getElementById('roman').value,
        address: document.getElementById('address').value,
        education: document.getElementById('education').value,
        experience: document.getElementById('Experience').value,
        skills: document.getElementById('skill').value,
    };
    // Generate resume HTML
    var resumeHtml = "\n    <h2>Resume</h2>\n    <p><strong>Full Name:</strong> ".concat(resumeData.fullName, "</p>\n    <p><strong>Father Name:</strong> ").concat(resumeData.fatherName, "</p>\n    <p><strong>Gender:</strong> ").concat(resumeData.gender, "</p>\n    <p><strong>CNIC:</strong> ").concat(resumeData.cnic, "</p>\n    <p><strong>Nationality:</strong> ").concat(resumeData.nationality, "</p>\n    <p><strong>Address:</strong> ").concat(resumeData.address, "</p>\n    <p><strong>Education:</strong> ").concat(resumeData.education, "</p>\n    <p><strong>Experience:</strong> ").concat(resumeData.experience, "</p>\n    <p><strong>Skills:</strong> ").concat(resumeData.skills, "</p>\n  ");
    // Display resume
    resumeOutput.innerHTML = resumeHtml;
};
// Function to edit resume
var editResume = function () {
    // Reset form fields
    resumeForm.reset();
    // Hide resume output
    resumeOutput.innerHTML = '';
};
// Add event listeners
generateResumeButton.addEventListener('click', generateResume);
editResumeButton.addEventListener('click', editResume);
