/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'clouds-14527-3840x21602',
                type: 'image',
                rect: ['10px', '-84px','3840px','2160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"clouds-14527-3840x2160.jpg",'0px','0px']
            },
            {
                id: 'clouds',
                type: 'rect',
                rect: ['-36', '-1228','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'clouds',
                symbolName: 'clouds',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_clouds-14527-3840x21602}": [
                ["style", "top", '-164px'],
                ["transform", "scaleY", '2.32764'],
                ["transform", "rotateZ", '33deg'],
                ["transform", "scaleX", '2.32764'],
                ["style", "left", '-220px']
            ],
            "${_clouds}": [
                ["style", "left", '-46px'],
                ["style", "top", '-1128px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13090,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "transform", "${_clouds-14527-3840x21602}", "rotateZ", '33deg', { fromValue: '33deg'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "transform", "${_clouds-14527-3840x21602}", "scaleY", '2.32764', { fromValue: '2.32764'}], position: 12000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_clouds}", "top", '-1088px', { fromValue: '-1128px'}], position: 0, duration: 13090 },
                { id: "eid27", tween: [ "style", "${_clouds-14527-3840x21602}", "left", '-2668px', { fromValue: '-220px'}], position: 0, duration: 12000 },
                { id: "eid49", tween: [ "style", "${_clouds}", "left", '-2476px', { fromValue: '-46px'}], position: 0, duration: 13090 },
                { id: "eid30", tween: [ "transform", "${_clouds-14527-3840x21602}", "scaleX", '2.32764', { fromValue: '2.32764'}], position: 12000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_clouds-14527-3840x21602}", "top", '-2550px', { fromValue: '-164px'}], position: 0, duration: 12000 }            ]
        }
    }
},
"clouds": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'clouds-14527-3840x21603',
                    type: 'image',
                    rect: ['0px', '0px', '3840px', '2160px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/clouds-14527-3840x2160.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_clouds-14527-3840x21603}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '2160px'],
                ["style", "width", '3840px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid48", tween: [ "style", "${_clouds-14527-3840x21603}", "opacity", '0.8', { fromValue: '0.350000'}], position: 0, duration: 4000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-176789666");
