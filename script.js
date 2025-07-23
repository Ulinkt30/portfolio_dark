import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://difipsrqfnclvokslnmd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZmlwc3JxZm5jbHZva3Nsbm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NTExMzEsImV4cCI6MjA2ODQyNzEzMX0.tc5oYxQtiD3uhKo_o75HnVET09hNa8yBbNBbX5FcJqo";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const projectsData = [
  {
    title: "Website PPDB & Informasi MTsN 5 Merangin",
    description: "sistem manajemen website yang dikembangkan untuk MTsN 5 Merangin, sebuah Madrasah Tsanawiyah. Dibangun dengan PHP Native dan didukung oleh database MySQL/MariaDB, serta menggunakan Tailwind CSS, Chart.js, dan Font Awesome untuk antarmuka dan fungsionalitas. Website ini berfungsi sebagai portal informasi resmi madrasah dan sistem Penerimaan Peserta Didik Baru (PPDB) online. Fitur utamanya mencakup halaman beranda interaktif, informasi profil dan fasilitas madrasah, galeri foto, sistem pendaftaran siswa baru daring lengkap dengan unggah dokumen, fitur cek status pendaftaran, dan cetak bukti pendaftaran. Selain itu, terdapat panel admin yang komprehensif untuk mengelola data pendaftar, memverifikasi dokumen, memperbarui status pendaftaran, serta mengelola konten dinamis website seperti banner, pengumuman, dan galeri,",
    image: "assets/img/ppdb.png",
    link: "https://mts5mrg.free.nf/",
    technologies: ["PHP", "MySQL", "Tailwind ", "css", "JavaScript"],
    features: ["Halaman Beranda Interaktif", "Informasi Lengkap Madrasah", "Pendaftaran PPDB Online", "Cek Status Pendaftaran", "Manajemen Pengguna Admin"],
  },
  {
    title: "My QR Absensi",
    description: "Sistem Absensi Siswa Berbasis QR Code adalah aplikasi berbasis web yang dirancang untuk memudahkan proses pencatatan kehadiran siswa secara otomatis dan real-time menggunakan teknologi QR Code. Sistem ini dilengkapi fitur login guru/admin, rekapitulasi kehadiran, pencetakan laporan PDF, dan manajemen data siswa, kelas, serta hari libur..",
    image: "assets/img/qr.jpg",
    link: "",
    technologies: ["PHP ", "dompdf", "JavaScript", "qr-scanner", "ZipArchive "],
    features: [" Absensi Siswa via QR Code", "Login Multi-Role (Admin & Guru)", "Rekap Absensi", "Cetak & Unduh QR Code Massal", "Manajemen Data Siswa", "Pengelolaan Hari Libur", "Laporan Absensi Format PDF", "Pencarian & Filter Data"],
  },
  {
    title: "Integrasi Api AI",
    description: "AiLinx.id adalah asisten cerdas berbasis web yang dirancang untuk membantu pengguna memperoleh informasi secara ringkas, mendalam, dan mudah dipahami. Aplikasi ini memungkinkan pengguna untuk menyesuaikan jenis output informasi yang diinginkan, seperti Arti Singkat, Penjelasan Detail, Penjelasan Awam, Istilah Terkait, Penjelasan sebagai Dosen, Contoh, dan Pandangan Menurut Para Ahli...",
    image: "assets/img/ailink.png",
    link: "https://ailink-plum.vercel.app/",
    technologies: ["HTML5 + CSS3 ", "Tailwind", "JavaScript", "LottieFiles"],
    features: ["Desain Responsif", "pilihan Output yang Dapat Disesuaikan", "Mode Tema (Dark/Light)"],
  },
];

