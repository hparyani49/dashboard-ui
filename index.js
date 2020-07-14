angular.module('myApp', [])
    .controller('header', ['$scope', function($scope){
        $scope.languages = [{
            language: 'ENG',
            flagClass: ''
        },{
            language: 'HIN',
            flagClass: ''
        },{
            language: 'MAN',
            flagClass: ''
        },{
            language: 'RUS',
            flagClass: ''
        },{
            language: 'TAM',
            flagClass: ''
        },{
            language: 'MAR',
            flagClass: ''
        }]
    }])
    .controller('leftController', ['$scope', function ($scope) {
        $scope.leftArr = [{
            label: 'Dashboard',
            isActive: true,
            iconClass: 'fa-cube',
            rightIcon: 'fa-sort-down',
            subArr: [{ label: 'Page Visitors' }, { label: 'Post Performance' }, { label: 'Team Overall' }]
        }, {
            label: 'Calendar',
            isActive: false,
            iconClass: 'fa-calendar-plus-o'
        }, {
            label: 'Inbox',
            iconClass: 'fa-inbox',
            isActive: false,
            rightIcon: 'fa-arrows-v',
            subArr: [{ label: 'Messages' }, { label: 'Tweets' }]
        }, {
            label: 'Invoicing',
            isActive: false,
            iconClass: 'fa-credit-card'
        }, {
            label: 'Lab / Experimental',
            isActive: false,
            iconClass: 'fa-glass'
        }];
        $scope.leftArrActive = 0;
        $scope.subSecActive = 0;
        $scope.recentlyViewed = [{ label: 'Overall Performance' }, { label: 'Invoice #940' }, { label: 'Customer: Minera Viewer' }];
        $scope.currentPage = 'dribbble.com/janlosert';
        $scope.pageId = '575940-1811';

        $scope.selectOption = function(index){
            $scope.leftArrActive = $scope.leftArrActive == index ? null : index;
            $scope.subSecActive = $scope.leftArrActive == index ? $scope.subSecActive : 0;
        }

        $scope.selectSubSec = function(index){
            $scope.subSecActive = index;
        }
    }])
    .controller('RightController', ['$scope','$timeout', function ($scope,$timeout) {
        $scope.dailyVisits = [100,220,120,140,150,80,160,110,170,50,70,170,160,100,80,120,130,90,140,30,40,185,200,100,115,135,105,180,100,60,140].reverse();
        $scope.months = ['January','February','March','April','June','July','August','September','October','November','December'];
        $scope.years = ['2018','2019','2020'];
        $scope.activeMonth = 0;
        $scope.activeYear = 0;
        $scope.activeDay = null;
        $scope.popoverStyle = {'display':'none'};
        $scope.popoverData = {visitor: 0, day: ''};

        $scope.tiles = [{
            label: 'RealTime Users',
            count: '56',
            percentage: '9.8',
            isDown: false,
            graphData: []
        }, {
            label: 'Total Visits',
            count: '54,598',
            percentage: '11.9',
            isDown: true,
            graphData: []
        }, {
            label: 'Bounce Rate',
            count: '73.67%',
            percentage: '12.2',
            isDown: false,
            graphData: []
        }, {
            label: 'RealTime Users',
            count: '1m 4s',
            percentage: 19.6,
            isDown: false,
            graphData: []
        }];
        $scope.mostVisitedPages = [{
            pageName: '/store/',
            visitor: 4890,
            uniqueVisitor: 3985,
            bounceRate: 81.56
        },{
            pageName: '/store/symbol',
            visitor: 3785,
            uniqueVisitor: 3182,
            bounceRate: 62.56
        },{
            pageName: '/store/dashboard',
            visitor: 2985,
            uniqueVisitor: 2115,
            bounceRate: 58.76
        },{
            pageName: '/store/webflow-cards',
            visitor: 2440,
            uniqueVisitor: 1789,
            bounceRate: 39.59
        }]

        $scope.socialMediaTraffic = [{
            source: 'Instagram',
            visitor: 3550,
            percentage: 80
        },{
            source: 'Facebook',
            visitor: 2236,
            percentage: 50
        },{
            source: 'Twitter',
            visitor: 1795,
            percentage: 40
        },{
            source: 'LinkedIn',
            visitor: 62,
            percentage: 10
        }]
        
        $scope.focusDay = function(e, index){
            $scope.activeDay = index;
            var el = angular.element(e.target);
            $scope.popoverData = {visitor: $scope.dailyVisits[index], day: index+1 + ' ' + $scope.months[$scope.activeMonth] + ' '+$scope.years[$scope.activeYear]};
            $scope.popoverStyle = {left: el.prop('offsetLeft')+15, display: 'flex'};
        }
        $scope.blurDay = function(e){
            $scope.activeDay = null;
            $scope.popoverStyle = {'display':'none'};
        }
    }])
