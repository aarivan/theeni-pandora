(function () {
    angular
        .module('PRJ')
        .controller('mainController', mainController);

    function mainController(currentUser) {
        var model = this;
        model.currentUser = currentUser;
        model.userId = currentUser._id;
    }
})();
