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
        vm.isError = false;
        vm.isWarning = false;
        vm.showError = showError;
        vm.showWarning = showWarning;
        vm.message = '';


        function hideAndShow()
        {
            vm.show = !vm.show;
            vm.status = (vm.show == true ? 'Hide' : 'Show');
        }

        function showError()
        {
            vm.message = "This is an error.";
            vm.isError = true;
            vm.isWarning = !v.isError;
        }

        
        function showWarning()
        {
            vm.message = "This is a warning.";
            vm.isWarning = true;
            vm.isError = !v.isWarning;
        }
    }
})();