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

app.controller("IndexController", function($scope, $http) {

})

app.controller("SplashController", function ($scope, $http, dataTransfer, $stateParams) {
    $scope.splash = {};
    $scope.splash.backgroundImage = true;
    $scope.splash.test = "Splash";
    $http.get("https://petesportfolioserver.herokuapp.com/work").then(function(data) {
        console.log(data.data);
    })
})

app.controller("AboutController", function ($scope, $http, dataTransfer, $stateParams) {
    $scope.about = {};
    $scope.about.test = "About";
})

app.controller("PortfolioController", function($scope, $http, dataTransfer, $stateParams) {
    $scope.portfolio = {};
    $scope.portfolio.work = [];
    $http.get("https://petesportfolioserver.herokuapp.com/work").then(function(data) {
        $scope.portfolio.work = data.data;
        console.log($scope.portfolio.work)
    })

})

app.controller("BlogController", function($scope, $http, dataTransfer, $stateParams) {
    $scope.blog = {};
    $scope.blog.test = "Blog";

})
