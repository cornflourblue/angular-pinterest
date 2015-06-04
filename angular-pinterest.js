/**
 * AngularJS directives for Pinterest buttons and widgets
 * @author Jason Watmore <jason@pointblankdevelopment.com.au> (https://www.pointblankdevelopment.com.au)
 * @version 1.1.0
 */
(function () {
    'use strict';

    angular
        .module('angular-pinterest', [])
        .directive('pinIt', pinIt)
        .directive('pinFollow', pinFollow)
        .directive('pinWidget', pinWidget)
        .directive('pinProfile', pinProfile)
        .directive('pinBoard', pinBoard);

    /* Pin It Button
    ------------------------------*/
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
                loadScript('//assets.pinterest.com/js/pinit.js', render, 'parsePins', { 'data-pin-build': 'parsePins' });
            } else {
                render();
            }

            var watchAdded = false;
            function render() {
                if (!scope.description && !watchAdded) {
                    // wait for angular to bind scope data
                    watchAdded = true;
                    var unbindWatch = scope.$watch('description', function (newValue, oldValue) {
                        if (newValue) {
                            render();

                            // unbind the watch, it only needs to run once
                            unbindWatch();
                        }
                    });
                } else {
                    // set the height based on the size and shape, the button 
                    // defaults to small so height only has to be set for large buttons
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
                            'data-pin-height="' + height + '"></a>'
                    );
                    $window.parsePins(element.parent()[0]);
                }
            }
        }
    }

    /* Follow Button
    ------------------------------*/
    pinFollow.$inject = ['$window'];
    function pinFollow($window) {
        return {
            restrict: 'E',
            scope: {
                username: '=',
                fullname: '='
            },
            link: link
        };

        function link(scope, element, attrs) {
            if (!$window.parsePins) {
                loadPinterestScript(render);
            } else {
                render();
            }

            var watchAdded = false;
            function render() {
                if (!scope.username && !watchAdded) {
                    // wait for angular to bind scope data
                    watchAdded = true;
                    var unbindWatch = scope.$watch('username', function (newValue, oldValue) {
                        if (newValue) {
                            render();

                            // unbind the watch, it only needs to run once
                            unbindWatch();
                        }
                    });
                } else {
                    element.html(
                        '<a data-pin-do="buttonFollow" href="http://www.pinterest.com/' + scope.username + '/">' + scope.fullname + '</a>'
                    );
                    $window.parsePins(element.parent()[0]);
                }
            }
        }
    }


    /* Pin Widget
    ------------------------------*/
    pinWidget.$inject = ['$window'];
    function pinWidget($window) {
        return {
            restrict: 'E',
            scope: {
                pinId: '='
            },
            link: link
        };

        function link(scope, element, attrs) {
            if (!$window.parsePins) {
                loadPinterestScript(render);
            } else {
                render();
            }

            var watchAdded = false;
            function render() {
                if (!scope.username && !watchAdded) {
                    // wait for angular to bind scope data
                    watchAdded = true;
                    var unbindWatch = scope.$watch('pinId', function (newValue, oldValue) {
                        if (newValue) {
                            render();

                            // unbind the watch, it only needs to run once
                            unbindWatch();
                        }
                    });
                } else {
                    element.html(
                        '<a data-pin-do="embedPin" href="http://www.pinterest.com/pin/' + scope.pinId + '/"></a>'
                    );
                    $window.parsePins(element.parent()[0]);
                }
            }
        }
    }

    /* Profile Widget
    ------------------------------*/
    pinProfile.$inject = ['$window'];
    function pinProfile($window) {
        return {
            restrict: 'E',
            scope: {
                username: '=',
                imageWidth: '=',
                boardHeight: '=',
                boardWidth: '='
            },
            link: link
        };

        function link(scope, element, attrs) {
            if (!$window.parsePins) {
                loadPinterestScript(render);
            } else {
                render();
            }

            var watchAdded = false;
            function render() {
                if (!scope.username && !watchAdded) {
                    // wait for angular to bind scope data
                    watchAdded = true;
                    var unbindWatch = scope.$watch('username', function (newValue, oldValue) {
                        if (newValue) {
                            render();

                            // unbind the watch, it only needs to run once
                            unbindWatch();
                        }
                    });
                } else {
                    element.html(
                        '<a data-pin-do="embedUser" href="http://www.pinterest.com/' + scope.username + '/" ' + 
                            'data-pin-scale-width="' + scope.imageWidth + '" ' +
                            'data-pin-scale-height="' + scope.boardHeight + '" ' +
                            'data-pin-board-width="' + scope.boardWidth + '"></a>'
                    );
                    $window.parsePins(element.parent()[0]);
                }
            }
        }
    }

    /* Board Widget
    ------------------------------*/
    pinBoard.$inject = ['$window'];
    function pinBoard($window) {
        return {
            restrict: 'E',
            scope: {
                username: '=',
                boardName: '=',
                imageWidth: '=',
                boardHeight: '=',
                boardWidth: '='
            },
            link: link
        };

        function link(scope, element, attrs) {
            if (!$window.parsePins) {
                loadPinterestScript(render);
            } else {
                render();
            }

            var watchAdded = false;
            function render() {
                if (!scope.username && !watchAdded) {
                    // wait for angular to bind scope data
                    watchAdded = true;
                    var unbindWatch = scope.$watch('username', function (newValue, oldValue) {
                        if (newValue) {
                            render();

                            // unbind the watch, it only needs to run once
                            unbindWatch();
                        }
                    });
                } else {
                    element.html(
                        '<a data-pin-do="embedBoard" href="http://www.pinterest.com/' + scope.username + '/' + scope.boardName + '" ' + 
                            'data-pin-scale-width="' + scope.imageWidth + '" ' +
                            'data-pin-scale-height="' + scope.boardHeight + '" ' +
                            'data-pin-board-width="' + scope.boardWidth + '"></a>'
                    );
                    $window.parsePins(element.parent()[0]);
                }
            }
        }
    }

    //------------------- private functions ------------------- //

    function loadPinterestScript(callback) {
        loadScript('//assets.pinterest.com/js/pinit.js', callback, 'parsePins', { 'data-pin-build': 'parsePins' });
    }

    // function to load non-angular script and (if required) wait for it to run
    function loadScript(url, callback, propToWaitFor, customScriptAttrs) {
        var d = window.document;
        var s = d.querySelector('script[src="' + url + '"]');

        // add script only once to the page
        if (!s) {
            s = d.createElement('script');
            s.async = true;
            s.src = url;

            // wait for property to load if one was specified, otherwise 
            // run callback function when script is loaded
            s.onload = propToWaitFor ? waitForProp : callback;

            // add custom attributes to script tag if specified
            if (customScriptAttrs) {
                angular.forEach(customScriptAttrs, function (value, key) {
                    s[key] = value;
                });
            }

            d.body.appendChild(s);
        } else {
            propToWaitFor ? waitForProp() : callback();
        }

        // wait for script to run and define property on global 
        // scope, then run callback function
        function waitForProp() {
            if (window[propToWaitFor]) {
                callback();
            } else {
                setTimeout(waitForProp, 250);
            }
        }
    }
})();
