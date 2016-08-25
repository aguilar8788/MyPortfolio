app.controller("IndexController", function($scope, $http) {

})

app.controller("SplashController", function ($scope, $http, dataTransfer, $stateParams, $location) {
    $scope.splash = {};
    $scope.splash.backgroundImage = true;
})

app.controller("AboutController", function ($scope, $http, dataTransfer, $stateParams) {

})

app.controller("PortfolioController", function($scope, $http, dataTransfer, $stateParams) {
    $scope.portfolio = {};
    $scope.portfolio.work = [];
    $http.get("https://petesportfolioserver.herokuapp.com/work").then(function(data) {
        $scope.portfolio.work = data.data;
    })
})

app.controller("BlogController", function($scope, $http, dataTransfer, $stateParams) {

})
