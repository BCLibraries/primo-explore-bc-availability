angular
  .module('bc-availability', [])
  .controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    this.$onInit = function () {
		var fa=this;
		fa.linktofa = fa.parentCtrl.result.pnx.display.lds34;
		if(fa.linktofa) {
		  fa.faLink = getLinkData(fa.linktofa[0]);
		}
		function getLinkData(string) {
		  var array = string.split(/\$\$[A-Z]/);
		  return array;
		}
		window.browzine.primo.searchResult($scope);
	};
  })
  .component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController',
    templateUrl:'primo-explore-bc-availability/html/bc-availability.html'
  });