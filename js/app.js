    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu functionality
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const sidebar = document.querySelector('.sidebar');
        const sidebarClose = document.querySelector('.sidebar-close');
        
        // Toggle mobile menu
        mobileMenuButton.addEventListener('click', function() {
            sidebar.classList.add('mobile-active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            lucide.createIcons(); // Refresh icons
        });
        
        // Close mobile menu
        sidebarClose.addEventListener('click', function() {
            sidebar.classList.remove('mobile-active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
        
        // Close menu when clicking outside on mobile
        document.addEventListener('click', function(event) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnMenuButton = mobileMenuButton.contains(event.target);
            
            if (!isClickInsideSidebar && !isClickOnMenuButton && sidebar.classList.contains('mobile-active')) {
                sidebar.classList.remove('mobile-active');
                document.body.style.overflow = ''; // Re-enable scrolling
            }
        });
        
        // Handle window resize
        function handleResize() {
            if (window.innerWidth > 768) {
                sidebar.classList.remove('mobile-active');
                document.body.style.overflow = ''; // Re-enable scrolling
            }
        }
        
        window.addEventListener('resize', handleResize);
    });
