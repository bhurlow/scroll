// Compiled by ClojureScript 1.7.228 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
frontend.core.request = (function frontend$core$request(url,callback){
return goog.net.XhrIo.send(url,(function (e){
return callback.call(null,e.target.getResponseText());
}));
});
frontend.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"streams","streams",1465783789),cljs.core.list("onthar","anoafafe"),new cljs.core.Keyword(null,"logs","logs",1068148008),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"containers","containers",-2127048083),cljs.core.PersistentVector.EMPTY], null));
frontend.core.containers = (function frontend$core$containers(data,owner){
if(typeof frontend.core.t_frontend$core18640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
frontend.core.t_frontend$core18640 = (function (containers,data,owner,meta18641){
this.containers = containers;
this.data = data;
this.owner = owner;
this.meta18641 = meta18641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
frontend.core.t_frontend$core18640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18642,meta18641__$1){
var self__ = this;
var _18642__$1 = this;
return (new frontend.core.t_frontend$core18640(self__.containers,self__.data,self__.owner,meta18641__$1));
});

frontend.core.t_frontend$core18640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18642){
var self__ = this;
var _18642__$1 = this;
return self__.meta18641;
});

frontend.core.t_frontend$core18640.prototype.om$core$IRender$ = true;

frontend.core.t_frontend$core18640.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,(function (){var iter__17643__auto__ = ((function (this$__$1){
return (function frontend$core$containers_$_iter__18643(s__18644){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__18644__$1 = s__18644;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__18644__$1);
if(temp__4657__auto__){
var s__18644__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18644__$2)){
var c__17641__auto__ = cljs.core.chunk_first.call(null,s__18644__$2);
var size__17642__auto__ = cljs.core.count.call(null,c__17641__auto__);
var b__18646 = cljs.core.chunk_buffer.call(null,size__17642__auto__);
if((function (){var i__18645 = (0);
while(true){
if((i__18645 < size__17642__auto__)){
var c = cljs.core._nth.call(null,c__17641__auto__,i__18645);
cljs.core.chunk_append.call(null,b__18646,React.DOM.div(null,React.DOM.h2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-id"], null),cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(6),new cljs.core.Keyword(null,"Id","Id",-2148601).cljs$core$IFn$_invoke$arity$1(c)))),React.DOM.h2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-name"], null),[cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"Names","Names",-565118920).cljs$core$IFn$_invoke$arity$1(c)))].join(''))));

var G__18647 = (i__18645 + (1));
i__18645 = G__18647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18646),frontend$core$containers_$_iter__18643.call(null,cljs.core.chunk_rest.call(null,s__18644__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18646),null);
}
} else {
var c = cljs.core.first.call(null,s__18644__$2);
return cljs.core.cons.call(null,React.DOM.div(null,React.DOM.h2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-id"], null),cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(6),new cljs.core.Keyword(null,"Id","Id",-2148601).cljs$core$IFn$_invoke$arity$1(c)))),React.DOM.h2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-name"], null),[cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"Names","Names",-565118920).cljs$core$IFn$_invoke$arity$1(c)))].join(''))),frontend$core$containers_$_iter__18643.call(null,cljs.core.rest.call(null,s__18644__$2)));
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
return iter__17643__auto__.call(null,new cljs.core.Keyword(null,"containers","containers",-2127048083).cljs$core$IFn$_invoke$arity$1(self__.data));
})());
});

frontend.core.t_frontend$core18640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"containers","containers",-486516556,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta18641","meta18641",1239110015,null)], null);
});

frontend.core.t_frontend$core18640.cljs$lang$type = true;

frontend.core.t_frontend$core18640.cljs$lang$ctorStr = "frontend.core/t_frontend$core18640";

frontend.core.t_frontend$core18640.cljs$lang$ctorPrWriter = (function (this__17469__auto__,writer__17470__auto__,opt__17471__auto__){
return cljs.core._write.call(null,writer__17470__auto__,"frontend.core/t_frontend$core18640");
});

frontend.core.__GT_t_frontend$core18640 = (function frontend$core$containers_$___GT_t_frontend$core18640(containers__$1,data__$1,owner__$1,meta18641){
return (new frontend.core.t_frontend$core18640(containers__$1,data__$1,owner__$1,meta18641));
});

}

