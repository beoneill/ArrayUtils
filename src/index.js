(function() {
    
    var deepEqual = require('deep-equal')

    var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};
    
    var JSUtil = function() {
        return new JSUtil.init();
    }

    JSUtil.prototype = {
        intersect: function(...arrays) {
            for(let parameter of arrays) {
                if(!Array.isArray(parameter)) {
                    throw new Error("Arguments must be of type array");
                }
            }
            
            let commonEntries = [];

            for(let entry of arrays[0]) {
                if(this.arraysContainElement(entry, ...arrays)) {
                    if (!commonEntries.includes(entry)) {
                        commonEntries.push(entry);   
                    }
                }
            }

            return commonEntries;
        },

        contains: function(element, ...arrays) {
            for (let i=0; i<arrays.length; i++) {
                const found = arrays[i].filter(current => {
                    return deepEqual(current, element);
                }).length > 0;
                
                if(found) {
                    return true;
                }
            }
    
            return false;
        }, 

        arraysContainElement: function(element, ...arrays) {
            for (let i=0; i<arrays.length; i++) {
                const found = arrays[i].filter(current => {
                    return deepEqual(current, element);
                }).length > 0;
                
                if(!found) {
                    return false;
                }
            }
    
            return true;
        },

        arrayForElement: function(element, ...arrays) {
            for (let i=0; i<arrays.length; i++) {
                const found = arrays[i].filter(current => {
                    return deepEqual(current, element);
                }).length > 0;
                
                if(found) {
                    return arrays[i];
                }
            }
        },

        isEqual: function(a, b) {
            return deepEqual(a, b);
        }
    };

    JSUtil.init = function() {
        var self = this;
    }

    JSUtil.init.prototype = JSUtil.prototype;

    root.JSUtil = root.J$ = JSUtil();

}());