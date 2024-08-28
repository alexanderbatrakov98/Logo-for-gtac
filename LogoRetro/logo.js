"use strict";

let logoFont = null;

bindEventHandler("OnResourceReady", thisResource, function(event, resource) {
    let fontStream = openFile("RetroRaceDemoItalic.ttf"); 
    if (fontStream != null) {
        logoFont = lucasFont.createFont(fontStream, 22.0); 
        fontStream.close();
    }
});

addEventHandler("OnDrawnHUD", function(event) {
    if (logoFont != null) {
        let logoText = "Connected freeroam";
        
        let hudX = 1300; 
        let hudY = 10;  

        logoFont.render(logoText, [hudX, hudY], 0, 0.5, 0.0, logoFont.size, COLOUR_WHITE, false, false, false, true);
    }
});
