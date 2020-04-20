mapboxgl.accessToken = 'pk.eyJ1IjoidGhlam95bGVlIiwiYSI6ImNrN3BmZnZ5NDBqYjQzbW1pNGs0MWFiejkifQ.9stnbzBJqom6XYjX73VYcA';

var chapters = {
    'part-1': {
        center: [114.208237, 22.290008],
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
    },
    'part-2': {
        center: [77.1016, 28.6375],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-3': {
        center: [72.8561, 19.0022],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-4': {
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/thejoylee/ck92ltjd029zs1ik4li5q8qbj',
        center: [114.208237, 22.290008],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
