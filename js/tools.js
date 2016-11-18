var app = angular.module('mainApp', []);

app.directive('ngCheckbox', function() {
    return {
        restrict: 'A',
        scope: false,
        link: link
    };

    function link(scope, element, attrs) {
        element.addClass('hidden-input').wrap('<span/>');
        element.parent().addClass(attrs.type);

        scope.$watch(attrs.ngModel, function updateUI() {
            element.parent().toggleClass('checked', jQuery(element).is(':checked'));
        });

        attrs.$observe('label', function(newLabel) {
            element.parent().find('span').text(newLabel);
        });
    }
});

app
    .controller('MainController', function($scope, $http) {

    })

jQuery(function($){


    var handlers = [
        menu
    ];

    $.each(handlers, function(i, handler){
        try {
            handler.call();
        } catch (e) {
            console.log('Error! ' + e);
        }
    });

    function menu() {
        $('header .mainMenu')
            .on('click', function() {
                $('.hamburger').toggleClass('is-active');
                $(this).toggleClass('open');
            })
    }
});