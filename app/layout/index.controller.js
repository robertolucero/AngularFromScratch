(function(){
    'use strict';

    angular
    .module(['app'])
    .controller('IndexController',IndexController);

    function IndexController()
    {
        var vm = this;
        vm.title = 'Angular from Scratch';

    }

})();