/* eslint-env es6 */
/* eslint-disable */
const cmp = {
    greater: function (a, b) {
        return a > b;
    },
    less: function (a, b) {
        return a < b;
    }
}

const isMultipleOf = {
    // is 'a' a multiple of 'b'
   m: function(a, b) { 
        if (a%b == 0 && a >= b){
            return true;
        }
        return false;
   }
}

module.exports = {cmp, isMultipleOf}