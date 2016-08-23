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
    var url = function() {
            if($location.url() == "/") {
                console.log("index")
                $scope.hidenav = true;
            };
        }

        url();
})

app.controller("SplashController", function ($scope, $http, dataTransfer, $stateParams, $location) {
    $scope.splash = {};
    $scope.splash.backgroundImage = true;
    $scope.splash.test = "Splash";
    $http.get("https://petesportfolioserver.herokuapp.com/work").then(function(data) {
        console.log(data.data);
    })
    var url = function() {
        if($location.url() == "/") {
            console.log("index")
            $scope.hidenav = true;
        };
    }

    url();
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
