(function(){
    'use strict';

    angular
    .module(['app'])
    .controller('IndexController',IndexController);

    function IndexController()
    {
        var vm = this;
        vm.title = 'Angular from Scratch';
        vm.selectedmenu = '';
        vm.menus = [
                    {name:'chapter 2', url:"chapter2"}, 
                    {name:'chapter 3', url:"chapter3"}
                    ];
    }

})();