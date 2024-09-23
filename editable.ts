
// Get elements
const resumeForm: HTMLFormElement = document.getElementById('resume-form') as HTMLFormElement;
const generateResumeButton: HTMLButtonElement = document.getElementById('generate-resume-button') as HTMLButtonElement;
const editResumeButton: HTMLButtonElement = document.getElementById('edit-resume-button') as HTMLButtonElement;
const resumeOutput: HTMLDivElement = document.getElementById('resume-output') as HTMLDivElement;

// Interface for Resume Data
interface ResumeData {
  fullName: string;
  fatherName: string;
  gender: string;
  cnic: string;
  nationality: string;
  address: string;
  education: string;
  experience: string;
  skills: string;
}

// Function to generate resume
const generateResume = () => {
  const resumeData: ResumeData = {
    fullName: (document.getElementById('Sname') as HTMLInputElement).value,
    fatherName: (document.getElementById('LName') as HTMLInputElement).value,
    gender: (document.querySelector('input[name="Gender"]:checked') as HTMLInputElement).value,
    cnic: (document.getElementById('numeric') as HTMLInputElement).value,
    nationality: (document.getElementById('roman') as HTMLInputElement).value,
    address: (document.getElementById('address') as HTMLInputElement).value,
    education: (document.getElementById('education') as HTMLInputElement).value,
    experience: (document.getElementById('Experience') as HTMLInputElement).value,
    skills: (document.getElementById('skill') as HTMLInputElement).value,
  };

  // Generate resume HTML
  const resumeHtml = `
    <h2>Resume</h2>
    <p><strong>Full Name:</strong> ${resumeData.fullName}</p>
    <p><strong>Father Name:</strong> ${resumeData.fatherName}</p>
    <p><strong>Gender:</strong> ${resumeData.gender}</p>
    <p><strong>CNIC:</strong> ${resumeData.cnic}</p>
    <p><strong>Nationality:</strong> ${resumeData.nationality}</p>
    <p><strong>Address:</strong> ${resumeData.address}</p>
    <p><strong>Education:</strong> ${resumeData.education}</p>
    <p><strong>Experience:</strong> ${resumeData.experience}</p>
    <p><strong>Skills:</strong> ${resumeData.skills}</p>
  `;

  // Display resume
  resumeOutput.innerHTML = resumeHtml;
};

// Function to edit resume
const editResume = () => {
  // Reset form fields
  resumeForm.reset();

  // Hide resume output
  resumeOutput.innerHTML = '';
};

// Add event listeners
generateResumeButton.addEventListener('click', generateResume);
editResumeButton.addEventListener('click', editResume);
