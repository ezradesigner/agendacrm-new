$(document).ready(function () {
    // Sidebar functionality
    $('#menuButton').click(function () {
        $('#sidebar').addClass('open');
        $('#mainContent').addClass('shifted');
        $('#overlay').addClass('active');
    });

    $('#overlay').click(function () {
        $('#sidebar').removeClass('open');
        $('#mainContent').removeClass('shifted');
        $('#overlay').removeClass('active');
    });

    // Appointments toggle functionality
    $('#toggleAppointments').click(function () {
        const $list = $('#appointmentsList');
        const $icon = $('#appointmentsIcon');

        if ($list.is(':visible')) {
            $list.slideUp(300);
            $icon.attr('data-lucide', 'chevron-right');
        } else {
            $list.slideDown(300);
            $icon.attr('data-lucide', 'chevron-down');
        }
        lucide.createIcons();
    });
    $('#toggleOverdue').click(function () {
        const $list = $('#overdueList');
        const $icon = $('#overdueIcon');

        if ($list.is(':visible')) {
            $list.slideUp(300);
            $icon.attr('data-lucide', 'chevron-right');
        } else {
            $list.slideDown(300);
            $icon.attr('data-lucide', 'chevron-down');
        }
        lucide.createIcons();
    });
});
