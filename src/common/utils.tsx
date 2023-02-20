const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);

    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default scrollToSection;
