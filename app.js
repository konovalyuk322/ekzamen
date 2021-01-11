(function () {
    
    'use strict';

    var factory2 = new AvtoListService();

    angular.module('ControllerAsApp', [])
        .controller('AvtoListController1', AvtoListController1)
        .controller('AvtoListController2', AvtoListController2)
        .factory('AvtoListFactory', AvtoListFactory);

    AvtoListController1.$inject = ['AvtoListFactory'];

    function AvtoListController1(AvtoListFactory) {
        var list1 = this;

        var avtoList = AvtoListFactory();

        list1.item = avtoList.getItems();

        list1.removeItem = function (index) {
            avtoList.removeItem(index);
        
        
        };
    }

    AvtoListController2.$inject = ['AvtoListFactory'];

    function AvtoListController2(AvtoListFactory) {
        var list2 = this;

        var avtoList = AvtoListFactory();

        list2.item = avtoList.getBoughtItems();
    }

    function AvtoListService() {
        var service = this;

        var items = [
            {
                name: 'BMW',
                quantity: 5
            },
            {
                name: 'Mercedes',
                quantity: 4
            },
            {
                name: 'Audi',
                quantity: 6
            },
            {
                name: 'Tesla',
                quantity: 5
            },
            {
                name: 'Porshe',
                quantity: 7
            },
        ];
        var boughtItems = [];

        service.removeItem = function (itemIndex) {
            boughtItems.push(items[itemIndex]);
            items.splice(itemIndex, 1);
        };

        service.getItems = function () {
            return items;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }

    function AvtoListFactory() {
        var factory = function () {
            return factory2;
        };
        return factory;
    }
})();