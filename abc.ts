
const fullNameInput = document.getElementById('fullName') as HTMLInputElement;
const fatherNameInput = document.getElementById('fatherName') as HTMLInputElement;
const genderRadios = document.querySelectorAll('input[name="gender"]');
const cnicInput = document.getElementById('cnic') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const addressInput = document.getElementById('address') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLInputElement;
const skillInput = document.getElementById('skill') as HTMLInputElement;
const generateResumeButton = document.getElementById('generate-resume-button') as HTMLButtonElement;
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

// Interface for Resume
interface Resume {
  fullName: string;
  fatherName: string;
  gender: string;
  cnic: string;
  email: string;
  address: string;
  education: string;
  experience: string;
  skill: string;
}

// Function to generate resume
function generateResume(): void {
  const resume: Resume = {
    fullName: fullNameInput.value,
    fatherName: fatherNameInput.value,
    gender: (genderRadios[0] as HTMLInputElement).checked ? 'Male' : 'Female',
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
  const resumeHTML = `
    <h2>Resume</h2>
    <hr />
    <p><strong>Full Name:</strong> ${resume.fullName}</p>
    <p><strong>Father's Name:</strong> ${resume.fatherName}</p>
    <p><strong>Gender:</strong> ${resume.gender}</p>
    <p><strong>CNIC Number:</strong> ${resume.cnic}</p>
    <p><strong>Email:</strong> ${resume.email}</p>
    <p><strong>Address:</strong> ${resume.address}</p>
    <p><strong>Education:</strong> ${resume.education}</p>
    <p><strong>Experience:</strong> ${resume.experience}</p>
    <p><strong>Skills:</strong> ${resume.skill}</p>
  `;

  resumeOutput.innerHTML = resumeHTML;
}

// Add event listener to generate resume button
generateResumeButton.addEventListener('click', generateResume);