angular
  .module('bc-availability', [])
  .controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    this.$onInit = function () {
		var fa=this;
		fa.faLink = fa.parentCtrl.result.pnx.display.lds34;
		window.browzine.primo.searchResult($scope);
	};
  })
  .component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController',
    templateUrl:'primo-explore-bc-availability/html/bc-availability.html'
  });