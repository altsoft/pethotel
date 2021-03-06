/**
 * Do not edit this file manually, it will be overwritten by IDE
 */
require(['environment', 'logger'], function (F, Logger) {
    var global = this;
    F.cacheBust(true);
    //F.export(global);
    require('OwnersView', function(OwnersView){
        var m = new OwnersView();
        m.show();
    }, function(e){
        Logger.severe(e);
        if(global.document){
            var messageParagraph = global.document.createElement('p');
            global.document.body.appendChild(messageParagraph);
            messageParagraph.innerHTML = 'An error occured while require(\'OwnersView\'). Error: ' + e;
            messageParagraph.style.margin = '10px';
            messageParagraph.style.fontFamily = 'Arial';
            messageParagraph.style.fontSize = '14pt';
        }
    });
});