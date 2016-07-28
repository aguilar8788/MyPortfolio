app.factory('dataTransfer', function(){
    var savedData = [];
    return {
        setData: function(data) {
            savedData.push(data);
        },
        getData: function() {
            return savedData;
        }
    }
});

app.controller("SplashController", function ($scope, $http, dataTransfer, $stateParams) {
    $scope.splash = {};
    $scope.splash.test = "Splash";
})

app.controller("AboutController", function ($scope, $http, dataTransfer, $stateParams) {
    $scope.about = {};
    $scope.about.test = "About";
})

app.controller("PortfolioController", function($scope, $http, dataTransfer, $stateParams) {
    $scope.portfolio = {};
    $scope.portfolio.test = "Port";

})

app.controller("BlogController", function($scope, $http, dataTransfer, $stateParams) {
    $scope.blog = {};
    $scope.blog.test = "Blog";

})
