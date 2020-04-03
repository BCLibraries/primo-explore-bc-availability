angular
    .module('bc-availability', [])
    .controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    window.browzine.primo.searchResult($scope);
  }) 
    .component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController',
	template: '<hathi-trust-availability ignore-copyright="true" hideOnline="false"></hathi-trust-availability><p class="avail-note">Login required. Click the Login Button in Hathitrust after following the link above.</p>'
  });
