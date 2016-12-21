(function (angular) {
  'use strict';

  angular.module('QNgPubSub', []);

})(angular);

(function(angular) {
	'use strict';

	QNgPubSubService.$inject = ["$window", "$log"];
	angular.module('QNgPubSub').factory('QNgPubSubService', QNgPubSubService);

	function QNgPubSubService($window, $log) {
		// Keep a local reference to QPubSub service and delete it from window
		// object, so that clients do not use it directly.
		var QPubSub = $window.QPubSub;

		// Delete QPubSubService from window so it's not globally accessible.
		if ($window.QPubSub) {
			try {
				delete $window.QPubSub;
				$log.debug('QPubSub deleted from window object.');
			} catch (e) {
				$window.QPubSub = undefined;
				$log.debug('QPubSub undefined from window object.');
			}
		}

		return QPubSub;
	}

})(angular);
