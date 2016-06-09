angular.module('game.controller.main',[])
.controller('MainCtrl',['$scope','$timeout',function($scope,$timeout){
    
$scope.dialogsArray=[{
    text:'Привет',
    class:'_dialogLeft',
    img:'drakon.png'

},{
    text:'Здорово',
    class:'_dialogRight',
    img:'men.png'

},
{
    text:'Это короткий текст',
    class:'_dialogRight',
    img:'men.png'

}]

$scope.buttonsArray=[{
    img:'buttonUp.png',
    text:'Добавить текст через 1 секунду слава',
    action:{
        time:1,
        class:'_dialogLeft',
        img:'drakon.png',
        text:'Добавлен текст 1 секунда Добавлен текст 1 секунда Добавлен текст 1 секунда Добавлен текст 1 секунда Добавлен текст 1 секунда Добавлен текст 1 секунда Добавлен текст 1 секунда Добавлен текст 1 секунда Добавлен текст 1 секунда'
    }
    
},
{
    img:'buttonUp.png',
    text:'Добавить текст через 5 секунду справо',
    action:{
        time:5,
        class:'_dialogRight',
        img:'men.png',
        text:'Добавлен текст 5 секунд Добавлен текст 5 секунд Добавлен текст 5 секунд Добавлен текст 5 секунд Добавлен текст 5 секунд Добавлен текст 5 секунд Добавлен текст 5 секунд Добавлен текст 5 секунд Добавлен текст 5 секунд Добавлен текст 5 секунда Добавлен текст 5 секунд'
    }
     
}]

 
// добавление через интервал
$scope.AddText=function(indexButton){
       var time=$scope.buttonsArray[indexButton].action.time*1000;      
       $timeout(function(){$scope.AddDialog($scope.buttonsArray[indexButton]);},time) ;
        
}
//добавление текства
$scope.AddDialog=function(button){
    $scope.dialogsArray.push(
        {
            text:button.action.text,
            class:button.action.class,
            img:button.action.img

        })
}

}]);