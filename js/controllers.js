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

app.controller("AdminController", function($scope, $http, dataTransfer, $stateParams, $window) {

    $http.get("https://petesportfolioserver.herokuapp.com/work").then(function(data) {
                    $scope.portfolio = data.data;
                })

    $scope.formSubmit = function() {
        var body = {
           title: $scope.title,
           url: $scope.url,
           thumbnail: $scope.thumbnail,
           description: $scope.description
        }
        $http.post("https://petesportfolioserver.herokuapp.com/work", body).then(function(data) {
            console.log(data);
        });

        $scope.title = " ";
        $scope.url = " ";
        $scope.thumbnail = " ";
        $scope.description = " ";
    }

      $scope.deletePost = function(id) {
            $http.delete("https://petesportfolioserver.herokuapp.com/work/" + id).then(function(data) {
                      $window.location.reload();
               });
        }
})

app.controller("EditController", function($scope, $http, dataTransfer, $stateParams, $location) {
    $scope.params = $stateParams;
    console.log($scope.params)
    $http.get("https://petesportfolioserver.herokuapp.com/work/" + $scope.params.id).then(function(data) {
                        $scope.portfolio = data.data;
                        $scope.title = $scope.portfolio[0].title;
                        $scope.url = $scope.portfolio[0].url;
                        $scope.thumbnail = $scope.portfolio[0].thumbnail;
                        $scope.description = $scope.portfolio[0].description;
     })

    $scope.formSubmit = function() {
       var body = {
                 title: $scope.title,
                 url: $scope.url,
                 thumbnail: $scope.thumbnail,
                 description: $scope.description
              }
      $http.put("https://petesportfolioserver.herokuapp.com/work/" + $scope.params.id, body).then(function(data) {
          console.log(data);
      });

      $location.path('/admin')
  }

})


