
var strUtil = {
    isEmpty: function (str) {
        return !str || str.trim() === '';
    },

    isNotEmpty: function (str) {
        return !this.isEmpty(str);
    },

    isBlank: function (str) {
        return !str || str.trim() === '';
    },

    isNotBlank: function (str) {
        return !this.isBlank(str);
    },

    capitalize: function (str) {
        if (this.isEmpty(str)) {
            return str;
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    truncate: function (str, maxLength) {
        if (this.isEmpty(str) || str.length <= maxLength) {
            return str;
        }
        return str.slice(0, maxLength) + '...';
    }
};