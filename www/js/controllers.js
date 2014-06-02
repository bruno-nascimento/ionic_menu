angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope) {
    })

    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 },
            { title: 'Metal1', id: 7 },
            { title: 'Metal2', id: 8 },
            { title: 'Metal3', id: 9 },
            { title: 'Metal4', id: 10 },
            { title: 'Metal5', id: 11 },
            { title: 'Metal6', id: 12 },
            { title: 'Metal7', id: 13 },
            { title: 'Metal8', id: 14 },
            { title: 'Metal9', id: 15 },
            { title: 'Metal10', id: 16 },
            { title: 'Metal11', id: 17 },
            { title: 'Metal12', id: 18 },
            { title: 'Metal13', id: 19 },
            { title: 'Metal14', id: 20 },
            { title: 'Metal15', id: 21 },
            { title: 'Metal16', id: 22 },
            { title: 'Metal17', id: 23 },
            { title: 'Metal18', id: 24 },
            { title: 'Metal19', id: 25 },
            { title: 'Metal20', id: 26 },
            { title: 'Metal21', id: 27 },
            { title: 'Metal22', id: 28 },
            { title: 'Metal23', id: 29 },
            { title: 'Metal24', id: 30 }
        ];
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    })
