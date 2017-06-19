
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){this.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'click'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){this.play(0);});
//Edge binding end
})("click");
//Edge symbol end:'click'
})(jQuery,AdobeEdge,"EDGE-605567244");