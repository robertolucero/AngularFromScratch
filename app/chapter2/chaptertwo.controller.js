(function(){
    angular
        .module('app')
        .controller('ChapterTwoController',ChapterTwoController);


    function ChapterTwoController()
    {
        var vm = this;
        vm.chapterTitle = "Chapter 2";

    }
})();