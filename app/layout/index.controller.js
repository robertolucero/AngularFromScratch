(function(){
    'use strict';

    angular
    .module(['app'])
    .controller('IndexController',IndexController);

    function IndexController()
    {
        var vm = this;
        vm.title = 'Angular from Scratch';
        vm.menus = [
                    {name:'chapter 2', url:"'C:/GITRepo/AngularFromScratch/app/chapter2/chaptertwo.html'"}, 
                    {name:'chapter 3', url:"'C:/GITRepo/AngularFromScratch/app/chapter3/chapterthree.html'"}
                    ];
    }

})();