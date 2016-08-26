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

app.controller("AdminController", function($scope, $http, dataTransfer, $stateParams) {



    $scope.formSubmit = function() {
        var body = {
           title: $scope.post.title,
           url: $scope.post.url,
           thumbnail: $scope.post.thumbnail,
           description: $scope.post.description
        }
        $http.post("https://petesportfolioserver.herokuapp.com/work", body);
    }
})


