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

            const deduplicatedArray = this.removeDuplicates(arrays[0]);

            for(let entry of deduplicatedArray) {
                if(this.arraysContainElement(entry, ...arrays.slice(1))) {
                    commonEntries.push(entry);   
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

        removeDuplicates: function(array) {
            const deduplicatedArray = new Array(array[0]);
            
            for(let entry of array.slice(1)) {
                let add = true;
                for(let uniqueEntry of deduplicatedArray) {
                    if(deepEqual(uniqueEntry, entry)) {
                        add = false;
                    }
                }
                if(add) deduplicatedArray.push(entry);
            }

            return deduplicatedArray;
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