// Calculate dynamic years
const startYear = 2018;
const currentYear = new Date().getFullYear();
const yearsActive = currentYear - startYear;
document.getElementById("yearsCount").innerText = yearsActive;

// Update the feature section with selected student data
let students = [];
let startIndex = 0;
const fetchStudentData = async () => {
  try {
    const response = await fetch("students.json");
    students = await response.json();
    initializeCarousel();
    updateMainStory(students[0]);
  } catch (error) {
    console.error("Error fetching student data:", error);
  }
};

// Update the main featured story
const updateMainStory = (student) => {
  document.getElementById("mainImage").src = student.image;
  document.getElementById("studentName").textContent = student.name;
  document.getElementById("studentCompany").textContent = student.company;
  document.getElementById("studentLinkedin").href = student.linkedin;
};

// Initialize the carousel
const initializeCarousel = () => {
  const thumbnails = document.getElementById("thumbnails");
  thumbnails.innerHTML = "";
  const slice = students.slice(startIndex, startIndex + 7);

  slice.forEach((student) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = student.image;
    thumbnail.alt = student.name;
    thumbnail.classList.add("thumbnail-img", "me-2");
    thumbnail.addEventListener("click", () => updateMainStory(student));
    thumbnails.appendChild(thumbnail);
  });
};

// Show previous students in the carousel
const showPrevious = () => {
  if (startIndex > 0) {
    startIndex--;
    initializeCarousel();
  }
};

// Show next students in the carousel
const showNext = () => {
  if (startIndex + 5 < students.length) {
    startIndex++;
    initializeCarousel();
  }
};

// Event listeners for next and previous buttons
document.getElementById("prevBtn").addEventListener("click", showPrevious);
document.getElementById("nextBtn").addEventListener("click", showNext);

// Fetch data and initialize on page load
window.onload = () => {
  fetchStudentData();
};
