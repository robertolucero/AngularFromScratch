(function(){
    'use strict';
    angular
        .module('app')
        .controller('ChapterTwoController',ChapterTwoController);


    function ChapterTwoController()
    {
        var vm = this;
        vm.chapterTitle = "Chapter 2";
        vm.show = undefined;
        vm.hideAndShow = hideAndShow;
        vm.status = 'Show';
        
        function hideAndShow()
        {
            vm.show = !vm.show;
            vm.status = (vm.show == true ? 'Hide' : 'Show');
        };

    }
})();