const typingTextElement = document.getElementById("typing-text");
const phrases = ["Information Systems Student", "Technology Enthusiast", "Web Developer", "Website Enthusiast", "Tech Lover"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  let displayText = "";

  if (isDeleting) {
    displayText = currentPhrase.substring(0, charIndex - 1);
  } else {
    displayText = currentPhrase.substring(0, charIndex + 1);
  }

  typingTextElement.textContent = displayText;

  let typingSpeed = 150;
  if (isDeleting) {
    typingSpeed /= 2;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 1500; // Pause at end of phrase
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  setTimeout(typeEffect, typingSpeed);
}

function renderProjects() {
  const projectsContent = document.getElementById('projects-content');
  projectsContent.innerHTML = ''; // Clear existing content
  projectsData.forEach(project => {
    const projectCardHtml = `
      <div
        class="bg-white/5 backdrop-blur-sm border border-purple-500/10 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
        data-project-title="${project.title}"
        data-project-description="${project.description}"
        data-project-image="${project.image}"
        data-project-link="${project.link}"
        data-project-technologies="${project.technologies.join(', ')}"
        data-project-features="${project.features.join(', ')}"
        data-aos="fade-up" data-aos-duration="1000"> <!-- Added AOS animation here -->
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-semibold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
            ${project.title}
          </h3>
          <p class="text-gray-300 mb-4 line-clamp-3">
            ${project.description}
          </p>
          <div class="flex flex-col gap-2 mt-4">
            <a href="${project.link}" data-link="${project.link}" target="_blank" rel="noopener noreferrer"
              class="project-link bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-4 py-2 rounded-md text-sm font-semibold hover:from-[#7c3aed] hover:to-[#9333ea] transition duration-300 flex items-center justify-center w-full">
              Kunjungi <i class="fas fa-external-link-alt ml-2 text-xs"></i>
            </a>
            <a href="#"
              class="detail-gradient-border-button text-sm font-semibold transition duration-300 flex items-center justify-center w-full py-2 rounded-md">
              <span class="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Detail <i class="fas fa-arrow-right ml-1 text-xs"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    `;
    projectsContent.insertAdjacentHTML('beforeend', projectCardHtml);
  });
}

function initializeProjectLinks() {
  const projectLinks = document.querySelectorAll('.project-link');
  projectLinks.forEach(link => {
    const dataLink = link.dataset.link;
    if (!dataLink || dataLink.trim() === '') {
      link.href = '#';
      link.classList.add('bg-gray-700', 'text-gray-400', 'cursor-not-allowed');
      link.classList.remove('bg-gradient-to-r', 'from-[#6366f1]', 'to-[#a855f7]', 'hover:from-[#7c3aed]', 'hover:to-[#9333ea]', 'text-white');
      link.innerHTML = 'Demo Tidak Tersedia';
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action for disabled links
      });
    } else {
      link.href = dataLink;
      link.classList.remove('bg-gray-700', 'text-gray-400', 'cursor-not-allowed');
      link.classList.add('bg-gradient-to-r', 'from-[#6366f1]', 'to-[#a855f7]', 'text-white', 'hover:from-[#7c3aed]', 'hover:to-[#9333ea]');
      link.innerHTML = 'Kunjungi <i class="fas fa-external-link-alt ml-2 text-xs"></i>';
      // Ensure the event listener for preventing default is removed if it was previously added
      link.removeEventListener('click', function(event) {
        event.preventDefault();
      });
    }
  });
}

window.onload = function () {
  typeEffect();
  initializeDynamicBlobs();
  renderProjects();
  initializeProjectLinks();
  initializeDetailButtons();
  AOS.init({ // Initialize AOS
    once: false, // Changed from true to false to allow re-triggering animations
    mirror: true, // Set to true to allow animations to be replayed when scrolling up
  });
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile menu if open
    if (mobileMenu.classList.contains("max-h-screen")) {
      mobileMenu.classList.remove("max-h-screen", "opacity-100");
      mobileMenu.classList.add("max-h-0", "opacity-0");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });
});

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("max-h-screen");
  mobileMenu.classList.toggle("opacity-100");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");

  // Adjust navbar background when mobile menu is open/closed
  if (mobileMenu.classList.contains("max-h-screen")) {
    navbar.classList.remove("bg-transparent", "bg-[#030014]/50", "backdrop-blur-xl");
    navbar.classList.add("bg-[#030014]");
  } else {
    // Restore original navbar behavior based on scroll position
    if (window.scrollY > 50) {
      navbar.classList.add("bg-[#030014]/50", "backdrop-blur-xl");
    } else {
      navbar.classList.add("bg-transparent");
    }
  }
});

window.addEventListener("scroll", () => {
  // Only apply navbar background change on scroll if mobile menu is closed
  if (mobileMenu.classList.contains("max-h-0")) {
    if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-[#030014]/50", "backdrop-blur-xl", "shadow-lg");
    } else {
      navbar.classList.remove("bg-[#030014]/50", "backdrop-blur-xl", "shadow-lg");
      navbar.classList.add("bg-transparent");
    }
  }
});

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  // Set "Proyek" tab as active by default
  const projectsButton = document.querySelector('.tab-button[data-tab="projects"]');
  const projectsContent = document.getElementById('projects-content');

  if (projectsButton && projectsContent) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.add('hidden'));
    projectsButton.classList.add('active');
    projectsContent.classList.remove('hidden');
    AOS.refresh(); // Refresh AOS when the initial tab content is shown
  }
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    tabContents.forEach((content) => content.classList.add("hidden"));
    const targetTab = button.dataset.tab;
    document.getElementById(`${targetTab}-content`).classList.remove("hidden");
    AOS.refresh(); // Refresh AOS when a new tab content is shown
  });
});

