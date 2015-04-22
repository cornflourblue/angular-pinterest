/**
 * AngularJS directives for Pinterest buttons and widgets
 * @author Jason Watmore <jason@pointblankdevelopment.com.au> (https://www.pointblankdevelopment.com.au)
 * @version 1.0.0
 */
(function () {
    'use strict';

    angular
        .module('angular-pinterest', [])
        .directive('pinIt', pinIt);

    pinIt.$inject = ['$window', '$location'];
    function pinIt($window, $location) {
        return {
            restrict: 'E',
            scope: {
                url: '=',
                description: '=',
                media: '=',
                size: '=',
                shape: '=',
                color: '=',
                config: '='
            },
            link: link 
        };

        function link(scope, element, attrs) {
            if (!$window.parsePins) {
                // Load Pinterest SDK if not already loaded
                (function (d) {
                    var f = d.getElementsByTagName('SCRIPT')[0],
                        p = d.createElement('SCRIPT');
                    p.type = 'text/javascript';
                    p.async = true;
                    p.src = '//assets.pinterest.com/js/pinit.js';
                    p['data-pin-build'] = 'parsePins';
                    p.onload = function () {
                        if (!!$window.parsePins) {
                            renderPinItButton();
                        } else {
                            setTimeout(p.onload, 250);
                        }
                    };
                    f.parentNode.insertBefore(p, f);
                }($window.document));
            } else {
                renderPinItButton();
            }

            var watchAdded = false;
            function renderPinItButton() {
                if (!scope.description && !watchAdded) {
                    // wait for data if it hasn't loaded yet
                    watchAdded = true;
                    var unbindWatch = scope.$watch('description', function (newValue, oldValue) {
                        if (newValue) {
                            renderPinItButton();

                            // only need to run once
                            unbindWatch();
                        }
                    });
                } else {
                    var height = '';
                    if (scope.size === 'large') {
                        if(scope.shape === 'round') {
                            height = 32;
                        } else {
                            height = 28;
                        }
                    }

                    element.html(
                        '<a href="//www.pinterest.com/pin/create/button/' +
                            '?url=' + (scope.url || $location.absUrl()) +
                            '&media=' + scope.media +
                            '&description=' + scope.description + '" ' +
                            'data-pin-do="buttonPin" ' +
                            'data-pin-config="' + (scope.config || '') + '" ' +
                            'data-pin-shape="' + (scope.shape || '') + '" ' + 
                            'data-pin-color="' + scope.color + '" ' +
                            'data-pin-height="' + height + '"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" /></a>'
                    );
                    $window.parsePins(element.parent()[0]);
                }
            }
        }
    }
})();