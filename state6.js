demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#ff6666";
        
        addChangeStateEventListeners();
    },
    update: function(){}
};