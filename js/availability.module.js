angular
    .module('bc-availability', [])
    .controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    window.browzine.primo.searchResult($scope);
  }) 
    .component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController',
    template: '<hathi-trust-availability ignore-copyright="true" hideOnline="false" entity-id="https://login.bc.edu/idp/shibboleth"></hathi-trust-availability>'
  });
