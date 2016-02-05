// Compiled by ClojureScript 1.7.228 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
frontend.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"streams","streams",1465783789),cljs.core.list("onthar","anoafafe")], null));
frontend.core.widget = (function frontend$core$widget(data,owner){
if(typeof frontend.core.t_frontend$core20649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
frontend.core.t_frontend$core20649 = (function (widget,data,owner,meta20650){
this.widget = widget;
this.data = data;
this.owner = owner;
this.meta20650 = meta20650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
frontend.core.t_frontend$core20649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20651,meta20650__$1){
var self__ = this;
var _20651__$1 = this;
return (new frontend.core.t_frontend$core20649(self__.widget,self__.data,self__.owner,meta20650__$1));
});

frontend.core.t_frontend$core20649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20651){
var self__ = this;
var _20651__$1 = this;
return self__.meta20650;
});

frontend.core.t_frontend$core20649.prototype.om$core$IRender$ = true;

frontend.core.t_frontend$core20649.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,(function (){var iter__17618__auto__ = ((function (this$__$1){
return (function frontend$core$widget_$_iter__20652(s__20653){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20653__$1 = s__20653;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20653__$1);
if(temp__4657__auto__){
var s__20653__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20653__$2)){
var c__17616__auto__ = cljs.core.chunk_first.call(null,s__20653__$2);
var size__17617__auto__ = cljs.core.count.call(null,c__17616__auto__);
var b__20655 = cljs.core.chunk_buffer.call(null,size__17617__auto__);
if((function (){var i__20654 = (0);
while(true){
if((i__20654 < size__17617__auto__)){
var s = cljs.core._nth.call(null,c__17616__auto__,i__20654);
cljs.core.chunk_append.call(null,b__20655,React.DOM.h2(null,s));

var G__20656 = (i__20654 + (1));
i__20654 = G__20656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20655),frontend$core$widget_$_iter__20652.call(null,cljs.core.chunk_rest.call(null,s__20653__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20655),null);
}
} else {
var s = cljs.core.first.call(null,s__20653__$2);
return cljs.core.cons.call(null,React.DOM.h2(null,s),frontend$core$widget_$_iter__20652.call(null,cljs.core.rest.call(null,s__20653__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17618__auto__.call(null,new cljs.core.Keyword(null,"streams","streams",1465783789).cljs$core$IFn$_invoke$arity$1(self__.data));
})());
});

frontend.core.t_frontend$core20649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20650","meta20650",1487425521,null)], null);
});

frontend.core.t_frontend$core20649.cljs$lang$type = true;

frontend.core.t_frontend$core20649.cljs$lang$ctorStr = "frontend.core/t_frontend$core20649";

frontend.core.t_frontend$core20649.cljs$lang$ctorPrWriter = (function (this__17444__auto__,writer__17445__auto__,opt__17446__auto__){
return cljs.core._write.call(null,writer__17445__auto__,"frontend.core/t_frontend$core20649");
});

frontend.core.__GT_t_frontend$core20649 = (function frontend$core$widget_$___GT_t_frontend$core20649(widget__$1,data__$1,owner__$1,meta20650){
return (new frontend.core.t_frontend$core20649(widget__$1,data__$1,owner__$1,meta20650));
});

}

return (new frontend.core.t_frontend$core20649(frontend$core$widget,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,frontend.core.widget,frontend.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("world")], null));
(document.body["onclick"] = (function (x){
return cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"streams","streams",1465783789)], null),cljs.core.conj,"YLOL");
}));

//# sourceMappingURL=core.js.map