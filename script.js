$(document).ready(function(){
    'use strict';
    //    low scroll

    var $anchors = $('a');
    var $button = $ ('button');
    $button.click(function (e) {
        e.preventDefault();
    });
    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 800);
    });

    //   map

    function loadMap() {
        var center = new google.maps.LatLng(47.84, 35.14);
        var marker = new google.maps.Marker({
            position: center,
            draggable:true,
            title:'Click to zoom',
        });
        var mapOptions = {
            center: center,
            zoom:14,
            disableDefaultUI: true,
        };
        var infowindow = new google.maps.InfoWindow({
            content:"пр. Соборний, 166"
        });

        google.maps.event.addListener(marker,'click',function() {
            infowindow.open(map,marker);
        });
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
        marker.setMap(map);

    }
    loadMap();

    // Modal


    //Isotop
    // $('.button-group button').click(function () {
    //     $('.hidden').removeClass("hidden");
    // });
    //переключение Табов

    // $('div .tabs').click(function () {
    //     if (!$(this).hasClass('is-checked')) {
    //         $('.tabs.is-checked').removeClass('is-checked');
    //         $(this).addClass('is-checked');
    //     }
    // });

    // var $isotopeGrid = $('.grid');
    //
    // $isotopeGrid.isotope({
    //     itemSelector: '.element-item',
    //     percentPosition: true
    // });
    // $('.filters-button-group button').click(function () {
    //     var filterValue = $(this).data('filter');
    //     console.log(filterValue);
    //     $isotopeGrid.isotope({
    //         filter: filterValue
    //     });
    // });

});

