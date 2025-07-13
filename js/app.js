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
    // Number counting animation
    function animateNumbers() {
        $('.stat-content h3').each(function() {
            const $this = $(this);
            const originalText = $this.text();
            
            // Extract numbers from the text (including commas and decimal points)
            const matches = originalText.match(/(\d[\d,.]*)/g);
            
            if (matches) {
                let finalText = originalText;
                
                // Replace each number with a span for animation
                matches.forEach(match => {
                    // Remove any formatting for calculation
                    const cleanNumber = parseFloat(match.replace(/[^\d.]/g, ''));
                    if (!isNaN(cleanNumber)) {
                        finalText = finalText.replace(match, `<span class="counting-number" data-value="${cleanNumber}">0</span>`);
                    }
                });
                
                $this.html(finalText);
            }
        });

        // Animate each counting number
        $('.counting-number').each(function() {
            const $this = $(this);
            const target = parseFloat($this.data('value'));
            const duration = 1500; // 1.5 seconds
            
            $({ count: 0 }).animate({ count: target }, {
                duration: duration,
                easing: 'swing',
                step: function() {
                    // Format number with commas and decimal places
                    let value = Math.floor(this.count);
                    if (target % 1 !== 0) { // If it's a decimal number
                        value = this.count.toFixed(2);
                    }
                    $this.text(value.toLocaleString('pt-BR'));
                },
                complete: function() {
                    // Ensure final value is exact
                    if (target % 1 !== 0) {
                        $this.text(target.toFixed(2).toLocaleString('pt-BR');
                    } else {
                        $this.text(target.toLocaleString('pt-BR'));
                    }
                }
            });
        });
    }

    // Start animation when page loads
    animateNumbers();
});
});
