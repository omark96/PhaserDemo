demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#0033cc";
        
        addChangeStateEventListeners();
    },
    update: function(){}
};