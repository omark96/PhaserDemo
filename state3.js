demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#ff0066";
        
        addChangeStateEventListeners();
    },
    update: function(){}
};