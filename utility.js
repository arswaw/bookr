module.exports = {
    "generateUniqueId": function guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    },

    // Thanks to Coderwall
    "removeEmptyObjectProperties" : function removeFalsy(obj) {
        const newObj = {};
        Object.keys(obj).forEach((prop) => {
          if (obj[prop]) { newObj[prop] = obj[prop]; }
        });
        return newObj;
      }
}