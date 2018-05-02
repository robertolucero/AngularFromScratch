(function() {
  "use strict";

  angular.module("app").controller("LoginController", LoginController);

  function LoginController() {
    var vm = this;

    vm.firstName = undefined;
    vm.lastName = undefined;
    vm.loginUser = loginUser;
    vm.loginMessage = undefined;

    function loginUser() {
        vm.loginMessage = "Thanks, " + vm.firstName + " we added you!!";
    }
  }
})();
