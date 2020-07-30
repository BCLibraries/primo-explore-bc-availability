angular
  .module('bc-availability', [])
  .controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    var vm=this;
    vm.linktofa = vm.parentCtrl.result.pnx.links.linktofa;
    vm.faLink = getLinkData(vm.linktofa[0]);
    function getLinkData(string) {
      var array = string.split(/\$\$[A-Z]/);
      return array;
    }
    window.browzine.primo.searchResult($scope);
  }) 
  .component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController',
    templateUrl:'primo-explore-bc-availability/html/bc-availability.html'
  });
