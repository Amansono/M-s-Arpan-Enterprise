function toggleSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    if (section.id === id) {
      const isVisible = section.style.display === 'block';
      section.style.display = isVisible ? 'none' : 'block';
    } else {
      section.style.display = 'none';
    }
  });
}
