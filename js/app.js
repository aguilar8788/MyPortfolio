var app = angular.module("portfolio", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("splash", {
            url: "/",
            templateUrl: "/templates/splash.html",
            controller: "SplashController"
        })
        .state("about", {
            url: "/about",
            templateUrl: "/templates/about.html",
            controller: "AboutController"
        })
        .state("portfolio", {
            url: "/portfolio",
            templateUrl: "/templates/portfolio.html",
            controller: "PortfolioController"
        })
        .state("blog", {
            url: "/blog",
            templateUrl: "/templates/blog.html",
            controller: "BlogController"
        })

    $locationProvider.html5Mode(true);
})

window.addEventListener("hashchange", function() { scrollBy(0, -50) })
