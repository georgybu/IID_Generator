'use strict';

angular.module('iid', [ 'iid.mainCtrl' ]);
angular.module('iid.mainCtrl', []).controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ["$scope"];
function mainCtrl  ( $scope ) {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getInc(num, i) {
        var inc = Number(num)*((i%2)+1);
        return (inc>9)?inc-=9:inc;
    }

    function getIid() {
        var iid="", num, counter=0;
        for(var i=0;i<8;i++) {
            num=getRandomInt((i<2)?2:0,(i<2)?3:9);
            iid+=num.toString();
            counter+=getInc(num,i);
        }
        return iid+(10-(counter%10)).toString();
    }

    function checkIid(s) {
        var sID = String(s);
        if ((sID.length != 9) || (isNaN(sID))) return false;
        var counter = 0, incNum;
        for (var i = 0; i < 9; i++) {
            incNum = Number(sID.charAt(i));
            incNum *= (i % 2) + 1;
            if (incNum > 9) incNum -= 9;
            counter += incNum;
        }
        return (counter % 10 === 0);
    }

    $scope.iid = null;
    $scope.checkStatus = null;

    $scope.generate = function() {
        $scope.checkStatus = false;
        while (!$scope.checkStatus) {
            $scope.iid = getIid();
            $scope.checkStatus = checkIid($scope.iid);
        }
    };

    $scope.check = function() {
        $scope.checkStatus = checkIid($scope.iid);
    };

}