let scrollPosition = 0; // Variable to store scroll position

function initializeDetailButtons() {
  const detailButtons = document.querySelectorAll('.detail-gradient-border-button');
  const projectModal = document.getElementById('project-modal');
  const modalCloseButton = document.getElementById('modal-close-button');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalTechCount = document.getElementById('modal-tech-count');
  const modalFeatureCount = document.getElementById('modal-feature-count');
  const modalTechnologies = document.getElementById('modal-technologies');
  const modalFeatures = document.getElementById('modal-features');
  const modalLiveDemoButton = document.getElementById('modal-live-demo-button');
  const modalContentWrapper = document.getElementById('modal-content-wrapper'); // Get modal content wrapper
  const currentProjectBreadcrumb = document.getElementById('current-project-breadcrumb');


  detailButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      const projectCard = this.closest('.bg-white\\/5'); // Find the parent project card
      if (projectCard) {
        const title = projectCard.dataset.projectTitle;
        const description = projectCard.dataset.projectDescription;
        const imageUrl = projectCard.dataset.projectImage;
        const visitLink = projectCard.dataset.projectLink;
        const technologies = projectCard.dataset.projectTechnologies ? projectCard.dataset.projectTechnologies.split(',').map(tech => tech.trim()) : [];
        const features = projectCard.dataset.projectFeatures ? projectCard.dataset.projectFeatures.split(',').map(feature => feature.trim()) : [];

        // Populate modal with project data
        modalImage.src = imageUrl;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalTechCount.textContent = technologies.length;
        modalFeatureCount.textContent = features.length;

        // Clear previous technologies and add new ones
        modalTechnologies.innerHTML = '';
        if (technologies.length > 0) {
          technologies.forEach(tech => {
            const li = document.createElement('li');
            li.classList.add('modal-tech-item');
            li.innerHTML = `<i class="fas fa-microchip text-indigo-400"></i><span>${tech}</span>`;
            modalTechnologies.appendChild(li);
          });
        } else {
          modalTechnologies.innerHTML = '<li class="text-gray-300">Tidak ada teknologi yang terdaftar.</li>';
        }


        // Clear previous features and add new ones
        modalFeatures.innerHTML = '';
        if (features.length > 0) {
          features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
          });
        } else {
          modalFeatures.innerHTML = '<li class="text-gray-300">Tidak ada fitur utama yang terdaftar.</li>';
        }

        // Set live demo button link and visibility
        if (visitLink && visitLink.trim() !== '') {
          console.log("Setting Live Demo data-link to:", visitLink);
          modalLiveDemoButton.dataset.link = visitLink;
          modalLiveDemoButton.classList.remove('hidden');
          modalLiveDemoButton.classList.remove('cursor-not-allowed', 'bg-gray-700', 'text-gray-400');
          modalLiveDemoButton.classList.add('bg-gradient-to-r', 'from-[#6366f1]', 'to-[#a855f7]', 'text-white', 'hover:from-[#7c3aed]', 'hover:to-[#9333ea]');

        } else {
          console.log("Live Demo link is empty or invalid for this project. Hiding button.");
          modalLiveDemoButton.classList.add('hidden');
        }

        currentProjectBreadcrumb.textContent = title; // Update breadcrumb

        // Show the modal
        scrollPosition = window.scrollY; // Save current scroll position
        projectModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden'); // Prevent scrolling on body
        document.documentElement.classList.add('overflow-hidden'); // For Safari/iOS
        document.body.style.position = 'fixed'; // Fix body position
        document.body.style.top = `-${scrollPosition}px`; // Adjust top to maintain scroll position
        document.body.style.width = '100%'; // Maintain body width

        // Add animation classes
        projectModal.classList.add('modal-enter-active');
        setTimeout(() => {
          modalContentWrapper.classList.remove('scale-95', 'opacity-0');
          modalContentWrapper.classList.add('scale-100', 'opacity-100');
        }, 10); // Small delay to ensure display:block before animation
      }
    });
  });

  // Close modal button event listener
  modalCloseButton.addEventListener('click', () => {
    projectModal.classList.add('modal-exit-active');
    modalContentWrapper.classList.remove('scale-100', 'opacity-100');
    modalContentWrapper.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      projectModal.classList.add('hidden');
      projectModal.classList.remove('modal-enter-active', 'modal-exit-active');
      document.body.classList.remove('overflow-hidden'); // Re-enable scrolling on body
      document.documentElement.classList.remove('overflow-hidden'); // For Safari/iOS
      document.body.style.position = ''; // Remove fixed position
      document.body.style.top = ''; // Reset top
      document.body.style.width = ''; // Reset width
      window.scrollTo(0, scrollPosition); // Restore scroll position
    }, 300); // Match animation duration
  });

  // Close modal when clicking outside the content
  projectModal.addEventListener('click', function(event) {
    if (event.target === projectModal) {
      projectModal.classList.add('modal-exit-active');
      modalContentWrapper.classList.remove('scale-100', 'opacity-100');
      modalContentWrapper.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        projectModal.classList.add('hidden');
        projectModal.classList.remove('modal-enter-active', 'modal-exit-active');
        document.body.classList.remove('overflow-hidden'); // Re-enable scrolling on body
        document.documentElement.classList.remove('overflow-hidden'); // For Safari/iOS
        document.body.style.position = ''; // Remove fixed position
        document.body.style.top = ''; // Reset top
        document.body.style.width = ''; // Reset width
        window.scrollTo(0, scrollPosition); // Restore scroll position
      }, 300); // Match animation duration
    }
  });

  // Live demo button click handler
  if (modalLiveDemoButton) {
    modalLiveDemoButton.addEventListener('click', function() {
      const linkToOpen = this.dataset.link;
      if (linkToOpen && linkToOpen.trim() !== '') {
        window.open(linkToOpen, '_blank', 'noopener,noreferrer');
      } else {
        console.warn("Live Demo link is not available for this project.");
      }
    });
  }
}

