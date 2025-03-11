/* 
Availability Line modifications
1. Add Finding Aid links
2. Hide call # if Best Location is offsite
 */
angular
  .module('bc-availability', [])
  .controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    this.$onInit = function () {
		var fa=this;
		fa.faLink = fa.parentCtrl.result.pnx.display.lds34;
		window.browzine.primo.searchResult($scope);

    var vm = this;
    if (vm.parentCtrl.result.delivery.bestlocation != null) {
      vm.isOffsite = vm.parentCtrl.result.delivery.bestlocation.subLocation.includes("Offsite");
      if (vm.isOffsite) {
        vm.parentCtrl.result.delivery.bestlocation.callNumber = '';
      }
    }
	};
  })
  .component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController',
    templateUrl:'primo-explore-bc-availability/html/bc-availability.html'
  });