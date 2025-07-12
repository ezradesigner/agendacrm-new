$(document).ready(function() {    
    // Mobile menu functionality
    const $mobileMenuButton = $('.mobile-menu-button');
    const $sidebar = $('.sidebar');
    const $sidebarClose = $('.sidebar-close');
    const $body = $('body');
    
    // Toggle mobile menu
    $mobileMenuButton.on('click', function() {
        $sidebar.addClass('mobile-active');
        $body.addClass('menu-open');
        lucide.createIcons(); // Refresh icons
    });
    
    // Close mobile menu
    $sidebarClose.on('click', function() {
        $sidebar.removeClass('mobile-active');
        $body.removeClass('menu-open');
    });
    
    // Close when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.sidebar').length && 
            !$(event.target).closest('.mobile-menu-button').length &&
            $sidebar.hasClass('mobile-active')) {
            $sidebar.removeClass('mobile-active');
            $body.removeClass('menu-open');
        }
    });
    
    // Handle window resize
    $(window).on('resize', function() {
        if ($(window).width() > 768) {
            $sidebar.removeClass('mobile-active');
            $body.removeClass('menu-open');
        }
    });
});