// Intersection Observer for active navigation links
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      let correspondingLink;

      // Special handling for the hero section to ensure its link is active when at the very top
      if (id === "hero") {
        correspondingLink = document.querySelector('nav a[href="#hero"].nav-link');
      } else {
        correspondingLink = document.querySelector(`nav a[href="#${id}"]`);
      }

      if (correspondingLink) {
        if (entry.isIntersecting) {
          // Remove active class from all links
          navLinks.forEach((link) => {
            // Exclude the special case for hero if it's not the current active one
            if (link.getAttribute("href") === "#hero" && !link.classList.contains("nav-link")) {
              // Do nothing, this is a placeholder for potential future specific hero link handling
            } else {
              link.classList.remove("nav-link-active");
              link.classList.add("nav-link-inactive");
            }
          });
          // Add active class to the current section's link
          correspondingLink.classList.remove("nav-link-inactive");
          correspondingLink.classList.add("nav-link-active");
        } else {
          // If not intersecting, remove active class
          correspondingLink.classList.remove("nav-link-active");
          correspondingLink.classList.add("nav-link-inactive");
        }
      }
    });
  },
  {
    rootMargin: "-64px 0px -70% 0px", // Adjust this margin as needed
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Dynamic Blob Animation
const dynamicBlobContainer = document.getElementById("dynamic-blob-container");
let blobs = [];

const initialBlobConfigs = [
  { id: "blob1", x: -4, y: 0, size: 400 },
  { id: "blob2", x: 80, y: 100, size: 300 },
  { id: "blob3", x: 20, y: -8, size: 500 },
  { id: "blob4", x: -50, y: 200, size: 350 },
  { id: "blob5", x: 120, y: -150, size: 450 },
];

function initializeDynamicBlobs() {
  initialBlobConfigs.forEach((config, index) => {
    const blobElement = document.createElement("div");
    blobElement.id = config.id;
    blobElement.classList.add("dynamic-blob");
    blobElement.style.width = `${config.size}px`;
    blobElement.style.height = `${config.size}px`;
    blobElement.style.left = `${config.x}%`;
    blobElement.style.top = `${config.y}%`;
    dynamicBlobContainer.appendChild(blobElement);
    blobs.push({
      element: blobElement,
      initialX: config.x,
      initialY: config.y,
      index: index, // Add index for unique movement
    });
  });
  updateBlobsPosition(); // Set initial positions
}

function updateBlobsPosition() {
  const newScroll = window.pageYOffset;
  blobs.forEach((blob) => {
    // Apply a sine/cosine wave to create a floating effect based on scroll and unique index
    const xOffset = Math.sin(newScroll / 100 + blob.index * 0.5) * 40; // Reduced amplitude
    const yOffset = Math.cos(newScroll / 100 + blob.index * 0.5) * 30; // Reduced amplitude
    blob.element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  });
}

window.addEventListener("scroll", updateBlobsPosition);

// About Me Image Hover Effect
const aboutMeImageContainer = document.getElementById("about-me-image-container");
const aboutMeImage = document.getElementById("about-me-image");

if (aboutMeImageContainer && aboutMeImage) {
  aboutMeImageContainer.addEventListener("click", () => {
    const currentSrc = aboutMeImage.src;
    const originalSrc = aboutMeImage.dataset.originalSrc;
    const hoverSrc = aboutMeImage.dataset.hoverSrc;

    if (currentSrc.includes(originalSrc)) {
      aboutMeImage.src = hoverSrc;
    } else {
      aboutMeImage.src = originalSrc;
    }
  });
}

// Comment Form and Supabase Integration
const commentForm = document.getElementById("commentForm");
const commentsList = document.getElementById("commentsList");
const loadingIndicator = document.getElementById("loadingIndicator");
const errorMessage = document.getElementById("errorMessage");
const noCommentsMessage = document.getElementById("noCommentsMessage");
const loadingComments = document.getElementById("loadingComments");

const profilePicFile = document.getElementById("profilePicFile");
const profilePicPreview = document.getElementById("profilePicPreview");

profilePicFile.addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profilePicPreview.src = e.target.result;
      profilePicPreview.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  } else {
    profilePicPreview.src = "#";
    profilePicPreview.classList.add("hidden");
  }
});

