// ==UserScript==
// @name         jAccount Captche
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Yusen Zheng
// @match        https://jaccount.sjtu.edu.cn/jaccount/jalogin?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sjtu.edu.cn
// @grant        none
// @require      https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js
// ==/UserScript==

(function() {
    'use strict';

    console.log("******Begin!******");
    var captcha_src = document.getElementById("captcha-img").src.toString();
    console.log("captcha image url: " + captcha_src)
    Tesseract.recognize(
        captcha_src,
        'eng',
         { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log("captcha text: " + text.replace(/\s*/g,""));
        document.getElementById('captcha').value = text.replace(/\s*/g,"");
        console.log("******Finish!******");
    })
})();
