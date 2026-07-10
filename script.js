function goTo(pageId) {
    // Get the filmstrip element
    document.getElementById(pageId).scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
    });
}