function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " tahun yang lalu";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " bulan yang lalu";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " hari yang lalu";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " jam yang lalu";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " menit yang lalu";
  }
  return Math.floor(seconds) + " detik yang lalu";
}

async function fetchComments() {
  loadingComments.style.display = "block";
  errorMessage.style.display = "none";

  // Get the dynamic comments container
  const dynamicCommentsContainer = document.getElementById('commentsList');
  // Remove all children except the first (pinned comment)
  while (dynamicCommentsContainer.children.length > 1) {
    dynamicCommentsContainer.removeChild(dynamicCommentsContainer.lastChild);
  }

  try {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    loadingComments.style.display = "none";

    // Update comment count
    const commentCountElement = document.getElementById('comment-count');
    if (commentCountElement) {
      commentCountElement.textContent = `(${data.length})`;
    }

    if (data.length === 0) {
      noCommentsMessage.style.display = "block";
    } else {
      noCommentsMessage.style.display = "none";
      data.forEach((comment) => {
        const commentCard = document.createElement("div");
        commentCard.className = "comment-card";

        const profilePic = comment.profile_pic_url;
        const initial = comment.author ? comment.author.charAt(0).toUpperCase() : "?";

        commentCard.innerHTML = `
                          <div class="comment-avatar-wrapper">
                              ${
                                profilePic
                                  ? `<img src="${profilePic}" alt="Foto Profil" class="comment-avatar-img" onerror="this.onerror=null;this.src='https://placehold.co/40x40/cccccc/ffffff?text=User';">`
                                  : `<div class="comment-avatar-initial">${initial}</div>`
                              }
                          </div>
                          <div class="comment-content-wrapper">
                              <div class="comment-header">
                                  <div class="comment-author">${
                                    comment.author
                                  }</div>
                                  <div class="comment-date">${formatTimeAgo(
                                    comment.created_at
                                  )}</div>
                              </div>
                              <div class="comment-content">${
                                comment.content
                              }</div>
                          </div>
                      `;
        dynamicCommentsContainer.appendChild(commentCard);
      });
    }
  } catch (error) {
    console.error("Error fetching comments:", error.message);
    errorMessage.textContent = "Gagal memuat komentar: " + error.message;
    errorMessage.style.display = "block";
    loadingComments.style.display = "none";
  }
}

commentForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  loadingIndicator.style.display = "block";
  errorMessage.style.display = "none";

  const author = document.getElementById("author").value;
  const content = document.getElementById("content").value;
  const file = profilePicFile.files[0];
  let profilePicUrl = "";

  try {
    if (file) {
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `public/${fileName}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("profile_pictures")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw uploadData; // Throw the actual error object
      }

      const { data: publicUrl } = supabase.storage.from("profile_pictures").getPublicUrl(filePath);
      profilePicUrl = publicUrl.publicUrl;
    }

    const { data, error } = await supabase.from("comments").insert([
      {
        author: author,
        content: content,
        profile_pic_url: profilePicUrl,
      },
    ]);

    if (error) {
      throw error;
    }

    commentForm.reset();
    profilePicPreview.src = "#";
    profilePicPreview.classList.add("hidden");
    await fetchComments(); // Refresh comments after successful submission
  } catch (error) {
    console.error("Error adding comment:", error.message);
    errorMessage.textContent = "Gagal menambahkan komentar: " + error.message;
    errorMessage.style.display = "block";
  } finally {
    loadingIndicator.style.display = "none";
  }
});

window.addEventListener("load", () => {
  fetchComments();
});
