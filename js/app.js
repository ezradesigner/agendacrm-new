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

    // Number counting animation
    function animateNumbers() {
        $('.stat-content h3').each(function() {
            const $h3 = $(this);
            const originalText = $h3.text().trim();
            
            // Extract just the numeric value (including commas and decimal points)
            const numberMatch = originalText.match(/[\d,\.]+/);
            
            if (numberMatch) {
                const numberString = numberMatch[0];
                // Remove formatting for calculation
                const cleanNumber = parseFloat(numberString.replace(/[^\d.]/g, ''));
                
                if (!isNaN(cleanNumber)) {
                    // Replace just the number part, preserving any other text
                    const newText = originalText.replace(
                        numberString, 
                        `<span class="counting-number" data-value="${cleanNumber}">0</span>`
                    );
                    $h3.html(newText);
                }
            }
        });

        // Animate each counting number
        $('.counting-number').each(function() {
            const $this = $(this);
            const target = parseFloat($this.data('value'));
            const duration = 1500;
            
            $({ count: 0 }).animate({ count: target }, {
                duration: duration,
                easing: 'swing',
                step: function() {
                    // Format number with Brazilian locale
                    const currentValue = this.count;
                    let displayValue;
                    
                    if (Number.isInteger(target)) {
                        displayValue = Math.floor(currentValue);
                    } else {
                        displayValue = currentValue.toFixed(2);
                    }
                    
                    $this.text(displayValue.toLocaleString('pt-BR'));
                },
                complete: function() {
                    // Ensure final value is exact
                    if (Number.isInteger(target)) {
                        $this.text(target.toLocaleString('pt-BR'));
                    } else {
                        $this.text(target.toFixed(2).toLocaleString('pt-BR'));
                    }
                }
            });
        });
    }

    // Start animation when page loads
    animateNumbers();

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
