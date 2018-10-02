
$(document).ready(function(){
    'use strict';

    var baseNews = [
        {
            "id": "first",
            "header": "Испания: Валенсия станет первой европейской столицей «умного» туризма",
            "data": "04.09.18",
            "text": "Заявка Валенсии опирается на четыре составляющих – устойчивость, доступность, технологичность и культурное наследие, которыми располагает город.\n" +
                "\n" +
                "Инициатива ЕС по присуждению титула «умной» столицы направлена на продвижение концепции устойчивого, инклюзивного и инновационного туризма. В этом году статус будет присуждаться впервые. Два города-победителя будут объявлены в Европейский день туризма 7 ноября, пишет noticia.ru.\n" +
                "\n" +
                "В валенсийском Совете по устойчивому экономическому развитию отмечают, что туристическая модель в городе тесно связана с городской средой. Власти считают, что наделение Валенсии титулом европейской столицы, стало бы признанием усилий всех государственных и частных организаций по продвижению туризма с пользой для экономики, экологии и общества в рамках Стратегического плана Валенсия-2020.\n" +
                "\n" +
                "В Совете заверяют, что город стремится к сбалансированному развитию туризма с помощью создания экономических возможностей и рабочих мест, минимизации воздействия на окружающую среду и достижения компромисса между всеми вовлеченными в этот процесс сторонами. Так, например, мэрия запустила технологическую платформу «Валенсия – умный город» (VLCi) для организаций, а также работает над созданием системы туристической информации.\n" +
                "\n" +
                "Кроме того, власти отмечают, что в Валенсии создана безбарьерная среда, которая позволяет принимать любых туристов. Также имеются пляжи, доступные для людей с разными физическими возможностями.\n" +
                "\n" +
                "При всей технологичности и современности, в Валенсии есть три объекта, внесенные в Список Всемирного наследия ЮНЕСКО: шелковая биржа Лонха-де-ла-Седа, Водный трибунал и праздник Фальяс.\n" +
                "\n" +
                "В числе претендентов на звание европейской столицы «умного туризма» еще два испанских города – Пальма и Малага. Они соревнуются с Лионом и Нантом (Франция), Брюсселем (Бельгия), Хельсинки (Финляндия), Любляной (Словения), Познанью (Польша) и Таллинном (Эстония)."
        },
        {
            "id": "second",
            "header": "Опубликован список самых фотографируемых городов 2018 г",
            "data": "03.09.18",
            "text": "Travel Pulse опубликовал рейтинг городов, которые чаще всего попадали в объектив фотокамеры туристов. Исследование провел фотобанк Dreamstime. Лидером рейтинга стал Нью-Йорк. Именно из этого город было получено больше всего снимков – 356 747 кадров. На втором месте – российская столица. Город с его разноплановой архитектурой и старинными памятниками назван «мечтой фотографа». Число фотографий из Москвы всего на 20 000 меньше, чем из «Большого Яблока». Однако от третьего места, которое досталось Лондону, ее отделяет более 80 000 снимков. Четвертое место досталось Бангкоку. Он назван самым популярным местом для съемок в Азии. Тайской столице действительно есть что предложить фотоохотникам, начиная от старинных храмов и заканчивая колоритными улицами.\n"
        },
        {
            "id": "third",
            "header": "Реставрация замка Св. Петра в Бодруме будет завершена к лету 2019 г",
            "data": "03.09.18",
            "text": "Реставрация одной из главных достопримечательностей турецкого курорта Бодрум замка Святого Петра будет завершена к лету следующего года. Об этом в пятницу, 31 августа, сообщает агентство Anadolu.Как рассказал журналистам заместитель директора Музея подводной археологии Тайфун Сельчук, реставрация замка, инициированная Министерством культуры и туризма Турции, идет быстрыми темпами. По его словам, реализация проекта началась в 2014 году. Активная фаза работ началась в 2017 году, а завершится она уже в следующем году.До начала восстановительных работ замок посещали более 300 000 человек в год. Здание построено 1415-1523 годах и являет собой пример средневековой архитектуры Восточного Средиземноморья. В строительстве укреплений участвовали рыцари из разных стран, поэтому башни называются «английская», «французская», «немецкая» и «испанская».А на курорте Бодрум в начале сентября ожидается ясная и солнечная погода. Днем воздух прогреется до +32 °С, ночью температура опустится до +25 °С. Вода в Средиземном море – + 27 °С."
        }
    ];

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
        speed: 6500,
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
        speed: 6500,
        refreshInterval: 200,
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
        speed: 6500,
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
    idHotel = hotel[0].id;
    hotelName = hotel[0].name;
    document.getElementById('hotelCity').innerHTML = '<span>' + hotelCity + '</span>';
    document.getElementById('hotelName').innerHTML = '<span>' + hotelName + '</span>';
    }

    function ajaxReqFoto () {
        urlFoto = 'http://photo.hotellook.com/rooms/sprite/h' + idHotel + '_1/100/3/50.auto';
        document.getElementById('fotoHotelAjax').innerHTML = '<img src="' + urlFoto + '">';
    }


});

