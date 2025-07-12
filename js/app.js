// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
});

function setupMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    
    if (!mobileMenuButton || !sidebar || !sidebarClose) return;
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        sidebar.classList.add('mobile-active');
        document.body.classList.add('menu-open');
        lucide.createIcons(); // Refresh icons
    });
    
    // Close mobile menu
    sidebarClose.addEventListener('click', function() {
        sidebar.classList.remove('mobile-active');
        document.body.classList.remove('menu-open');
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = sidebar.contains(event.target);
        const isMenuButton = mobileMenuButton.contains(event.target);
        
        if (!isClickInside && !isMenuButton && sidebar.classList.contains('mobile-active')) {
            sidebar.classList.remove('mobile-active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('mobile-active');
            document.body.classList.remove('menu-open');
        }
    }
    
    window.addEventListener('resize', handleResize);
}
