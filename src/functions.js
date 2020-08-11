const functions = {
   isWebsite:  function (str){
        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);

        return str.match(regex) ? true : false
    },
    Add: function (a,b) {
        return a+b
    }
    
}

module.exports = functions