document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const searchInput = document.getElementById('search');
  
  // Handle navigation
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      showSection(sectionId);
      setActiveLink(link);
    });
  });
  
  // Handle search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      searchContent(searchTerm);
    });
  }
  
  // Show home section by default
  showSection('home');
});

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function setActiveLink(activeLink) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.style.backgroundColor = '';
    link.style.color = '';
  });
  activeLink.style.backgroundColor = 'var(--bg-secondary)';
  activeLink.style.color = 'var(--accent-color)';
}

function searchContent(searchTerm) {
  if (!searchTerm) {
    document.querySelectorAll('.section').forEach(s => s.style.display = '');
    return;
  }
  
  document.querySelectorAll('.section').forEach(section => {
    const text = section.textContent.toLowerCase();
    section.style.display = text.includes(searchTerm) ? 'block' : 'none';
  });
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
