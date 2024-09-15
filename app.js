function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.collapsible-section');

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.toggle('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}