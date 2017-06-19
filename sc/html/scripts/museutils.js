/*
 Copyright 2011-2016 Adobe Systems Incorporated. All Rights Reserved.
*/
if (typeof Muse == "undefined") window.Muse = {};
Muse.Assert = {};
Muse.Assert.fail = function(a) {
  alert("JavaScript exception: " + a)
};
Muse.Assert.assert = function(a, b) {
  if (!a) throw Error(b);
};
$.extend($.browser, {
  SafariMobile: navigator.userAgent.toLowerCase().match(/iP(hone|ad|od)/i)
});
if (!Array.indexOf) Array.prototype.indexOf = function(a) {
  for (var b = 0; b < this.length; ++b)
    if (this[b] == a) return b;
  return -1
};
Muse.Plugins = {};
Muse.Utils = {};
Muse.Utils.getCssVendorPrefix = function() {
  if (!Muse.Utils.isDefined(Muse.Utils.getCssVendorPrefix.flag)) Muse.Utils.getCssVendorPrefix.flag = /webkit/i.test(navigator.appVersion) ? "-webkit" : /firefox/i.test(navigator.userAgent) ? "-moz" : /trident/i.test(navigator.userAgent) ? "-ms" : "opera" in window ? "-o" : "";
  return Muse.Utils.getCssVendorPrefix.flag
};
Muse.Utils.wrapElement = function(a, b) {
  a.parentNode.replaceChild(b, a);
  b.appendChild(a)
};
Muse.Utils.firstChild = function(a, b) {
  for (var c = 0; c < a.childNodes.length; c++) {
    var d = a.childNodes[c];
    if (d.nodeType == 1 && (!b || b.matches(d))) return d
  }
  return null
};
Muse.Utils.firstDescendant = function(a, b, c) {
  for (var d = 0; d < a.childNodes.length; d++) {
    var g = a.childNodes[d];
    if (g.nodeType == 1) {
      if (!b || b.matches(g)) return g;
      if (!c || !c.matches(g))
        if (g = Muse.Utils.firstDescendant(g, b, c)) return g
    }
  }
  return null
};
Muse.Utils.descendants = function(a, b, c, d) {
  if (!d) d = [], d.forEach = function(a) {
    for (var b = 0; b < this.length; b++)
      if (a(this[b])) break
  }, d.forEachTry = function(a) {
    for (var b = 0; b < this.length; b++) try {
      if (a(this[b])) break
    } catch (c) {}
  };
  for (var g = 0; g < a.childNodes.length; g++) {
    var f = a.childNodes[g];
    f.nodeType == 1 && ((!b || b.matches(f)) && d.push(f), (!c || !c.matches(f)) && Muse.Utils.descendants(f, b, c, d))
  }
  return d
};
Muse.Utils.children = function(a, b) {
  return Muse.Utils.descendants(a, b, Muse.Utils.Match.always)
};
Muse.Utils.Match = {};
Muse.Utils.Match.ByClass = function(a) {
  this.cl = a
};
Muse.Utils.Match.ByClass.prototype.matches = function(a) {
  return $(a).hasClass(this.cl)
};
Muse.Utils.Match.ByNodeName = function(a) {
  this.nm = a.toLowerCase()
};
Muse.Utils.Match.ByNodeName.prototype.matches = function(a) {
  return this.nm == a.nodeName.toLowerCase()
};
Muse.Utils.Match.ByFixed = function(a) {
  this.matchResult = a
};
Muse.Utils.Match.ByFixed.prototype.matches = function() {
  return this.matchResult
};
Muse.Utils.Match.byClass = function(a) {
  return new Muse.Utils.Match.ByClass(a)
};
Muse.Utils.Match.byNodeName = function(a) {
  return new Muse.Utils.Match.ByNodeName(a)
};
Muse.Utils.Match.byFixed = function(a) {
  return new Muse.Utils.Match.ByFixed(a)
};
Muse.Utils.Match.always = Muse.Utils.Match.byFixed(!0);
Muse.Utils.Match.never = Muse.Utils.Match.byFixed(!1);
Muse.Utils.moveChildren = function(a, b) {
  for (; a.childNodes.length > 0;) b.appendChild(a.childNodes[0])
};
Muse.Utils.copyChildren = function(a, b) {
  for (var c = 0; c < a.childNodes.length; c++) b.appendChild(a.childNodes[c].cloneNode(!0))
};
Muse.Utils.copyChildrenBefore = function(a, b) {
  for (var c = 0; c < a.childNodes.length; c++) b.parentNode.insertBefore(a.childNodes[c].cloneNode(!0), b)
};
Muse.Utils.pixelRound = function(a) {
  return Math.floor((a * 100 + 0.5) / 100)
};
Muse.Utils.getCurrentHTMLFileName = function(a) {
  var b = document.location.href;
  b.charAt(b.length - 1) == "/" ? b = "index" : (b = b.substring(b.lastIndexOf("/") + 1), b = b.indexOf("#") == 0 ? "index" : b.substring(0, b.lastIndexOf(".")));
  a && (b += ".html");
  return b
};
Muse.Utils.getPageStyleSheets = function() {
  for (var a = [], b = 0; b < document.styleSheets.length; ++b) {
    var c = document.styleSheets[b],
      d = c.ownerNode ? c.ownerNode : c.owningElement;
    d && (d.id == "pagesheet" || d.id == "nomq_pagesheet") && a.push(c)
  }
  return a
};
Muse.Utils.getStyleSheetRulesById = function(a, b) {
  var c = "#" + b.toLowerCase();
  return Muse.Utils.allStyleSheetRules(a, function(a) {
    return a.toLowerCase() == c
  })
};
Muse.Utils.allStyleSheetRules = function(a, b) {
  for (var c = [], d = 0; d < a.length; d++) {
    var g = Muse.Utils.allStyleSheetRulesFromOneSheet(a[d], b);
    g && (c = c.concat(g))
  }
  return c.length ? c : null
};
Muse.Utils.allStyleSheetRulesFromOneSheet = function(a, b) {
  var c = !1,
    d;
  try {
    d = a.cssRules
  } catch (g) {}
  if (!d) c = !0, d = a.rules;
  if (!d) return null;
  for (var f = [], i = $(window), h = function(a) {
      if (4 != a.type) return !1;
      if (1 != a.media.length) {
        for (var b = 0, c = 0; c < a.media.length; c++) {
          var f = null,
            f = "function" == typeof a.media.item ? a.media.item(c) : a.media[c];
          "print" != f && b++
        }
        if (1 < b) return !1
      }
      b = i.data("muse-mq");
      if (!b) return !1;
      for (c = 0; c < a.media.length; c++)
        if (a.media[c] == b) return !0;
      if (a.media.mediaText && 0 <= a.media.mediaText.indexOf(b.replace(/\s/g,
          ""))) return !0;
      if (a.media.mediaText && (a = a.media.mediaText.replace(/\sand\s/g, "__and__").replace(/\s/g, "").split("__and__"), c = b.replace(/\sand\s/g, "__and__").replace(/\s/g, "").split("__and__"), a && a.sort && c && c.sort)) {
        "all" == a[0] && a.splice(0, 1);
        a.sort();
        c.sort();
        if (a.length != c.length) return !1;
        for (b = 0; b < a.length; b++)
          if (a[b] != c[b]) return !1;
        return !0
      }
      return !1
    }, j = 0; j < d.length; ++j) {
    var k = d[j];
    if (h(k)) {
      if (k = Muse.Utils.allStyleSheetRulesFromOneSheet(k, b), null != k)
        for (var m = 0; m < k.length; m++) f.push(k[m])
    } else if (Muse.Utils.isDefined(k.selectorText))
      if (c) b(k.selectorText) &&
        f.push(k);
      else
        for (var m = k.selectorText.split(/\s*,\s*/), l = 0; l < m.length; l++) b(m[l]) && f.push(k)
  }
  return f.length ? f : null
};
Muse.Utils.getRuleProperty = function(a, b) {
  if (a && a.length) {
    for (var c = a.length - 1; c >= 0; c--) {
      var d = Muse.Utils.getRuleProperty(a[c], b);
      if (d) return d
    }
    return ""
  }
  if (a.style.getPropertyValue) return a.style.getPropertyValue(b);
  return a.style.getAttribute(b)
};
Muse.Utils.toCamelCase = function(a) {
  for (var b = Muse.Utils.toCamelCase.exp; b.test(a); a = a.replace(b, RegExp.$1.toUpperCase()));
  return a
};
Muse.Utils.toCamelCase.exp = /-([a-z])/;
Muse.Utils.getStyleValue = function(a, b) {
  var c = a.style[Muse.Utils.toCamelCase(b)];
  c || (document.defaultView ? c = document.defaultView.getComputedStyle(a, "").getPropertyValue(b) : a.currentStyle && (c = a.currentStyle[Muse.Utils.toCamelCase(b)]));
  c && c.match(/(\d+)px/) && (c = parseInt(c.substring(0, c.length - 2)));
  return c
};
Muse.Utils.getCanvasDirection = function(a, b) {
  var c = a.closest("*[data-rotate]"),
    c = c.length > 0 ? parseFloat(c.data("rotate")) % 360 : 0;
  return {
    dir: c >= 0 && c <= 45 || c >= 135 && c <= 225 || c >= 315 && c < 360 ? b : b === "horizontal" ? "vertical" : "horizontal",
    reverse: b === "horizontal" ? c >= 135 && c <= 315 : c >= 45 && c <= 225
  }
};
Muse.Utils.urlParam = function(a, b) {
  var c = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
  return c ? c[1] : null
};
Muse.Utils.processHyperlink = function(a) {
  var b = a.href,
    c = $(window),
    a = $(a),
    d = a.attr("target");
  if (!d || d == "_self") {
    var g = b.lastIndexOf("/"),
      d = b.lastIndexOf("#"),
      f = a.attr("class").match(/anim_(\w+)/);
    if (f && d > g) {
      var a = c.data("scrollWrapper"),
        i = b.substring(d),
        d = Muse.Utils.getAnchorWithDestination(i).offset(),
        b = f[1],
        h = a || window,
        g = document.documentElement || document.body,
        f = (a ? a.scrollHeight() : g.scrollHeight) - c.height(),
        c = (a ? a.scrollWidth() : g.scrollWidth) - c.width(),
        j = Math.min(f, d.top + (a && !a.isStandard() ? a.scrollTop() :
          0)),
        k = Math.min(c, d.left + (a && !a.isStandard() ? a.scrollLeft() : 0)),
        c = function() {
          h.scrollTo(k, j);
          try {
            history.replaceState({})
          } catch (a) {
            if (!jQuery.browser.msie || jQuery.browser.version > 7) window.location.hash = i
          }
        };
      try {
        history.pushState({}, null, i)
      } catch (m) {}
      if (window.scrollTo || void 0 !== a) {
        var a = a || $(document),
          l = a.scrollLeft(),
          o = a.scrollTop(),
          q = l,
          p = o;
        $({
          scrollDistance: 0
        }).animate({
          scrollDistance: 1
        }, {
          duration: 1E3,
          easing: b,
          step: function(a) {
            a != 0 && (p = a * (j - o), q = a * (k - l), h.scrollTo(l + q, o + p))
          },
          complete: c
        })
      } else $("html,body").animate({
        scrollTop: j,
        scrollLeft: k
      }, 1E3, b, c);
      return !1
    }
  }(c = Muse.Utils.urlParam(b, "devicelock")) && Muse.Utils.createCookie("devicelock", c, 0);
  return !0
};
Muse.Utils.navigateToAnchor = function(a) {
  var b = function() {
    var b = Muse.Utils.getAnchorWithDestination(a);
    if (b.length !== 0) {
      var d = b.offset(),
        g = $(window),
        f = g.data("scrollWrapper"),
        b = f || window,
        i = document.documentElement || document.body,
        h = (f ? f.scrollHeight() : i.scrollHeight) - g.height(),
        g = (f ? f.scrollWidth() : i.scrollWidth) - g.width(),
        h = Math.min(h, d.top + (f && !f.isStandard() ? f.scrollTop() : 0)),
        d = Math.min(g, d.left + (f && !f.isStandard() ? f.scrollLeft() : 0));
      b.scrollTo(d, h)
    }
  };
  if ($("body").hasClass("awaiting_bp_activate_scroll")) $window.one("scroll",
    function() {
      b()
    });
  else b()
};
var actionStack = [];
Muse.Utils.redirectCancelled = !1;
Muse.Utils.redirectHyperlink = function(a) {
  if (Muse.Utils.redirectCancelled) setTimeout(function() {
    Muse.Utils.redirectCancelled = !1
  }, 0);
  else if (actionStack = [], Muse.Utils.processHyperlink(a) && !Muse.Utils.isIBE()) {
    var b = $(a).attr("target");
    b || (b = "_self");
    window.open(a.href, b)
  }
};
Muse.Utils.redirectHyperlinkInNewTab = function(a, b) {
  if (Muse.Utils.redirectCancelled) setTimeout(function() {
    Muse.Utils.redirectCancelled = !1
  }, 0);
  else {
    actionStack = [];
    thisWindow = window.self;
    var c = window.open(a);
    b ? c.focus() : thisWindow.focus()
  }
};
Muse.Utils.isMouseLeftClick = function(a) {
  return a.which == 1
};
Muse.Utils.isMouseMiddleClick = function(a) {
  return a.which == 2
};
Muse.Utils.isRedirectLinkKeyboardAction = function(a) {
  return a.which == 13
};
Muse.Utils.addHyperlinkAnchor = function(a) {
  a = $(a);
  a.bind("mousedown", function(a) {
    (Muse.Utils.isMouseLeftClick(a) || Muse.Utils.isMouseMiddleClick(a)) && actionStack.push(this)
  });
  a.bind("mouseup keyup", function(a) {
    if (Muse.Utils.isMouseLeftClick(a) && actionStack.indexOf(this) != -1) a.ctrlKey || a.metaKey ? Muse.Utils.redirectHyperlinkInNewTab(this.href, a.shiftKey) : Muse.Utils.redirectHyperlink(this);
    else if (Muse.Utils.isMouseMiddleClick(a) && actionStack.indexOf(this) != -1)
      if (jQuery.browser.webkit || !a.target.href &&
        jQuery.browser.msie) Muse.Utils.redirectHyperlinkInNewTab(this.href, a.shiftKey);
      else return actionStack = [], !0;
    else Muse.Utils.isRedirectLinkKeyboardAction(a) && Muse.Utils.redirectHyperlink(this);
    return !1
  });
  Muse.Utils.isIBE() || a.bind("click", function() {
    return !1
  })
};
Muse.Utils.addHyperlinkBlock = function(a) {
  var b = $(a.parentNode);
  b.bind("mousedown", function(a) {
    (Muse.Utils.isMouseLeftClick(a) || Muse.Utils.isMouseMiddleClick(a)) && actionStack.push(this);
    return !1
  });
  b.bind("mouseup keyup", function(b) {
    Muse.Utils.isMouseLeftClick(b) && actionStack.indexOf(this) != -1 ? b.ctrlKey || b.metaKey ? Muse.Utils.redirectHyperlinkInNewTab(a.href, b.shiftKey) : Muse.Utils.redirectHyperlink(a) : Muse.Utils.isMouseMiddleClick(b) && actionStack.indexOf(this) != -1 ? Muse.Utils.redirectHyperlinkInNewTab(a.href,
      b.shiftKey) : Muse.Utils.isRedirectLinkKeyboardAction(b) && Muse.Utils.redirectHyperlink(a);
    return !1
  });
  Muse.Utils.isIBE() || b.bind("click", function() {
    return !1
  })
};
Muse.Utils.prepHyperlinks = function(a) {
  $("a.block").each(function() {
    var a = $(this.parentNode);
    Muse.Utils.addHyperlinkBlock(this);
    a.find("a.nonblock").each(function() {
      var a = $(this);
      if (a.data("registeredNonBlockLink") === !0) return !1;
      Muse.Utils.addHyperlinkAnchor(this);
      a.data("registeredNonBlockLink", !0)
    })
  });
  $("a.nonblock").each(function() {
    var a = $(this);
    a.data("registeredNonBlockLink") !== !0 && (a.parent('[class~="sbg"]').length > 0 ? Muse.Utils.addHyperlinkAnchor(this) : (a.attr("class").match(/anim_(\w+)/) || this.href.indexOf("devicelock=") !=
      -1) && $(this).bind("click", function() {
      return Muse.Utils.processHyperlink(this)
    }))
  });
  a && Muse.Utils.enableAnchorLinksActiveState()
};
Muse.Utils.pathOnly = function(a) {
  if (!a) return a;
  return a.replace(/#(?:[^#]+)$/, "").replace(/\?(?:[^\?]+)$/, "")
};
Muse.Utils.enableAnchorLinksActiveState = function() {
  var a = !1,
    b = [],
    c = $(window),
    d = Muse.Utils.getPageStyleSheets(),
    g = function(a) {
      var b = a.parent('[class~="sbg"]');
      if (a.hasClass("MenuItem") || b.hasClass("MenuItem")) return "MuseMenuActive";
      if (a.hasClass("Button") || b.hasClass("Button")) return "ButtonSelected";
      return "MuseLinkActive"
    },
    f = !1,
    i = function(c) {
      b.splice(0, b.length);
      $("a.nonblock,a.block", c).each(function() {
        Muse.Utils.saveHyperlinkInfo($(this), g($(this)), d, a, b)
      });
      b.sort(function(a, b) {
        if (a.from < b.from) return -1;
        if (a.from > b.from) return 1;
        return 0
      });
      f = !0
    },
    h = !1,
    j = c.data("scrollWrapper"),
    k = j || c,
    m = null,
    l = function() {
      h = !1;
      if (!f) {
        var c = $("#page");
        a = c.outerWidth() / c.outerHeight() > 2;
        i(m)
      }
      var c = a ? k.scrollLeft() : k.scrollTop(),
        d;
      a: {
        var l = 0;d = b.length;
        for (var o; l < d; l++)
          if (o = b[l], o.from <= c && c <= o.to) {
            d = l;
            break a
          }
        d = -1
      }
      var u, y, l = Math.max(0, d);
      for (d = Math.min(d + 2, b.length); l < d; l++)
        if (u = b[l], o = u.$elem.offset().left + (j && !j.isStandard() ? j.scrollLeft() : 0), y = u.$elem.offset().top + (j && !j.isStandard() ? j.scrollTop() : 0), u.from != (a ? o :
            y)) {
          i(m);
          break
        }
      l = 0;
      for (d = b.length; l < d; l++) {
        u = b[l];
        o = u.from <= c && c <= u.to;
        u = u.hyperLinks;
        y = void 0;
        for (var C = 0; C < u.length; C++) y = g(u[C]), o && !u[C].hasClass(y) ? u[C].addClass(y) : !o && u[C].hasClass(y) && u[C].removeClass(y)
      }
    },
    o = function() {
      h || (h = !0, Muse.Utils.requestAnimationFrame(l))
    };
  (j = c.data("scrollWrapper")) ? j.registerUpdateCallback(o): c.scroll(o);
  $("body").on("muse_bp_activate", function(a, b, c) {
    f = !1;
    m = c;
    o()
  });
  0 == $(".breakpoint").length && l()
};
Muse.Utils.getAnchorWithDestination = function(a) {
  if (!a || !a.replace) return $(a);
  if (a.match(/\//g)) return $();
  return $(a.replace(/([\.\:])/gi, "\\$1"))
};
Muse.Utils.saveHyperlinkInfo = function(a, b, c, d, g) {
  var f = a.attr("href"),
    i = Muse.Utils.pathOnly(f),
    h = -1,
    j = a.attr("target"),
    k = window.location.href.replace(/#.*$/i, "");
  if (f && -1 != f.indexOf("#") && !(j && j != "_self") && !(0 <= i.indexOf("/")) && (k.charAt(k.length - 1) == "/" && (k += "index.html"), -1 != k.indexOf("/" + i, k.length - i.length - 1))) {
    var i = $(window).data("scrollWrapper"),
      m = f.substring(f.lastIndexOf("#")),
      a = a.parent('[class~="sbg"]').length > 0 || a.hasClass("block") ? a.parent() : a,
      l = "#" + a.attr("id"),
      b = "." + b;
    if (null !== Muse.Utils.allStyleSheetRules(c,
        function(a) {
          return 0 <= a.indexOf(l + b) || 0 <= a.indexOf(b + l)
        })) {
      j = 0;
      for (k = g.length; j < k; j++)
        if (g[j].href == f) {
          h = j;
          break
        }
      if (-1 == h) {
        c = Muse.Utils.getAnchorWithDestination(m);
        if (c.length === 0) return;
        j = i && !i.isStandard();
        d = Math.floor(d ? c.offset().left + (j ? i.scrollLeft() : 0) : c.offset().top + (j ? i.scrollTop() : 0));
        i = Number.MAX_VALUE;
        j = 0;
        for (k = g.length; j < k; j++)
          if (g[j].href != f && g[j].from == d) {
            h = j;
            break
          }
        if (-1 == h) {
          j = 0;
          for (k = g.length; j < k; j++) {
            h = g[j];
            if (h.from < d && d < h.to) {
              i = h.to;
              h.to = d - 1;
              break
            }
            h.from <= i && (i = h.from - 1)
          }
          g.push({
            hyperLinks: [],
            from: d,
            to: i,
            $elem: c,
            href: f
          });
          h = g.length - 1
        }
      }
      g[h].hyperLinks.push(a)
    }
  }
};
Muse.Utils.isIBE = function() {
  return Muse.Utils.readCookie("inbrowserediting") == "true"
};
Muse.Utils.includeMEditableTags = function(a) {
  if (!a || a.length == 0 || !Muse.Utils.isIBE()) return a;
  return a.map(function() {
    var a = $(this).parent("div[contenteditable][region-id][template][data-ice-editableid][data-ice-editable]");
    return a && a.length ? a.get() : this
  })
};
Muse.Utils.getNaturalWidth = function(a) {
  var b = -1;
  a.naturalWidth != null ? b = a.naturalWidth : a.runtimeStyle ? (a.runtimeStyle.width = "auto", a.runtimeStyle.height = "auto", a.runtimeStyle.borderWidth = "0", a.runtimeStyle.padding = "0", b = a.offsetWidth, a.runtimeStyle.width = "", a.runtimeStyle.height = "", a.runtimeStyle.borderWidth = "", a.runtimeStyle.padding = "") : (a = a.cloneNode(!0), a.className = "", a.style.width = "auto !important", a.style.height = "auto !important", a.style.borderWidth = "0 !important", a.style.padding = "0 !important",
    b = a.width);
  return b
};
Muse.Utils.getNaturalHeight = function(a) {
  var b = -1;
  a.naturalHeight != null ? b = a.naturalHeight : a.runtimeStyle ? (a.runtimeStyle.width = "auto", a.runtimeStyle.height = "auto", a.runtimeStyle.borderWidth = "0", a.runtimeStyle.padding = "0", b = a.offsetHeight, a.runtimeStyle.width = "", a.runtimeStyle.height = "", a.runtimeStyle.borderWidth = "", a.runtimeStyle.padding = "") : (a = a.cloneNode(!0), a.className = "", a.style.width = "auto !important", a.style.height = "auto !important", a.style.borderWidth = "0 !important", a.style.padding = "0 !important",
    b = a.height);
  return b
};
Muse.Utils.pieLoading = !1;
Muse.Utils.pieFunctionQueue = [];
Muse.Utils.needPIE = function(a) {
  if (Muse.Utils.havePIE) a();
  else if (Muse.Utils.pieFunctionQueue.push(a), !Muse.Utils.pieLoading) Muse.Utils.pieLoading = !0, a = "scripts/pie.js", a[0] == "/" && (a = location.pathname.indexOf(".html") != -1 ? location.pathname.substring(0, location.pathname.lastIndexOf("/")) + a : location.pathname + a, a = a.replace(/\/+/g, "/")), $.ajax({
    url: a,
    dataType: "script",
    complete: function() {
      if (Muse.Utils.isDefined(window.PIE)) {
        Muse.Utils.havePIE = !0;
        Muse.Utils.pieLoading = !1;
        for (var a = 0; a < Muse.Utils.pieFunctionQueue.length; ++a) Muse.Utils.pieFunctionQueue[a]()
      }
    }
  })
};
Muse.Utils.transformMarkupToFixBrowserProblemsPreInit = function() {
  Muse.Utils.fixSVGImages();
  Muse.Utils.maintainFluidSVGsAspectRatio();
  jQuery.browser.msie ? (jQuery("html").addClass("ie"), jQuery.browser.version < 8 && Muse.Utils.changeLItoDIVs(), jQuery.browser.version < 9 && (Muse.Utils.monitorCheckboxes(), Muse.Utils.addRoundedCorners())) : jQuery.browser.SafariMobile && jQuery("body").css("-webkit-text-size-adjust", "none")
};
Muse.Utils.monitorCheckboxes = function() {
  var a = function(a) {
    "checked" == a.attr("checked") ? a.removeClass("not_checked").addClass("checked") : a.removeClass("checked").addClass("not_checked")
  };
  $(".fld-checkbox input[type=checkbox]").each(function() {
    a($(this))
  }).click(function() {
    a($(this))
  });
  $(".fld-radiobutton input[type=radio]").each(function() {
    a($(this))
  }).click(function() {
    $(".fld-radiobutton input[type=radio]", $(this).closest("form")).each(function() {
      a($(this))
    })
  })
};
Muse.Utils.transformMarkupToFixBrowserProblems = function() {
  Muse.Utils.havePIE = !1;
  jQuery.browser.msie && jQuery.browser.version <= 9 && (jQuery.browser.version <= 9 && (Muse.Utils.addGradientFill(), Muse.Utils.addShadows()), jQuery.browser.version < 9 && (Muse.Utils.applyIEFilterToPNGImages(), Muse.Utils.addRGBA(), Muse.Utils.removeEdgeAnimationBorderForIE78()));
  (jQuery.browser.msie && jQuery.browser.version < 9 || jQuery.browser.webkit) && Muse.Utils.insertEmptyDivAfterPinnedColumnElements();
  Muse.Utils.fixTransformRotations();
  Muse.Utils.fixImageFramesWithRoundedCorners();
  typeof window.matchMedia === "undefined" && typeof window.msMatchMedia === "undefined" && $("html").addClass("nomediaqueries");
  var a = $(window).data("musePolyfill.bgSize");
  null != a && a.initialize($(".museBGSize"));
  window.location.hash && Muse.Utils.navigateToAnchor(window.location.hash)
};
Muse.Utils.fixSVGImages = function() {
  var a = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),
    b = $("html");
  a || (b.addClass("nosvg"), $("body img").each(function() {
    var a = $(this),
      b = a.data("mu-svgfallback");
    b && (a.data("src", b), a.attr("src", b))
  }))
};
Muse.Utils.maintainFluidSVGsAspectRatio = function() {
  var a = $(".svg_mar");
  if (0 != a.length) {
    var b = function() {
        a.each(function() {
          var a = $(this),
            b = a.data("image-width"),
            c = a.data("image-height");
          0 < b && 0 < c && a.css("height", a.width() * c / b)
        })
      },
      c = function(b) {
        a = $(".svg_mar", b.length ? b : null)
      };
    $(window).resize(b);
    $("body").on("muse_bp_activate", function(a, g, f) {
      c(f);
      b()
    });
    c($(".breakpoint.active"));
    b()
  }
};
Muse.Utils.applyIEFilterToPNGImages = function() {
  jQuery.browser.msie && jQuery.browser.version < 9 && $("body *").not(".museBgSizePolyfill img,.f3s_top,.f3s_mid,.f3s_bot").each(function() {
    var a = $(this);
    if (!a.data("mu-ie-matrix") && (a.css("background-image").match(/\b.png/i) || this.nodeName && this.nodeName.toLowerCase() == "img" && a.attr("src").match(/\b.png/i))) {
      var b = a.css("filter");
      a.css("filter", b ? b + " progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)" : "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)")
    }
  })
};
Muse.Utils.insertEmptyDivAfterPinnedColumnElements = function() {
  $(".pinned-colelem").each(function() {
    $("<div class='colelem'/>").insertAfter($(this))
  })
};
Muse.Utils.addGradientFill = function() {
  $(".gradient").each(function() {
    var a = this;
    Muse.Utils.needPIE(function() {
      PIE.attach(a)
    })
  })
};
Muse.Utils.addShadows = function() {
  $(".shadow").each(function() {
    var a = this,
      b = $(a);
    Muse.Utils.needPIE(function() {
      b.data("mu-ie-matrix") || PIE.attach(a)
    })
  })
};
Muse.Utils.fixImageFramesWithRoundedCorners = function() {
  Muse.Browser.Features.checkCSSFeature("border-radius") && Muse.Browser.Features.checkCSSFeature("-webkit-border-radius") && $(".rounded-corners").each(function() {
    if ($(this).hasClass("clip_frame")) {
      var a = Muse.Utils.firstDescendant(this, Muse.Utils.Match.byNodeName("img"));
      a && $(a).wrap('<div class="clip_frame"></div>')
    }
  })
};
Muse.Utils.addRoundedCorners = function() {
  $(".rounded-corners").each(function() {
    var a = this;
    Muse.Utils.needPIE(function() {
      var b = $(a);
      if (!b.data("mu-ie-matrix")) {
        var c = b.css("filter");
        if (!c || !(c.toLowerCase().indexOf("opacity") > 0 && c.indexOf("=100") < 0)) {
          if (a.childNodes.length && !Muse.Browser.Features.checkCSSFeature("border-radius") && (c = Muse.Utils.firstChild(a, Muse.Utils.Match.byNodeName("img"))) && c.nodeName.toLowerCase() == "img") {
            var c = $(c),
              d = c.attr("src"),
              g = b.css("background-color") + " ",
              f = c.css("margin-left");
            if (f == "0px" || f == "auto") f = c.css("padding-left");
            var i = c.css("margin-top");
            if (i == "0px" || i == "auto") i = c.css("padding-top");
            if ((f == "0px" || f == "auto") && (i == "0px" || i == "auto")) b.addClass("museBGSize"), b.css("background-size", "cover");
            c.css("visibility", "hidden");
            b.css("background", g + "url(" + d + ") no-repeat " + f + " " + i)
          }
          PIE.attach(a)
        }
      }
    })
  })
};
Muse.Utils.addRGBA = function() {
  $(".rgba-background").each(function() {
    var a = this;
    Muse.Utils.needPIE(function() {
      PIE.attach(a)
    })
  })
};
Muse.Utils.resizeHeight = function(a) {
  var b = function(a, b) {
    var g = a.parent().hasClass("sbg") ? a.parent() : a,
      f = $(a.children()[0]);
    "fixed" != f.css("position") && g.height(f.outerHeight());
    b && f.watch("height", function() {
      var a = $(this);
      "fixed" != a.css("position") && g.height(a.outerHeight())
    })
  };
  $(a).each(function() {
    b($(this), !0)
  });
  if (0 < $(".breakpoint").length) $("body").on("muse_bp_activate", function(c, d, g) {
    $(a, g).each(function() {
      $(this).css("height", "auto");
      b($(this), !1)
    })
  })
};
Muse.Utils.removeEdgeAnimationBorderForIE78 = function() {
  $(".animationContainer").each(function() {
    $(this).parent().html(function(a, b) {
      return b.replace(/><\/iframe>$/gi, ' frameBorder="0"></iframe>')
    })
  })
};
Muse.Utils.initializeAnimations = function(a) {
  var b = function(b) {
    if (!0 === a) {
      var d = b.contents();
      $("#report-abuse", d).remove();
      $("#report-abuse-spacer", d).remove()
    }
    b.removeClass("an_invi")
  };
  $(".animationContainer").each(function() {
    var a = $(this);
    Muse.Utils.isIBE() || this.contentDocument && "complete" == this.contentDocument.readyState ? b(a) : a.load(function() {
      b(a)
    })
  })
};
Muse.Utils.fixTransformRotations = function() {
  Muse.Browser.Features.checkCSSFeature("transform") || $("*[data-mu-ie-matrix]").each(function() {
    var a = $(this),
      b = a.parent(),
      c = Math.round(a.data("mu-ie-matrix-dx")),
      d = Math.round(a.data("mu-ie-matrix-dy")),
      g = b.innerHeight(),
      f = b.innerWidth();
    a.css({
      filter: function(b, c) {
        if (c) return c + " " + a.data("mu-ie-matrix");
        return a.data("mu-ie-matrix")
      },
      "margin-bottom": "-=" + d
    }).removeClass("shadow");
    b.css({
      "margin-bottom": "-=" + (b.innerHeight() - g),
      "margin-right": "-=" + (b.innerWidth() -
        f)
    });
    a.hasClass("actAsDiv") ? (a.wrap('<span class="actAsDiv rotateWrapper"></span>'), a.parent().css("float", a.css("float"))) : a.hasClass("actAsInlineDiv") ? a.wrap('<span class="actAsInlineDiv rotateWrapper"></span>') : a.wrap('<div class="rotateWrapper"></div>');
    a.parent().css({
      top: d,
      left: c,
      position: "relative",
      "margin-bottom": d
    })
  })
};
Muse.Utils.fullPage = function(a) {
  var b = $(window).data("stickyFooter");
  if (0 == $(a).closest(".breakpoint").length) Muse.Assert.assert(0 == $(".breakpoint").length, "Page is outside a breakpoint node."), b.init($(a));
  else {
    var c = function(c) {
      Muse.Assert.assert(1 == c.length, "Cannot initialize sticky footer - invalid breakpoint node.");
      b.init($(a, c))
    };
    c($(".breakpoint.active"));
    $("body").on("muse_bp_activate", function(a, b, f) {
      Muse.Utils.requestAnimationFrame(function() {
        c(f)
      })
    })
  }
};
Muse.Utils.endsWith = function(a, b) {
  if (!a || !b) return !1;
  Muse.Assert.assert("string" == typeof a, 'Invalid type for "str" argument - expected string.');
  Muse.Assert.assert("string" == typeof b, 'Invalid type for "ending" argument - expected string.');
  return a.substring(a.length - b.length) == b
};
Muse.Utils.firstDefined = function() {
  for (var a = 0; a < arguments.length; a++)
    if (Muse.Utils.isDefined(arguments[a])) return arguments[a]
};
Muse.Utils.isDefined = function(a) {
  return "undefined" != typeof a
};
Muse.Utils.getCSSIntValue = function(a, b) {
  return Muse.Utils.tryParse(a.css(b), parseInt, 0)
};
Muse.Utils.tryParse = function(a, b, c) {
  if (!Muse.Utils.isDefined(a)) return c;
  a = b(a);
  return !isNaN(a) ? a : c
};
Muse.Utils.changeLItoDIVs = function() {
  var a = function() {
    var a = $(this),
      c = $("<div/>");
    c.addClass(a.attr("class"));
    c.attr("id", a.attr("id"));
    c.append(a.contents());
    a.replaceWith(c)
  };
  $("ul").each(function() {
    $(this).find("li").each(a)
  });
  $("ul").each(a)
};
Muse.Utils._initWidgetQueue = null;
Muse.Utils._hasBPListener = !1;
Muse.Utils.initWidget = function(a, b, c) {
  if (0 == $(".breakpoint").length) $(a).each(function() {
    c($(this))
  });
  else {
    for (var d = 0; d < b.length; d++) {
      var g = b[d];
      if (!Muse.Utils._initWidgetQueue) Muse.Utils._initWidgetQueue = {};
      Muse.Utils._initWidgetQueue[g] || (Muse.Utils._initWidgetQueue[g] = []);
      Muse.Utils._initWidgetQueue[g].push({
        id: a,
        fn: c
      })
    }
    if (Muse.Utils._initWidgetQueue && !Muse.Utils._hasBPListener) {
      var f = function(a, b, c, d) {
        a = c.attr("id");
        Muse.Assert.assert(a, "Invalid breakpoint node - missing the ID attribute");
        a =
          "#" + a;
        if (Muse.Utils._initWidgetQueue[a]) {
          for (; Muse.Utils._initWidgetQueue[a].length;)
            if (b = Muse.Utils._initWidgetQueue[a].shift(), b = b.fn($(b.id, c))) b.$bp = c, b.breakpoint = d;
          Muse.Utils.showWidgetsWhenReady(c);
          delete Muse.Utils._initWidgetQueue[a];
          var c = !0,
            g;
          for (g in Muse.Utils._initWidgetQueue) {
            c = !1;
            break
          }
          if (c) $("body").off("muse_bp_activate", f), Muse.Utils._hasBPListener = !1
        }
      };
      $("body").on("muse_bp_activate", f);
      Muse.Utils._hasBPListener = !0
    }
  }
};
Muse.Utils.showWidgetsWhenReady = function(a) {
  jQuery(".disn", a).removeClass("disn");
  jQuery(".invi", a).removeClass("invi");
  jQuery(".widget_invisible", a).removeClass("widget_invisible")
};
Muse.Utils.detachIframesAndObjectsToPauseMedia = function(a) {
  var b = [],
    c = [];
  $("iframe, object", a).each(function() {
    var a = $(this);
    if (!a.is("object") || !(jQuery.browser.msie && jQuery.browser.version < 9)) {
      if (a.is("iframe")) {
        var g = a.prop("src");
        if ("" == g || !g || !g.indexOf) return;
        if (0 <= g.indexOf("vimeo.com")) {
          Muse.Utils.VimeoVideoHelper.pause(a);
          c.push({
            $node: a,
            playFn: function(a) {
              Muse.Utils.VimeoVideoHelper.seekTo(a, 0);
              Muse.Utils.VimeoVideoHelper.isAutoPlay(a) && Muse.Utils.VimeoVideoHelper.play(a)
            }
          });
          return
        }
      }
      g = {};
      g.$next = a.next();
      g.$parent = a.parent();
      jQuery.browser.msie ? (g.html = a.wrap('<div id="deleteMeWrapper"/>').parent().html(), a.remove(), g.$parent.children("div #deleteMeWrapper").remove()) : (g.$node = a.clone(), a.remove());
      b.push(g)
    }
  });
  b.length && a.data("detached", b);
  c.length && a.data("paused", c);
  $("video", a).each(function() {
    if (jQuery.browser.msie && jQuery.browser.version == 9 && this.pause && this.getAttribute("autoplay") && this.readyState != 4) $(this).one("play", function() {
      this.pause()
    });
    else this.pause && !this.paused &&
      this.pause()
  })
};
Muse.Utils.attachIframesAndObjectsToResumeMedia = function(a) {
  var b = a.data("detached");
  if (b) {
    for (var c = b.length - 1; c >= 0; c--) {
      var d = b[c];
      !d.$next || d.$next.length == 0 ? d.$parent.append(d.$node ? d.$node : d.html) : d.$next.before(d.$node ? d.$node : d.html);
      d.$next = d.$parent = d.$node = d.html = void 0
    }
    a.data("detached", null)
  }
  if (b = a.data("paused"))
    for (c = 0; c < b.length; c++) d = b[c], d.playFn(d.$node);
  $("iframe", a).each(function() {
    var a = $(this),
      b = a.attr("src"),
      c = a.data("src");
    "about:blank" == b && c && a.attr("src", c)
  });
  $("video", a).each(function() {
    if (this.play &&
      this.getAttribute("autoplay") && this.paused) this.currentTime = 0, this.play()
  })
};
Muse.Utils.VimeoVideoHelper = function(a) {
  var b = [],
    c = function(a, b) {
      if (!0 == a.data("isReady")) b();
      else {
        var c = a.data("readyQueue");
        c || (c = []);
        c.push(b);
        a.data("readyQueue", c)
      }
    },
    d = function(a, c, f, d) {
      var g = a[0].contentWindow;
      d && b.push({
        source: g,
        method: c,
        callbackFn: d
      });
      c = '"method": "' + c + '"';
      "undefined" != typeof f && null !== f && (c += '"value":"' + f + '"');
      g.postMessage("{" + c + "}", a.data("origin"))
    },
    g = function(b) {
      data = null;
      try {
        JSON && JSON.parse && (data = JSON.parse(b.data))
      } catch (c) {}
      var f = null;
      data && data.player_id && (f = a("#" +
        data.player_id));
      (!f || !f.length) && a("iframe").each(function() {
        if (this.contentWindow == b.source) return f = a(this), !1
      });
      return f
    },
    f = function(a) {
      var c = null;
      try {
        JSON && JSON.parse && (c = JSON.parse(a.data))
      } catch (f) {}
      if (c) {
        if ("ready" == c.event) {
          var d = g(a);
          d.data("isReady", !0);
          d.data("origin", a.origin);
          var m = d.data("readyQueue");
          if (m && m.length)
            for (var l = 0; l < m.length; l++) m[l]();
          d.data("readyQueue", null)
        }
        for (l = 0; l < b.length;) d = b[l], d.source == a.source && d.method == c.method ? (d.callbackFn(c.value), b.splice(l, 1)) : l++
      }
    };
  window.addEventListener ? window.addEventListener("message", f, !1) : window.attachEvent("onmessage", f, !1);
  f = function() {};
  f.prototype.play = function(a) {
    c(a, function() {
      d(a, "play")
    })
  };
  f.prototype.pause = function(a) {
    c(a, function() {
      d(a, "pause")
    })
  };
  f.prototype.isPaused = function(a, b) {
    c(a, function() {
      d(a, "paused", null, b)
    })
  };
  f.prototype.seekTo = function(a, b) {
    c(a, function() {
      d(a, "seekTo", b)
    })
  };
  f.prototype.isAutoPlay = function(a) {
    a = a.attr("src").split("?");
    a.shift();
    for (var a = a.join("?").split("&"), b = 0; b < a.length; b++)
      if (a[b].match(/autoplay\s*=\s*1/gi)) return !0;
    return !1
  };
  return new f
}(jQuery);
(function(a) {
  a(window);
  var b = a("html"),
    c = ["src"],
    d = ["hidpi-src", "src"],
    g = a(".hidpi_button"),
    f = function() {
      this._mode = "standard"
    };
  f.swapSources = function(a, b, c) {
    var f = a.attr("data-" + b);
    f && !("src" == b && a.hasClass("ImageInclude") && a.attr("src").indexOf("images/blank.gif") == a.attr("src").length - 16 && a.parents(".SlideShowWidget").length) && ("src" == c && !a.attr("data-" + c) && a.attr("data-" + c, a.attr("src")), a.attr("src", f))
  };
  f.isRetina = function() {
    if (1.5 <= window.devicePixelRatio) return !0;
    if (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)").matches) return !0;
    return !1
  }();
  f.shouldUseCookie = 0 < g.length;
  f.getResolutionPreference = function() {
    return Muse.Utils.readCookie("museresolution")
  };
  f.saveResolutionPreference = function(a) {
    Muse.Utils.createCookie("museresolution", a)
  };
  f.prototype.initializeHiDPIButton = function(b) {
    if (f.isRetina) {
      var c = this;
      g.filter(function() {
        return !a(this).data("initialized")
      }).each(function() {
        a(this).data("initialized", !0)
      }).removeClass("unavailable").click(function() {
        switch (c._mode) {
          case "standard":
            c.hidpiMode(b);
            break;
          case "hidpi":
            c.standardMode(b);
            break;
          default:
            Muse.Assert.assert(!1, "Unknown mode: " + c._mode)
        }
      })
    }
  };
  f.prototype.activate = function(a) {
    this.initializeHiDPIButton(a);
    f.isRetina && (!f.shouldUseCookie || "hidpi" == f.getResolutionPreference()) ? this.hidpiMode(a) : this.standardMode(a)
  };
  f.prototype.getCurrentMode = function() {
    return this._mode
  };
  f.prototype.setCurrentMode = function(a) {
    this._mode = a;
    if (f.isRetina) {
      switch (a) {
        case "standard":
          g.removeClass("on").addClass("off");
          break;
        case "hidpi":
          g.removeClass("off").addClass("on");
          break;
        default:
          Muse.Assert.assert(!1,
            "Unknown mode: " + a)
      }
      f.shouldUseCookie && f.saveResolutionPreference(a)
    }
  };
  f.prototype.standardMode = function(c) {
    this.setCurrentMode("standard");
    b.removeClass("hidpi");
    a("img", c).each(function() {
      f.swapSources(a(this), "src", "hidpi-src")
    })
  };
  f.prototype.hidpiMode = function(c) {
    this.setCurrentMode("hidpi");
    b.addClass("hidpi");
    a("img", c).each(function() {
      f.swapSources(a(this), "hidpi-src", "src")
    })
  };
  f.prototype.getDataSrcAttrName = function() {
    return "standard" == this._mode ? c : d
  };
  a(window).data("ResolutionManager", new f)
})(jQuery);
Muse.Utils.detectScreenResolution = function() {
  var a = $(window).data("ResolutionManager");
  if (0 < $(".breakpoint").length) {
    var b = {};
    $("body").on("muse_bp_activate", function(c, d, g) {
      c = g.attr("id");
      b[c] || (a.activate(g), b[c] = !0)
    })
  } else a.activate()
};
Muse.Utils.createCookie = function(a, b, c) {
  if (c) {
    var d = new Date;
    d.setTime(d.getTime() + c * 864E5);
    c = "; expires=" + d.toGMTString()
  } else c = "";
  document.cookie = a + "=" + b + c + "; path=/"
};
Muse.Utils.readCookie = function(a) {
  a += "=";
  for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
    for (var d = b[c]; d.charAt(0) == " ";) d = d.substring(1, d.length);
    if (d.indexOf(a) == 0) return d.substring(a.length, d.length)
  }
  return null
};
Muse.Utils.eraseCookie = function(a) {
  createCookie(a, "", -1)
};
Muse.Browser = {};
Muse.Browser.domPrefixes = ["Webkit", "Moz", "O", "ms", "Khtml"];
Muse.Browser.Features = {};
Muse.Browser.Features.Touch = function() {
  if (navigator.maxTouchPoints > 0 || window.matchMedia && window.matchMedia("(-moz-touch-enabled)").matches) return {
    Start: "pointerDown",
    End: "pointerUp",
    Move: "pointerMove",
    Listener: function(a) {
      return function(b) {
        var c = b.originalEvent || b;
        if (c.pointerType != c.POINTER_TYPE_MOUSE) return a.apply(this, arguments)
      }
    }
  };
  else
    for (var a = 0, b = Muse.Browser.domPrefixes.length; a < b; a++) {
      var c = Muse.Browser.domPrefixes[a];
      if (c + "MaxTouchPoints" in navigator && navigator[c + "MaxTouchPoints"]) return c =
        c.toUpperCase(), {
          Start: c + "PointerDown",
          End: c + "PointerUp",
          Move: c + "PointerMove",
          Listener: function(a) {
            return function(b) {
              var d = b.originalEvent || b;
              if (d.pointerType != d[c + "POINTER_TYPE_MOUSE"]) return a.apply(this, arguments)
            }
          }
        }
    }
  try {
    return document.createEvent("TouchEvent"), {
      Start: "touchstart",
      End: "touchend",
      Move: "touchmove",
      Listener: function(a) {
        return a
      }
    }
  } catch (d) {}
  return !1
}();
Muse.Browser.Features.checkCSSFeature = function(a, b) {
  var c = Muse.Utils.toCamelCase(a),
    b = b || document.createElement("div");
  if (c in b.style) return !0;
  for (var c = c.charAt(0).toUpperCase() + c.substr(1), d = 0, g = Muse.Browser.domPrefixes.length; d < g; d++)
    if (Muse.Browser.domPrefixes[d] + c in b.style) return Muse.Browser.domPrefixes[d];
  return !1
};
Muse.Browser.Features.checkCSSValueCompatibility = function(a, b) {
  var c = document.createElement("div"),
    a = Muse.Utils.toCamelCase(a),
    d = Muse.Browser.Features.checkCSSFeature(a, c);
  if (d) d !== !0 && (a = d + a.charAt(0).toUpperCase() + a.substr(1));
  else return !1;
  d = c.style[a];
  c.style[a] = b;
  if (c.style[a] !== d || b === d) return !0;
  for (var g = 0; g < Muse.Browser.domPrefixes.length; g++) {
    var f = "-" + Muse.Browser.domPrefixes[g].toLowerCase() + "-" + b;
    c.style[a] = f;
    if (c.style[a] !== d) return Muse.Browser.domPrefixes[g]
  }
  return !1
};
Muse.Browser.Bugs = {};
Muse.Browser.Bugs.ClearNeedsOuterWidth = function() {
  var a = document.createElement("div");
  a.id = "mbbcnow00";
  a.innerHTML = '<div>a</div><style type="text/css">#mbbcnow00{position:absolute;top:-9999px;left:-9999px;visibility:hidden;} #mbbcnow01{width:1px;margin-right:-9999px;float:left} #mbbcnow02{clear:left;}</style>';
  var b = document.createElement("div"),
    c = document.createElement("div");
  document.body.appendChild(a);
  a.appendChild(b);
  a.appendChild(c);
  b.innerHTML = "a";
  b.id = "mbbcnow01";
  c.innerHTML = "b";
  c.id = "mbbcnow02";
  b = c.getBoundingClientRect().top - b.getBoundingClientRect().top;
  document.body.removeChild(a);
  return b < 1
}();
Muse.Browser.Bugs.CannotHandleClearBoth = function() {
  return jQuery.browser.msie && 7 == jQuery.browser.version
}();
Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder = function() {
  var a = !1,
    b = $("<div>").css({
      border: "1px solid #000000;",
      width: 100,
      height: 100,
      position: "absolute",
      top: -99999,
      left: -99999,
      padding: 0,
      margin: 0,
      overflow: "auto"
    }).appendTo(document.body)[0];
  b.scrollHeight !== b.clientHeight && (a = !0);
  $(b).remove();
  return a
}();
(function(a) {
  var b = a(window),
    c = a("body"),
    d = function() {
      this.$verticalSpacer = null;
      this.enabled = !1;
      this.contentBelowSpacer = this.contentAboveSpacer = this.minHeight = 0
    };
  d.prototype.init = function(f) {
    this.$verticalSpacer = a(".verticalspacer", f);
    if (0 != this.$verticalSpacer.length) {
      this.enabled = !0;
      var d = Muse.Utils.getCSSIntValue(this.$verticalSpacer, "min-height");
      this.$verticalSpacer.css("min-height", "");
      this.minHeight = Muse.Utils.getCSSIntValue(this.$verticalSpacer, "min-height");
      this.$verticalSpacer.css("min-height",
        d);
      this.pageMinHeight = Muse.Utils.getCSSIntValue(f, "padding-top") + Muse.Utils.getCSSIntValue(f, "min-height") + Muse.Utils.getCSSIntValue(f, "padding-bottom");
      this.contentAboveSpacer = parseInt(this.$verticalSpacer.data("content-above-spacer"));
      this.contentBelowSpacer = parseInt(this.$verticalSpacer.data("content-below-spacer"));
      var g = this,
        l = !0,
        h = [],
        i = !0;
      b.resize(function() {
        if (l) {
          var a = b.width();
          i ? (h.splice(0, h.length), h.push(a), i = !1, setTimeout(function() {
            i = !0
          }, 200)) : h[h.length - 1] != a && (h.push(a), 3 < h.length &&
            h[h.length - 3] == h[h.length - 1] && (c.addClass("always_vert_scroll"), l = !1))
        }
        g.doUpdate()
      });
      this.doUpdate()
    }
  };
  d.prototype.doUpdate = function() {
    if (this.enabled) {
      var a = this.contentAboveSpacer - this.$verticalSpacer.offset().top,
        b = this.$verticalSpacer.offset().top + this.contentBelowSpacer < this.pageMinHeight;
      this.$verticalSpacer.css({
        height: "calc(100vh - " + (this.contentAboveSpacer + this.contentBelowSpacer) + "px " + (0 < a ? " + " : " - ") + Math.abs(a) + "px)",
        "min-height": b ? a + this.minHeight + "px" : ""
      })
    }
  };
  var g = function() {
    this.pendingRequest =
      void 0;
    this.enabled = !0
  };
  g.prototype.init = function(f) {
    this.$spacer = a(".verticalspacer", f);
    this.$page = f;
    this.spacerMinHeight = Muse.Utils.getCSSIntValue(this.$spacer, "min-height");
    this.originalOffsetTop = Muse.Utils.tryParse(this.$spacer.attr("data-offset-top"), parseInt, 0);
    c.removeClass("no_vert_scroll");
    this.$spacer.removeAttr("style");
    this.$spacer.height() < this.spacerMinHeight && this.$spacer.height(Math.floor(this.spacerMinHeight + 1));
    this.spacerHeight = this.$spacer.height();
    this.pageMarginTop = Muse.Utils.getCSSIntValue(c,
      "padding-top") + Muse.Utils.getCSSIntValue(c, "margin-top");
    this.pageMarginBottom = Muse.Utils.getCSSIntValue(c, "padding-bottom") + Muse.Utils.getCSSIntValue(c, "margin-bottom");
    this.pageResizeWatchEnabled = !0;
    this.alwaysVertScroll = c.hasClass("always_vert_scroll");
    var d = this;
    this.calculateInitialSpacerHeight();
    this.$page.watch("height", function() {
      d.onPageHeightChanged()
    });
    b.resize(function() {
      d.doUpdate()
    });
    this.initialized = !0;
    this.doUpdate(this.pendingRequest)
  };
  g.prototype.updateScrollClass = function(a) {
    if (!this.alwaysVertScroll) {
      var a =
        this.spacerMinHeight < Math.floor(a * 100) / 100,
        b = !1;
      a && !c.hasClass("no_vert_scroll") ? (c.addClass("no_vert_scroll"), b = !0) : !a && c.hasClass("no_vert_scroll") && (c.removeClass("no_vert_scroll"), b = !0);
      b && this.$spacer.css("height")
    }
  };
  g.prototype.doUpdate = function(a) {
    if (this.enabled)
      if (this.initialized) {
        parseInt(a) || (a = 0);
        var c = this.$page.outerHeight(!0),
          f = c - this.spacerHeight,
          a = Math.max(0, b.height() - this.pageMarginTop - this.pageMarginBottom - f - a);
        a < this.spacerMinHeight && (a = this.spacerMinHeight + this.originalOffsetTop -
          this.$spacer.offset().top);
        if (a != this.spacerHeight) {
          this.pageResizeWatchEnabled = !1;
          this.updateScrollClass(a);
          this.$spacer.css("height", a);
          if (a < this.spacerHeight && c == this.$page.outerHeight(!0)) a = this.spacerHeight, this.updateScrollClass(a), this.$spacer.css("height", a);
          this.pageResizeWatchEnabled = !0
        }
        return this.spacerHeight = a
      } else this.pendingRequest = a
  };
  g.prototype.calculateInitialSpacerHeight = function() {
    for (var a = 0, b = 0; b++ < 20;) {
      var c = this.doUpdate();
      if (c <= a) break;
      a = c
    }
  };
  g.prototype.onPageHeightChanged =
    function(a) {
      this.pageResizeWatchEnabled && this.doUpdate(a)
    };
  g.prototype.enable = function() {
    this.enabled = !0
  };
  g.prototype.disable = function() {
    this.enabled = !1
  };
  a("body").append('<div class="muse_check_css"></div>');
  var f = null,
    f = a(".muse_check_css"),
    i = f.css("height", "100vh").height(),
    h = f.css("height", "calc(100vh + 300px)").height();
  0 < i && 0 < h && 300 == h - i ? (f.remove(), f = new d) : (a("html").removeClass("css_verticalspacer"), f = new g);
  b.data("stickyFooter", f)
})(jQuery);
Muse.Utils.requestAnimationFrame = function() {
  return window.mozRequestAnimationFrame && window.mozRequestAnimationFrame.bind(window) || window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame.bind(window) || function(a) {
    window.setTimeout(a, 20)
  }
}();
Muse.Utils.animationFrameFx = function(a, b) {
  var c = a.fx;
  a.extend(c, a.fx);
  var d, g = a(b).data("stickyFooter"),
    f = function() {
      d && (Muse.Utils.requestAnimationFrame(f), c.tick(), g.doUpdate())
    };
  c.timer = function(b) {
    b() && a.timers.push(b) && !d && (d = !0, f())
  };
  c.stop = function() {
    d = !1
  };
  a.fn.animationFrameFx = c
}(jQuery, this);;
(function() {
  if (!("undefined" == typeof Muse || "undefined" == typeof Muse.assets)) {
    var a = function(a, b) {
      for (var c = 0, d = a.length; c < d; c++)
        if (a[c] == b) return c;
      return -1
    }(Muse.assets.required, "museutils.js");
    if (-1 != a) {
      Muse.assets.required.splice(a, 1);
      for (var a = document.getElementsByTagName("meta"), b = 0, c = a.length; b < c; b++) {
        var d = a[b];
        if ("generator" == d.getAttribute("name")) {
          "2015.2.0.352" != d.getAttribute("content") && Muse.assets.outOfDate.push("museutils.js");
          break
        }
      }
    }
  }
})();