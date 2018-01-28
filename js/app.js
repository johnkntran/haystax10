// (() => {
    var haystax = angular.module('haystaxApp', []);

    haystax.controller('MyController', function MyController($scope, $http) {

        $http.get('http://127.0.0.1/api/twitter_search.py').then(
            function(response) {
                let ajaxRes = response.data.result;
                $scope.tweets = ajaxRes ? response.data.payload: [];
            }
        );

        $scope.submitSearch = function(keyEvent) {
            if (keyEvent.which === 13) {
                let payloadData = JSON.stringify({username: $scope.searchQuery});
                console.log(payloadData);
                $http.post('http://127.0.0.1/api/twitter_search.py', payloadData).then(
                    function(response) {
                        let ajaxRes = response.data.result;
                        $scope.tweets = ajaxRes ? response.data.payload: [];
                    }
                );
            }
        };

    });
// })();