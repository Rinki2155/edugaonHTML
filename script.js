// Calculate dynamic years
const startYear = 2018;
const currentYear = new Date().getFullYear();
const yearsActive = currentYear - startYear;
document.getElementById("yearsCount").innerText = yearsActive;

// for collsape

document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarToggler.click(); // Toggle to close the navbar after selection
    }
  });
});

let students = [];
let startIndex = 0;

// Fetch student data
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


const updateMainStory = (student) => {
  document.getElementById("mainImage").src = student.galleryImage; // Use galleryImage here
  document.getElementById("studentName").textContent = student.name;
  document.getElementById("studentCompany").textContent = student.company;
  document.getElementById("studentLinkedin").href = student.linkedin;
};



const initializeCarousel = () => {
  const thumbnails = document.getElementById("thumbnails");
  thumbnails.innerHTML = "";
  const slice = students.slice(startIndex, startIndex.length);

  slice.forEach((student) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = student.image;
    thumbnail.alt = student.name;
    thumbnail.classList.add("thumbnail-img", "me-2");
    thumbnail.addEventListener("click", () => openModal(student));
    thumbnails.appendChild(thumbnail);
  });
};

const openModal = (student) => {
  document.getElementById("modalImage").src = student.galleryImage;
  document.getElementById("modalStudentName").textContent = student.name;
  document.getElementById("modalStudentCompany").textContent = student.company;
  document.getElementById("modalStudentLinkedin").href = student.linkedin;

  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  modal.show();
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
  if (startIndex + 7 < students.length) {
    // Changed to +7 to match the slice size
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
  var videoContainer = element.closest(".video-container");
  var iframe = videoContainer.querySelector("iframe");
  var youtubeIcon = videoContainer.querySelector(".youtube-icon");
  var videoThumbnail = videoContainer.querySelector(".videoThumbnail");

  // Hide thumbnail and icon
  youtubeIcon.style.display = "none";
  videoThumbnail.style.display = "none";

  // Show iframe and play video
  iframe.style.display = "block";
  var iframeSrc = iframe.src;
  iframe.src = iframeSrc + "&autoplay=1"; // Autoplay the video
}

const videoRow = document.getElementById("videoRow");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const videosPerPage = window.innerWidth <= 768 ? 1 : 3;
const totalVideos = document.querySelectorAll(".video-container").length;

function updateVideoPosition() {
  const translateX = -((currentIndex * 100) / videosPerPage);
  console.log("Updating position: ", translateX); // Debugging
  videoRow.style.transform = `translateX(${translateX}%)`;
}

nextBtn.addEventListener("click", function () {
  if (currentIndex < totalVideos - videosPerPage) {
    currentIndex++;
    console.log("Next button clicked, currentIndex: ", currentIndex); // Debugging
    updateVideoPosition();
  } else {
    console.log("Reached the end of videos"); // Debugging
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    console.log("Prev button clicked, currentIndex: ", currentIndex); // Debugging
    updateVideoPosition();
  }
});

window.addEventListener("resize", function () {
  currentIndex = 0;
  updateVideoPosition();
});


// for students success video
// Data array for videos, names, and company details
const testimonials = [
  {
    videoURL: "https://www.youtube.com/embed/s_tmcWFxl6I",
    name: "Abhishek Kumar",
    company: "Dreamvessels Pvt Ltd, Noida",
    studentView: "The training I received helped me pursue my dream career effectively.",
    linkdinId:"https://www.linkedin.com/in/abhishek-kumar-9926ba23b/",
  },
  {
    videoURL: "https://www.youtube.com/embed/mwdsJzMoVJM",
    name: "Nehal Babu",
    company: "Skylabs Solutions India Pvt Ltd, Noida",
    studentView: "This program guided me towards becoming a successful software engineer.",
    linkdinId:"https://www.linkedin.com/in/inehalbabu/",
  },
  {
    videoURL: "https://www.youtube.com/embed/aI-gaDrXPV4",
    name: "Ansar Ali Shah",
    company: "Skylabs Solutions India Pvt Ltd, Noida",
    studentView: "I gained valuable skills that advanced my career.",
    linkdinId:"https://www.linkedin.com/in/ansar-ali-shah-65686b222/",
  },
  {
    videoURL: "https://www.youtube.com/embed/Aj8glUS3zRk",
    name: "Priyanshu Kumar",
    company: "Seraphic Infosolutions, Punjab",
    studentView: "This program was key to my career growth and success.",
    linkdinId:"https://www.linkedin.com/in/priyanshuray/",
  },
  {
    videoURL: "https://www.youtube.com/embed/PQ1sC99U6EY",
    name: "Krishna Kumar",
    company: "Lishbos Technologies, New Delhi",
    studentView: "The foundation I received here has been crucial for my career.",
    linkdinId:"https://www.linkedin.com/in/krishanofficial/",
  },
  {
    videoURL: "https://www.youtube.com/embed/KeiTlTYohls",
    name: "Shubhankar Kumar",
    company: "IDLABELS & Solution Pvt Limited, New Delhi",
    studentView: "The mentorship helped me achieve my career goals.",
    "linkdinId": "https://www.linkedin.com/in/kumar-shubhankar/",

  },
  {
    videoURL: "https://www.youtube.com/embed/TKk-lJWvGdA",
    name: "Bobby Kumar",
    company: "Versatile Prime Infosoft Pvt Ltd",
    studentView: "I enhanced my capabilities and advanced my career thanks to this program.",
    "linkdinId": "https://www.linkedin.com/in/bornxbobby/",
  },
  {
    videoURL: "https://www.youtube.com/embed/S4YBa17qkLw",
    name: "Rahul Kumar",
    company: "SoftOne Tech Solutions Pvt Ltd, New Delhi",
    studentView: "This institution was vital for my career development and success.",
    "linkdinId": "https://www.linkedin.com/in/officilllrahul/",
  },
  
  // Add more testimonials as needed
];


// Function to generate video slides
function generateVideoSlides() {
  const carouselContainer = document.getElementById("carouselItemsContainer");

  testimonials.forEach((testimonial, index) => {
    const isActive = index === 0 ? "active" : ""; // First slide active

    const slideItem = `
      <div class="carousel-item ${isActive}">
        <div class="row success-story2 mx-auto">
          <div class="col-md-3 col-12 stu_succ_video">
            <div class="video-container">
              <iframe
              loading="lazy"
                width="100%"
                height="315"
                src="${testimonial.videoURL}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="col-md-7 col-12 d-flex flex-column justify-content-start align-items-start py-3 mx-4">
            <div class="fetures_video_story mb-3">Featured Story</div>
            <h3 class="mb-4">
            ${testimonial.studentView}                       
            </h3>
            <div class="profile-video-desc mb-3">
              <img
                src="/images/icons/profile.jpeg"
                alt="profile"
                class="profile-icon me-2"
              />
              <div class="name-cp-name">
                <b>${testimonial.name}</b>
                <p>${testimonial.company}</p>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <img src="/images/icons/star.jpeg" alt="star" class="star-icon me-1" />
              <img src="/images/icons/star.jpeg" alt="star" class="star-icon me-1" />
              <img src="/images/icons/star.jpeg" alt="star" class="star-icon me-1" />
              <img src="/images/icons/star.jpeg" alt="star" class="star-icon me-1" />
              <img src="/images/icons/star.jpeg" alt="star" class="star-icon" />
            </div>
            <div class="py-1">
              <a target="_blank" href="${testimonial.videoURL}">
                <img
                  src="/images/icons/youtube.avif"
                  alt="youtube"
                  class="me-1"
                  style="width: 150px"
                />
              </a>
              <a target="_blank" href=${testimonial.linkdinId}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  class="icon"
                  height="50px"
                  width="50px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>`;

    carouselContainer.innerHTML += slideItem;
  });
}

// Call the function to generate the video slides on page load
document.addEventListener("DOMContentLoaded", () => {
  fetchStudentData();
  generateVideoSlides();
});