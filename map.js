'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'YOUR TOKEN HERE BETWEEN THE QUOTES'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/thejoylee/ck92ltjd029zs1ik4li5q8qbj',
    center: [114.139008, 22.354110],
    zoom: 12
})

var config = {
    style: 'mapbox://styles/thejoylee/ck92ltjd029zs1ik4li5q8qbj',
    accessToken: 'pk.eyJ1IjoidGhlam95bGVlIiwiYSI6ImNrN3BmZnZ5NDBqYjQzbW1pNGs0MWFiejkifQ.9stnbzBJqom6XYjX73VYcA',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Hong Kong History: A Century of Cinema, Culture, and Politics from 1900s-2000s',
    subtitle: 'Hong Kong cinemas were a popular form of entertainment spanning diverse populations during the twentieth century now. Due to the tight residential space and growing population, cinemas were a place to escape, to see friends, a pinnacle of community in villages all the way to the upper echelons of society. This visualization maps the spread of cinemas across Hong Kong territory, the political contexts that gave way to their development, and the narratives of individuals whose everyday lives had been shaped by the cultural experience of a cinema.',
    byline: 'By Joy Lee',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [114.139008, 22.354110],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
