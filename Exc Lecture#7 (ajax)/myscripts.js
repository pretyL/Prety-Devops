// document ready
$(document).ready(function () {
    // handle button reset
    $("#reset").click(function (e) {
        location.reload();
    });
    
    // handle button submit
    $("#submitButton").click(function (e) {
        $.ajax({
            type: "POST",
            url: "http://api.openweathermap.org/data/2.5/group?id="1636544, 1623446, 1648340, 2654675, 2988507, 1835848, 1642911, 1650357, 1816670, 5128581, 
        })
    })
})