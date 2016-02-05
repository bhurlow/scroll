(ns frontend.core
  (:require [om.core :as om]
            [om.dom :as dom]))

(enable-console-print!)

(def app-state 
  (atom {:streams '("onthar" "anoafafe")}))

(defn widget [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div
        nil
        (for [s (:streams data)]
          (dom/h2 nil s))))))

(om/root widget app-state
  {:target (. js/document (getElementById "world"))})

(aset js/document.body "onclick" 
      (fn [x] 
        (swap! app-state update-in [:streams] conj "YLOL")))  

(let [ws (new js/WebSocket "ws://localhost:3000/ws")]
  (aset ws "onmessage" (fn [x] (println (aget x "data")))))