return (new frontend.core.t_frontend$core18640(frontend$core$containers,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
frontend.core.stream = (function frontend$core$stream(data,owner){
if(typeof frontend.core.t_frontend$core18655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
frontend.core.t_frontend$core18655 = (function (stream,data,owner,meta18656){
this.stream = stream;
this.data = data;
this.owner = owner;
this.meta18656 = meta18656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
frontend.core.t_frontend$core18655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18657,meta18656__$1){
var self__ = this;
var _18657__$1 = this;
return (new frontend.core.t_frontend$core18655(self__.stream,self__.data,self__.owner,meta18656__$1));
});

frontend.core.t_frontend$core18655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18657){
var self__ = this;
var _18657__$1 = this;
return self__.meta18656;
});

frontend.core.t_frontend$core18655.prototype.om$core$IRender$ = true;

frontend.core.t_frontend$core18655.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,(function (){var iter__17643__auto__ = ((function (this$__$1){
return (function frontend$core$stream_$_iter__18658(s__18659){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__18659__$1 = s__18659;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__18659__$1);
if(temp__4657__auto__){
var s__18659__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18659__$2)){
var c__17641__auto__ = cljs.core.chunk_first.call(null,s__18659__$2);
var size__17642__auto__ = cljs.core.count.call(null,c__17641__auto__);
var b__18661 = cljs.core.chunk_buffer.call(null,size__17642__auto__);
if((function (){var i__18660 = (0);
while(true){
if((i__18660 < size__17642__auto__)){
var log = cljs.core._nth.call(null,c__17641__auto__,i__18660);
cljs.core.chunk_append.call(null,b__18661,React.DOM.li(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(log)),cljs.core.str(" -- "),cljs.core.str(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(log))].join('')));

var G__18662 = (i__18660 + (1));
i__18660 = G__18662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18661),frontend$core$stream_$_iter__18658.call(null,cljs.core.chunk_rest.call(null,s__18659__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18661),null);
}
} else {
var log = cljs.core.first.call(null,s__18659__$2);
return cljs.core.cons.call(null,React.DOM.li(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(log)),cljs.core.str(" -- "),cljs.core.str(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(log))].join('')),frontend$core$stream_$_iter__18658.call(null,cljs.core.rest.call(null,s__18659__$2)));
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
return iter__17643__auto__.call(null,new cljs.core.Keyword(null,"logs","logs",1068148008).cljs$core$IFn$_invoke$arity$1(self__.data));
})());
});

frontend.core.t_frontend$core18655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"stream","stream",-1119494121,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta18656","meta18656",855844380,null)], null);
});

frontend.core.t_frontend$core18655.cljs$lang$type = true;

frontend.core.t_frontend$core18655.cljs$lang$ctorStr = "frontend.core/t_frontend$core18655";

frontend.core.t_frontend$core18655.cljs$lang$ctorPrWriter = (function (this__17469__auto__,writer__17470__auto__,opt__17471__auto__){
return cljs.core._write.call(null,writer__17470__auto__,"frontend.core/t_frontend$core18655");
});

frontend.core.__GT_t_frontend$core18655 = (function frontend$core$stream_$___GT_t_frontend$core18655(stream__$1,data__$1,owner__$1,meta18656){
return (new frontend.core.t_frontend$core18655(stream__$1,data__$1,owner__$1,meta18656));
});

}

return (new frontend.core.t_frontend$core18655(frontend$core$stream,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,frontend.core.containers,frontend.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("containers")], null));
om.core.root.call(null,frontend.core.stream,frontend.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("stream")], null));
(document.body["onclick"] = (function (x){
return cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"streams","streams",1465783789)], null),cljs.core.conj,"YLOL");
}));
var ws_18663 = (new WebSocket("ws://localhost:3000/ws"));
(ws_18663["onmessage"] = ((function (ws_18663){
return (function (x){
cljs.core.println.call(null,"MESSAGE");

var log = cljs.reader.read_string.call(null,(x["data"]));
cljs.core.println.call(null,log);

return cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logs","logs",1068148008)], null),cljs.core.conj,log);
});})(ws_18663))
);
frontend.core.request.call(null,"/containers",(function (body){
var containers = cljs.reader.read_string.call(null,body);
cljs.core.swap_BANG_.call(null,frontend.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083)], null),cljs.core.concat,containers);

return cljs.core.println.call(null,"post change",cljs.core.deref.call(null,frontend.core.app_state));
}));

//# sourceMappingURL=core.js.map