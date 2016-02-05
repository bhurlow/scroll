(ns scroll.pages
  (:require [hiccup.core :refer (html)]
            [hiccup.element :refer :all]
            [hiccup.page :refer :all]))

(defn layout [])

(defn cljs-deps []
  [:head (include-js "/goog/base.js" "/main.js")])

(defn cljs-starter []
  [:script {:type "text/javascript"} "goog.require('frontend.core');"])

(defn index []
  (html 
    (cljs-deps)
    [:div#world "world"]
    [:h1 "SAAA"]
    [:h2 "A"] 
    (cljs-starter)))
    
