(function($, Edge, compId) {
  var Composition = Edge.Composition,
    Symbol = Edge.Symbol;
  //Edge symbol: 'stage'
  (function(symbolName) {
    Symbol.bindElementAction(compId, symbolName, "${_Symbol_22}", "click", function(sym, e) {
      sym.getSymbol("Symbol_22").play();
      sym.play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_CONTACT2}", "click", function(sym, e) {
      window.open("http://www.straitcrewing.com.au/contact", "_parent");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_RATES}", "click", function(sym, e) {
      window.open("http://www.straitcrewing.com.au/rates", "_parent");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_CREW2}", "click", function(sym, e) {
      window.open("http://www.straitcrewing.com.au/crew", "_parent");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_ABOUT2}", "click", function(sym, e) {
      window.open("http://www.straitcrewing.com.au/about", "_parent");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_CONTACT2}", "mouseenter", function(sym, e) {
      sym.getSymbol("CONTACT2").play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_CONTACT2}", "mouseleave", function(sym, e) {
      sym.getSymbol("CONTACT2").play("fadeout");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_RATES}", "mouseenter", function(sym, e) {
      sym.getSymbol("RATES").play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_RATES}", "mouseleave", function(sym, e) {
      sym.getSymbol("RATES").play("fadeout");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_CREW2}", "mouseenter", function(sym, e) {
      sym.getSymbol("CREW2").play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_CREW2}", "mouseleave", function(sym, e) {
      sym.getSymbol("CREW2").play("fadeout");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_ABOUT2}", "mouseenter", function(sym, e) {
      sym.getSymbol("ABOUT2").play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_ABOUT2}", "mouseleave", function(sym, e) {
      sym.getSymbol("ABOUT2").play("fadeout");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_ABOUT2}", "mouseover", function(sym, e) {
      sym.getSymbol("ABOUT2").play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_ABOUT2}", "mouseout", function(sym, e) {
      sym.getSymbol("ABOUT2").play("fadeout");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_CREW2}", "mouseover", function(sym, e) {
      sym.getSymbol("CREW2").play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_CREW2}", "mouseout", function(sym, e) {
      sym.getSymbol("CREW2").play("fadeout");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_RATES}", "mouseover", function(sym, e) {
      sym.getSymbol("RATES").play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_RATES}", "mouseout", function(sym, e) {
      sym.getSymbol("RATES").play("fadeout");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_CONTACT2}", "mouseover", function(sym, e) {
      sym.getSymbol("CONTACT2").play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_CONTACT2}", "mouseout", function(sym, e) {
      sym.getSymbol("CONTACT2").play("fadeout");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_GALLERY2}", "mouseenter", function(sym, e) {
      sym.getSymbol("GALLERY2").play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_GALLERY2}", "mouseleave", function(sym, e) {
      sym.getSymbol("GALLERY2").play("fadeout");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_GALLERY2}", "mouseover", function(sym, e) {
      sym.getSymbol("GALLERY2").play();
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_GALLERY2}", "mouseout", function(sym, e) {
      sym.getSymbol("GALLERY2").play("fadeout");
    });
    //Edge binding end
    Symbol.bindElementAction(compId, symbolName, "${_GALLERY2}", "click", function(sym, e) {
      window.open("http://www.straitcrewing.com.au/gallery", "_parent");
    });
    //Edge binding end
  })("stage");
  //Edge symbol end:'stage'

  //=========================================================

  //Edge symbol: 'Symbol_2'
  (function(symbolName) {})("Symbol_2");
  //Edge symbol end:'Symbol_2'

  //=========================================================

  //Edge symbol: 'Preloader'
  (function(symbolName) {})("Preloader");
  //Edge symbol end:'Preloader'

  //=========================================================

  //Edge symbol: 'CONTACT'
  (function(symbolName) {
    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17, function(sym, e) {
      sym.stop();
    });
    //Edge binding end
  })("CONTACT");
  //Edge symbol end:'CONTACT'

  //=========================================================

  //Edge symbol: 'RATES'
  (function(symbolName) {
    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17, function(sym, e) {
      sym.stop();
    });
    //Edge binding end
  })("RATES");
  //Edge symbol end:'RATES'

  //=========================================================

  //Edge symbol: 'CREW'
  (function(symbolName) {
    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17, function(sym, e) {
      sym.stop();
    });
    //Edge binding end
  })("CREW");
  //Edge symbol end:'CREW'

  //=========================================================

  //Edge symbol: 'ABOUT'
  (function(symbolName) {
    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17, function(sym, e) {
      sym.stop();
    });
    //Edge binding end
  })("ABOUT");
  //Edge symbol end:'ABOUT'

  //=========================================================

  //Edge symbol: 'GALLERY'
  (function(symbolName) {
    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17, function(sym, e) {
      sym.stop();
    });
    //Edge binding end
  })("GALLERY");
  //Edge symbol end:'GALLERY'

  //=========================================================

  //Edge symbol: 'GALLERY2'
  (function(symbolName) {
    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17, function(sym, e) {
      sym.stop();
    });
    //Edge binding end
  })("GALLERY2");
  //Edge symbol end:'GALLERY2'
})(jQuery, AdobeEdge, "EDGE-7160395520");