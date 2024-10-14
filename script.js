// Calculate dynamic years
const startYear = 2018;
const currentYear = new Date().getFullYear();
const yearsActive = currentYear - startYear;
document.getElementById("yearsCount").innerText = yearsActive;

// for collsape

document.querySelectorAll('.navbar-nav a').forEach(link => {
  link.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();  // Toggle to close the navbar after selection
      }
  });
});

// Update the feature section with selected student data
let students = [];
let startIndex = 0;
const fetchStudentData = async () => {
  try {
    const response = await fetch("students.json");
    students = await response.json();
    students.reverse(); // Reverse the array here
    initializeCarousel();
    updateMainStory(students[0]);
  } catch (error) {
    console.error("Error fetching student data:", error);
  }
};

// Update the main featured story
const updateMainStory = (student) => {
  document.getElementById("mainImage").src = student.galleryImage; // Use galleryImage here
  document.getElementById("studentName").textContent = student.name;
  document.getElementById("studentCompany").textContent = student.company;
  document.getElementById("studentLinkedin").href = student.linkedin;
};

// Initialize the carousel
const initializeCarousel = () => {
  const thumbnails = document.getElementById("thumbnails");
  thumbnails.innerHTML = "";
  const slice = students.slice(startIndex, startIndex.length);

  slice.forEach((student) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = student.image; // Use image for thumbnails
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
  if (startIndex + 7 < students.length) { // Changed to +7 to match the slice size
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









function playVideo(element) {
  var videoContainer = element.closest('.video-container');
  var iframe = videoContainer.querySelector('iframe');
  var youtubeIcon = videoContainer.querySelector('.youtube-icon');
  var videoThumbnail = videoContainer.querySelector('.videoThumbnail');

  // Hide thumbnail and icon
  youtubeIcon.style.display = 'none';
  videoThumbnail.style.display = 'none';

  // Show iframe and play video
  iframe.style.display = 'block';
  var iframeSrc = iframe.src;
  iframe.src = iframeSrc + "&autoplay=1"; // Autoplay the video
}

const videoRow = document.getElementById('videoRow');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const videosPerPage = window.innerWidth <= 768 ? 1 : 3;
const totalVideos = document.querySelectorAll('.video-container').length;

function updateVideoPosition() {
  const translateX = -(currentIndex * 100 / videosPerPage);
  console.log("Updating position: ", translateX); // Debugging
  videoRow.style.transform = `translateX(${translateX}%)`;
}

nextBtn.addEventListener('click', function() {
  if (currentIndex < totalVideos - videosPerPage) {
    currentIndex++;
    console.log("Next button clicked, currentIndex: ", currentIndex); // Debugging
    updateVideoPosition();
  } else {
    console.log("Reached the end of videos"); // Debugging
  }
});

prevBtn.addEventListener('click', function() {
  if (currentIndex > 0) {
    currentIndex--;
    console.log("Prev button clicked, currentIndex: ", currentIndex); // Debugging
    updateVideoPosition();
  }
});

window.addEventListener('resize', function() {
  currentIndex = 0;
  updateVideoPosition();
});


//for Rahul Sir Video 
