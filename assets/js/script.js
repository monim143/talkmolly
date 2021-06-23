/**
 * @Script js for (talkmolly)
 *
 * @project     - talkmolly
 * @author      - talkmolly
 * @created_by  - kawsar bin siraj
 * @created_at  - 20-12-2020
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // sidebarToggle
    $(function () {
        if ($('.btn-sidebarToggle').length) {
            $('.btn-sidebarToggle').on('click', function (e) {
                e.preventDefault();
				$('#navigation-sidebar .collapsed-enable').slideToggle(function(){
					$('body').toggleClass('navigation-sidebar-collapsed');
					$('#navigation-sidebar').toggleClass('navigation-sidebar-collapsed');
				});
                
            });
        }
    });

    // $("#checkAll") input:checkbox
    $(function () {
        $("#checkAll").on('click', function () {
            $(this).closest('.dataTable-init').find('input:checkbox').not(this).prop('checked', this.checked);
        });
    });

    // uptime-countdown
    $(function () {
        if ($('#uptime-countdown').length) {
            let now = new Date();
            let day = now.getDate();
            let month = now.getMonth() + 1;
            let year = now.getFullYear() + 1;
            let nextYear = month + '/' + day + '/' + year + ' 07:07:07';

            $('#uptime-countdown').countdown({
                date: nextYear,
                offset: +2,
                day: 'Day',
                days: 'Days',
                hideOnComplete: true
            }, function (container) {
                alert('Done!');
            });
        }
    });

    // select2-init
    $(function () {
        if ($('.select2-filter').length) {
            $(".select2-filter").select2({
                // closeOnSelect: false,
                minimumResultsForSearch: -1,
                containerCssClass: "select2Filter",
                dropdownCssClass: "select2Filter-dropdown"
            });
        }
        if ($('.select2-search-group').length) {
            $(".select2-search-group").select2({
                // closeOnSelect: false,
                minimumResultsForSearch: -1,
                containerCssClass: "select2-search-group-container",
                dropdownCssClass: "select2-search-group-dropdown"
            });
        }
    });

    // dataTable-init
    $(function () {
        if ($('.dataTable-init').length) {
            $('.dataTable-init').DataTable({
                searching: false,
                "bLengthChange": false,
                "ordering": false,
                "oLanguage": {
                    "sInfo": "Showing _START_ - _END_ of _TOTAL_ Result",
                }
            });
        }
    });


});
