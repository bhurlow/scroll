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
    [:section
      [:h2 "Running Containers"]
      [:div#containers]]
    [:section
     [:h2 "Logs"]
     [:div#stream "world"]]
    (cljs-starter)))
    
