jQuery(document).ready(function ($, Drupal)
{
    Drupal.behaviors.calendar = {
        attach: function ()
        {
            jQuery('.full > tbody  > tr .inner').each(function () {
                var prev_date = jQuery.trim(jQuery(this).text());
                jQuery("tr:first").hide();
                jQuery("tr:eq(1)").hide();
                //Making Available for all timeslots
                if (prev_date == '') {
                    jQuery(this).html('<div class="item">\n\
                        <div class="view-item view-item-calendar">\n\
                        <div class="calendar dayview">\n\
                        <div class="calendar.126.field_appointment_date.0.0 contents">\n\
                        <span class="views-field views-field-field-appointment-date">\n\
                        <span class="field-content">\n\
                        <span style="color:green">Available</span>\n\
                        </span>\n\
                        </span>\n\
                        </div>\n\
                        </div>\n\
                        </div>\n\
                        </div>');
                }
                
            });
            jQuery('.full > tbody:eq(1)  > tr').each(function () {
                 var time_slots = '10.00-11.00,11.00-12.00,12.00-13.00,';
                 jQuery(".calendar-hour").text();
            });
            //Disabling PREV if Calendar date is equal to today's Date
            var prev_date = jQuery('.date-heading h3').html();
            var date = new Date();
            var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var month = new Array(12);
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            var weekday = weekdays[date.getDay()];
            var dateValue = date.getDay();
            var monthvalue = month[date.getMonth()];
            var fullDate = new Date();
            var twoDigitDate = fullDate.getDate() + "";
            if (twoDigitDate.length == 1)
                twoDigitDate;
            var fullDate = new Date();
            var currentYear = fullDate.getFullYear();
            //getting complete date as views shown date
            var completedate = weekday + ', ' + monthvalue + ' ' + twoDigitDate + ', ' + currentYear;
            if (prev_date == completedate) {
                jQuery('ul.pager li.date-prev').hide();
            }
        }
    };
}(jQuery, Drupal));


