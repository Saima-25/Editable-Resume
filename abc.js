var fullNameInput = document.getElementById('fullName');
var fatherNameInput = document.getElementById('fatherName');
var genderRadios = document.querySelectorAll('input[name="gender"]');
var cnicInput = document.getElementById('cnic');
var emailInput = document.getElementById('email');
var addressInput = document.getElementById('address');
var educationInput = document.getElementById('education');
var experienceInput = document.getElementById('experience');
var skillInput = document.getElementById('skill');
var generateResumeButton = document.getElementById('generate-resume-button');
var resumeOutput = document.getElementById('resume-output');
// Function to generate resume
function generateResume() {
    var resume = {
        fullName: fullNameInput.value,
        fatherName: fatherNameInput.value,
        gender: genderRadios[0].checked ? 'Male' : 'Female',
        cnic: cnicInput.value,
        email: emailInput.value,
        address: addressInput.value,
        education: educationInput.value,
        experience: experienceInput.value,
        skill: skillInput.value,
    };
    // Clear previous resume
    resumeOutput.innerHTML = '';
    // Generate new resume
    var resumeHTML = "\n    <h2>Resume</h2>\n    <hr />\n    <p><strong>Full Name:</strong> ".concat(resume.fullName, "</p>\n    <p><strong>Father's Name:</strong> ").concat(resume.fatherName, "</p>\n    <p><strong>Gender:</strong> ").concat(resume.gender, "</p>\n    <p><strong>CNIC Number:</strong> ").concat(resume.cnic, "</p>\n    <p><strong>Email:</strong> ").concat(resume.email, "</p>\n    <p><strong>Address:</strong> ").concat(resume.address, "</p>\n    <p><strong>Education:</strong> ").concat(resume.education, "</p>\n    <p><strong>Experience:</strong> ").concat(resume.experience, "</p>\n    <p><strong>Skills:</strong> ").concat(resume.skill, "</p>\n  ");
    resumeOutput.innerHTML = resumeHTML;
}
// Add event listener to generate resume button
generateResumeButton.addEventListener('click', generateResume);
