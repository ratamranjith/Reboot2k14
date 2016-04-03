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
                id: 'map',
                type: 'image',
                rect: ['32px', '18px','94.9%','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map.jpg",'0px','0px'],
                transform: [[],[],[],['1.03','1.03']]
            },
            {
                id: 'treasurer',
                type: 'image',
                rect: ['142', '160px','72px','69px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"treasurer.png",'0px','0px']
            },
            {
                id: 'president2',
                type: 'image',
                rect: ['148px', '438px','72px','69px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"president.png",'0px','0px']
            },
            {
                id: 'secretary',
                type: 'text',
                rect: ['314px', '304px','156px','26px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Secretary",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(244,0,0,1)", "800", "none", "italic"]
            },
            {
                id: 'Joint_Secretary',
                type: 'text',
                rect: ['658px', '390px','172px','26px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Joint Secretary",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(7,0,119,1.00)", "800", "none", "italic"]
            },
            {
                id: 'coordinators',
                type: 'text',
                rect: ['578px', '160px','200px','26px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Coordinators",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(7,0,119,1)", "800", "none", "italic"]
            },
            {
                id: 'Event_Members',
                type: 'text',
                rect: ['862px', '216px','180px','26px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Event Members",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(3,98,0,1.00)", "800", "none", "italic"]
            },
            {
                id: 'cloudssmall',
                type: 'image',
                rect: ['75px', '43px','205px','107px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloudssmall.png",'0px','0px']
            },
            {
                id: 'cloudssmallCopy',
                type: 'image',
                rect: ['75px', '43px','205px','107px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloudssmall.png",'0px','0px']
            },
            {
                id: 'cloudssmallCopy2',
                type: 'image',
                rect: ['75px', '43px','205px','107px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloudssmall.png",'0px','0px']
            },
            {
                id: 'treas',
                type: 'image',
                rect: ['234', '173','150px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"members/treas.png",'0px','0px']
            },
            {
                id: 'secretary2',
                type: 'image',
                rect: ['470', '222px','150px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"members/secretary.jpg",'0px','0px']
            },
            {
                id: 'jointsecretary',
                type: 'image',
                rect: ['856px', '403px','150px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"members/jointsecretary.jpg",'0px','0px']
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['290px', '531px','656px','17px','auto', 'auto'],
                text: "Click on Treasure",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(3,98,0,1)", "800", "none", "italic"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['325px', '160px','150px','26px','auto', 'auto'],
                text: "If not click on members",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(3,98,0,1)", "800", "none", "italic"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['512px', '70px','338px','37px','auto', 'auto'],
                text: "REBOOT MEMBERS",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,247,0,1)", "800", "none", "italic"]
            },
            {
                id: 'president',
                type: 'image',
                rect: ['296', '478','150px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"members/president.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_treasurer}": [
                ["style", "top", '160px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '148px']
            ],
            "${_Text11}": [
                ["color", "color", 'rgba(255,131,114,1.00)'],
                ["style", "left", '434px'],
                ["style", "font-size", '23px']
            ],
            "${_coordinators}": [
                ["style", "cursor", 'pointer']
            ],
            "${_Text8}": [
                ["style", "top", '531px'],
                ["style", "left", '290px'],
                ["style", "width", '656px']
            ],
            "${_president}": [
                ["style", "top", '390px'],
                ["style", "opacity", '0'],
                ["style", "left", '250px']
            ],
            "${_cloudssmallCopy}": [
                ["style", "top", '283px'],
                ["style", "opacity", '0.31'],
                ["style", "left", '843px']
            ],
            "${_president2}": [
                ["style", "top", '438px'],
                ["style", "left", '148px'],
                ["style", "cursor", 'pointer'],
                ["transform", "rotateZ", '-47deg']
            ],
            "${_secretary}": [
                ["style", "cursor", 'pointer']
            ],
            "${_cloudssmall}": [
                ["style", "top", '53px'],
                ["style", "opacity", '0.31'],
                ["style", "left", '91px']
            ],
            "${_treas}": [
                ["style", "top", '234px'],
                ["style", "opacity", '0'],
                ["style", "left", '70px']
            ],
            "${_Event_Members}": [
                ["color", "color", 'rgba(3,98,0,1.00)'],
                ["style", "top", '216px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '862px']
            ],
            "${_Text10}": [
                ["color", "color", 'rgba(255,247,0,1.00)']
            ],
            "${_Joint_Secretary}": [
                ["color", "color", 'rgba(7,0,119,1.00)'],
                ["style", "top", '390px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '658px']
            ],
            "${_map}": [
                ["style", "top", '18px'],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '600px'],
                ["transform", "scaleX", '1.03'],
                ["style", "left", '32px'],
                ["style", "width", '94.88%']
            ],
            "${_secretary2}": [
                ["style", "top", '222px'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '635px'],
                ["style", "width", '100%']
            ],
            "${_jointsecretary}": [
                ["style", "top", '403px'],
                ["style", "opacity", '0'],
                ["style", "left", '856px']
            ],
            "${_cloudssmallCopy2}": [
                ["style", "top", '403px'],
                ["style", "opacity", '0.31'],
                ["style", "left", '419px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1615,
            autoPlay: true,
            labels: {
                "start": 0,
                "treas 1": 70,
                "presi": 310,
                "secre": 500,
                "joint": 650,
                "pres1": 1125,
                "pstop": 1615
            },
            timeline: [
                { id: "eid52", tween: [ "style", "${_cloudssmallCopy2}", "opacity", '0.37', { fromValue: '0.31'}], position: 0, duration: 1615 },
                { id: "eid53", tween: [ "style", "${_cloudssmallCopy}", "opacity", '0.37', { fromValue: '0.31'}], position: 0, duration: 1615 },
                { id: "eid32", tween: [ "transform", "${_president2}", "rotateZ", '314deg', { fromValue: '-47deg'}], position: 1125, duration: 490 },
                { id: "eid54", tween: [ "style", "${_cloudssmall}", "opacity", '0.37', { fromValue: '0.31'}], position: 0, duration: 1615 },
                { id: "eid92", tween: [ "color", "${_Text10}", "color", 'rgba(3,98,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,247,0,1.00)'}], position: 0, duration: 1615 },
                { id: "eid111", tween: [ "style", "${_president}", "opacity", '0.990000', { fromValue: '0'}], position: 250, duration: 60 },
                { id: "eid112", tween: [ "style", "${_president}", "opacity", '0', { fromValue: '0.990000'}], position: 310, duration: 44 },
                { id: "eid114", tween: [ "style", "${_president}", "opacity", '0', { fromValue: '0'}], position: 1615, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Text11}", "left", '512px', { fromValue: '434px'}], position: 0, duration: 1615 },
                { id: "eid74", tween: [ "style", "${_jointsecretary}", "opacity", '0', { fromValue: '0'}], position: 517, duration: 0 },
                { id: "eid73", tween: [ "style", "${_jointsecretary}", "opacity", '0', { fromValue: '1'}], position: 615, duration: -98 },
                { id: "eid72", tween: [ "style", "${_jointsecretary}", "opacity", '1', { fromValue: '0'}], position: 615, duration: 35 },
                { id: "eid68", tween: [ "style", "${_jointsecretary}", "opacity", '0', { fromValue: '1'}], position: 650, duration: 55 },
                { id: "eid94", tween: [ "color", "${_Text11}", "color", 'rgba(255,247,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,131,114,1.00)'}], position: 0, duration: 1615 },
                { id: "eid33", tween: [ "style", "${_treasurer}", "left", '148px', { fromValue: '148px'}], position: 1615, duration: 0 },
                { id: "eid61", tween: [ "style", "${_treas}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 70 },
                { id: "eid62", tween: [ "style", "${_treas}", "opacity", '0', { fromValue: '1'}], position: 70, duration: 70 },
                { id: "eid96", tween: [ "style", "${_Text11}", "font-size", '16px', { fromValue: '23px'}], position: 0, duration: 1615 },
                { id: "eid82", tween: [ "style", "${_secretary2}", "opacity", '1', { fromValue: '0'}], position: 473, duration: 27 },
                { id: "eid81", tween: [ "style", "${_secretary2}", "opacity", '0.000000', { fromValue: '1'}], position: 500, duration: 17 },
                { id: "eid1", tween: [ "style", "${_treasurer}", "opacity", '1', { fromValue: '1'}], position: 550, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-4130041");
