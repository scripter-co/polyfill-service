Window.polyfill.push(function(){function Storage(){}Storage.prototype={clear:function clear(){getKeys(this).forEach(this.removeItem,this)},constructor:Storage,getItem:function(){var key=String(arguments[0]);return key in this?this[key]:null},key:function(){var index=parseInt(arguments[0],10)||0;return getKeys(this)[index]||null},removeItem:function(){var key=String(arguments[0]);for(key in this){delete this[key];--this.length}},setItem:function(){var key=String(arguments[0]),value=String(arguments[1]);if(!(key in this)){++this.length}this[key]=value;updateKeys()}};function getKeys(object){var buffer=[],key;for(key in object){if(Object.prototype.hasOwnProperty.call(object,key)&&key!=="length"){buffer.push(key)}}return buffer}function updateKeys(){var unloadkeys=keys;keys=getKeys(localStorage);unloadkeys.concat(keys).forEach(function(key){if(key in localStorage){element.setAttribute(userdata+key,localStorage[key])}else{element.removeAttribute(userdata+key)}});element.setAttribute(userdata,keys.join(","));element.save(userdata)}var localStorage=window.localStorage=new Storage,element=window.document.lastChild.lastChild.appendChild(window.document.createElement("x-local-storage")),userdata="userdata",keys;try{element.addBehavior("#default#"+userdata);element.load(userdata)}catch(error){}keys=element.getAttribute(userdata)?element.getAttribute(userdata).split(","):[];localStorage.length=keys.length;keys.forEach(function(key){localStorage[key]=element.getAttribute(userdata+key)});window.attachEvent("onunload",updateKeys)});