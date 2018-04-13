angular
    .module('app',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home',{
                url: "/",
                templateUrl:"/layout/home.html",
            })
            .state('chapter2',{
                url: "/chapter2/chaptertwo.html",
                templateUrl:"/chapter2/chaptertwo.html",
                controller:"ChapterTwoController"
            });

    });