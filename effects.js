// Fade-in when project enters view
const projects = document.querySelectorAll('.project');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.15 });

projects.forEach(project => observer.observe(project));
