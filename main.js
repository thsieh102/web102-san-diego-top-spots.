$(document).ready(function () {
    $.getJSON('data.json', function (spots) {
        const tableBody = $('table tbody');

        spots.forEach(function (spot) {
            const [latitude, longitude] = spot.location;
            const mapsLink = $('<a>')
                .attr('href', `https://www.google.com/maps?q=${latitude},${longitude}`)
                .attr('aria-label', `Open in Google Maps: ${spot.name}`)
                .text('Open in Google Maps');

            $('<tr>')
                .append($('<td>').text(spot.name))
                .append($('<td>').text(spot.description))
                .append($('<td>').append(mapsLink))
                .appendTo(tableBody);
        });
    }).fail(function () {
        $('#spots-error').prop('hidden', false);
    });
});
