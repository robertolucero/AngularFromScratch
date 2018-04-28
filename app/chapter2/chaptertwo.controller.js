(function() {
  "use strict";
  angular
    .module("app")
    .controller("ChapterTwoController", ChapterTwoController);

  function ChapterTwoController($scope) {
    var vm = this;
    vm.chapterTitle = "Chapter 2";
    vm.show = undefined;
    vm.hideAndShow = hideAndShow;
    vm.status = "Show";
    vm.isError = false;
    vm.isWarning = false;
    vm.showError = showError;
    vm.showWarning = showWarning;
    vm.message = "";
    vm.restaurants = [
      { name: "The Handsome Heifer", cuisine: "BBQ" },
      { name: "Green's Green Greens", cuisine: "Salads" },
      { name: "House of Fine Fish", cuisine: "Seafood" }
    ];
    vm.selectRestaurant = selectRestaurant;
    vm.selectedRestaurant = -1;
    vm.bill = {};
    vm.items = [
      { title: "Pain pots", quantity: 8, price: 3 },
      { title: "Polka dots", quantity: 17, price: 14 },
      { title: "Pebbles", quantity: 5, price: 7 }
    ];
    vm.totalCart = totalCart;
    vm.subtotal = subtotal;
    vm.textWithoutCapital = 'test it';

    $scope.$watch(vm.totalCart, calculateDiscount);

    function hideAndShow() {
      vm.show = !vm.show;
      vm.status = vm.show == true ? "Hide" : "Show";
    }

    function showError() {
      vm.message = "This is an error.";
      vm.isError = true;
      vm.isWarning = !vm.isError;
    }

    function showWarning() {
      vm.message = "This is a warning.";
      vm.isWarning = true;
      vm.isError = !vm.isWarning;
    }

    function selectRestaurant(index) {
      vm.selectedRestaurant = index;
    }

    function totalCart() {
      var total = 0;
      var len = vm.items.length;

      for (var i = 0; i < len; i++) {
        total += vm.items[i].price * vm.items[i].quantity;
      }

      return total;
    }

    function subtotal() {
      return vm.totalCart() - vm.bill.discount;
    }

    function calculateDiscount(newValue, oldValue, scope) {
      vm.bill.discount = newValue > 100 ? 10 : 0;
    }
  }
})();
