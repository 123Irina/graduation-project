
$(document).ready(function(){
    'use strict';
    //    low scroll

    var $anchors = $('a[href^="#"]').not('[href="#"]');
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

    $('div .open-news').click(function () {
        if (!$(this).hasClass('is-checked')) {
            $('.open-news.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        }
    });

    // Window with news

    $('.open-modal').click(function () {
        openModal($(this));
        writeModal ($(this));
    });

    $('.modal-body .close').click(function () {
        closeModal($(this));
    });


    function writeModal(tagName) {
        var newsId = tagName.data('id');
        var newsName, newsText, newsData;
        for (var i = 0; i < baseNews.length; i++) {
            if (baseNews[i].id == newsId) {
                newsName = baseNews[i].header;
                newsData = baseNews[i].data;
                newsText = baseNews[i].text;
            }
        }
        document.getElementById('newsName').innerHTML = newsName;
        document.getElementById('newsText').innerHTML = newsText;
        document.getElementById('newsData').innerHTML = newsData;
    }

    function openModal(button) {
        var windowId = button.data('target');
        $(windowId).show();
    }

    function closeModal(closeElement) {
        closeElement.closest('.modal').hide();
    }

    $('.timer_500').countTo({
        from: 0,
        to: 500,
        speed: 1500,
        refreshInterval: 50,
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });

    $('.timer_700').countTo({
        from: 0,
        to: 700,
        speed: 1500,
        refreshInterval: 50,
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });
    $('.timer_2000').countTo({
        from: 0,
        to: 2000,
        speed: 1500,
        refreshInterval: 50,
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });

    //AJAX hotels photo

    var hotelCoord, url, idHotel, obj, urlFoto, hotelCity, hotelName;

    $('.hotelsReq button').click(function () {
        hotelCoord = $(this).data('hotel');

        ajaxReq ();
        getIdHotel();
        ajaxReqFoto ()
    });

    function ajaxReq () {
        url = 'http://engine.hotellook.com/api/v2/lookup.json?query=' + hotelCoord + '&lang=ru&lookFor=both&limit=1';

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();
        obj = JSON.parse(xhr.responseText);
    }

function getIdHotel() {
    var result = obj.results;
    var hotel = result.hotels;
    var location = result.locations;
    hotelCity = location[0].fullname;
    console.log (hotelCity);
    idHotel = hotel[0].id;
    hotelName = hotel[0].name;
    console.log (hotelName)
    document.getElementById('hotelCity').innerHTML = '<span>' + hotelCity + '</span>';
    document.getElementById('hotelName').innerHTML = '<span>' + hotelName + '</span>';
    }

    function ajaxReqFoto () {
        urlFoto = 'http://photo.hotellook.com/rooms/sprite/h' + idHotel + '_1/100/3/50.auto';
        document.getElementById('fotoHotelAjax').innerHTML = '<img src="' + urlFoto + '">';
    }


});

