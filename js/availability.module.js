angular
    .module('bc-availability', [])
    .controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    window.browzine.primo.searchResult($scope);
  }) 
    .component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController',
	template: '<hathi-trust-availability hideOnline="true"></hathi-trust-availability>'
  });
