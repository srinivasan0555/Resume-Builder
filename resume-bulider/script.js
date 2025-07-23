function generatePreview() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value.split('•').map(s => s.trim()).filter(Boolean);
  const projects = document.getElementById('projects').value.split('•').map(p => p.trim()).filter(Boolean);
  const template = document.getElementById('template').value;

  document.getElementById('resume-preview').className = template;

  document.getElementById('preview-name').textContent = name || "Your Name";
  document.getElementById('preview-email').textContent = email || "youremail@example.com";
  document.getElementById('preview-education').textContent = education;

  const skillsList = document.getElementById('preview-skills');
  skillsList.innerHTML = '';
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  const projectsList = document.getElementById('preview-projects');
  projectsList.innerHTML = '';
  projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project;
    projectsList.appendChild(li);
  });

  // Photo Preview
  const file = document.getElementById('photo').files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('profile-pic').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function downloadResume() {
  const element = document.getElementById('resume-preview');
  const opt = {
    margin: 0.5,
    filename: 'My_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
}

function resetForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('education').value = '';
  document.getElementById('skills').value = '';
  document.getElementById('projects').value = '';
  document.getElementById('photo').value = '';

  document.getElementById('preview-name').textContent = 'Your Name';
  document.getElementById('preview-email').textContent = 'youremail@example.com';
  document.getElementById('preview-education').textContent = '';
  document.getElementById('preview-skills').innerHTML = '';
  document.getElementById('preview-projects').innerHTML = '';
  document.getElementById('profile-pic').src = '';
}