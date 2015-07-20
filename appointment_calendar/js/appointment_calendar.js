Drupal.behaviors.appointment_calendar = {
    attach: function (context) {
        if (jQuery('input#edit-appointment-date-und-0-value-datepicker-popup-0').val().length !== 0) {
            jQuery('.form-item-appointment-date-und-0-value-time').hide();
        }
//        jQuery('input#edit-appointment-date-und-0-value-datepicker-popup-0').change(function(){
//            jQuery('#slot-check').remove();
//        });
       // jQuery('#edit-appointment-slot').hide();


    }
};