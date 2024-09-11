// Calculate dynamic years
const startYear = 2018;
const currentYear = new Date().getFullYear();
const yearsActive = currentYear - startYear;
document.getElementById("yearsCount").innerText = yearsActive;

// Update the feature section with selected student data

function selectStudent(imgSrc, name, details, linkedinUrl) {
  document.getElementById("featureImage").src = `Images/${imgSrc}`;
  document.getElementById("studentName").textContent = name;
  document.getElementById("studentDetails").textContent = details;
  document.getElementById("linkedinProfile").href = linkedinUrl;

  // Highlight the selected image
  const allImages = document.querySelectorAll(".student-img");
  allImages.forEach((img) => img.classList.remove("selected"));
  event.target.classList.add("selected");
}
