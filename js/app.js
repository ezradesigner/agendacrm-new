$(document).ready(function() {
    // Time-based greeting
    function updateGreeting() {
        const hour = new Date().getHours();
        let greeting;
        
        if (hour < 12) {
            greeting = "Bom dia";
        } else if (hour < 18) {
            greeting = "Boa tarde";
        } else {
            greeting = "Boa noite";
        }
        
        $('.welcome-message h1').text(`${greeting}, Girlan!`);
    }
    
    // Update greeting on page load
    updateGreeting();
    
    // Update greeting every minute in case page stays open
    setInterval(updateGreeting, 60000);

    // Mobile menu functionality
    const $mobileMenuButton = $('.mobile-menu-button');
    const $sidebar = $('.sidebar');
    const $sidebarClose = $('.sidebar-close');
    const $body = $('body');
    
    // Toggle mobile menu
    $mobileMenuButton.on('click', function() {
        $sidebar.addClass('mobile-active');
        $body.addClass('menu-open');
        lucide.createIcons();
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
