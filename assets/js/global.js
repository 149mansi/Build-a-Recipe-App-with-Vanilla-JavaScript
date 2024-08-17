/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

/**Add event on multiple events
 * @param {NodeList} $elements
 * @param{String} eventType string
 * @param{Function} callback function
 */

window.addEventListener=($elements,eventType,callback)=>{
    for(const $element of $elements) {
      $element.addEventListener(eventType,callback);
    }
    
}