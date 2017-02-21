angular
.module('myApp')
.controller('recordsCtrl', recordsCtrl);


recordsCtrl.$inject = ['recordsData','$scope','$state'];
function recordsCtrl(recordsData,$scope,$state) {
    recordsData.records().success(function (data) {
        message = data.length > 0 ? "" : "暂无数据";
        $scope.records = data;
    }).error(function (e) {
        console.log(e);
        message = "Sorry, something's gone wrong ";
    });

    $scope.findUserByTelephone = function(telephone) {
        recordsData.findUserByTelephone(telephone).success(function(data) {
            //成功则data为查询到的用户，其中包含用户_id, telephone, name三个字段，如果电话不存在，则data为空
            if(data) {
                $scope.foundUser = data; // 如果用户存在，则储存在foundUser变量中

            } else {
                //这里处理用户不存在
            }
        }).error(function (e) {
            console.log(e);
            message = "Sorry, something's gone wrong ";            
        })
    }
}

