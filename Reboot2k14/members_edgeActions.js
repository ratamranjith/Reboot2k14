/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 650, function(sym, e) {
         sym.stop("joint");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop("secre");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1125, function(sym, e) {
         sym.start("pres1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1615, function(sym, e) {
         // insert code here
         sym.stop("pstop");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_coordinators}", "click", function(sym, e) {
         window.open("members.php", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Event_Members}", "click", function(sym, e) {
         window.open("members.php", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_treasurer}", "click", function(sym, e) {
         sym.play("treas1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70, function(sym, e) {
         sym.stop("treas1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 310, function(sym, e) {
         sym.stop("presi");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop("start");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_president2}", "click", function(sym, e) {
         sym.play("presi");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_secretary}", "click", function(sym, e) {
         sym.play("secre");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Joint_Secretary}", "click", function(sym, e) {
         sym.play("joint");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.stop("presi");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 140, function(sym, e) {
         sym.stop("treas1");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-4130041");