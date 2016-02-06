(ns frontend.core
  (:require [om.core :as om]
            [cljs.reader :as r]
            [goog.net.XhrIo :as xhr]
            [om.dom :as dom]))

(enable-console-print!)

;; ===== http =====

(defn request [url callback]
  (xhr/send 
    url
    (fn [e] 
      (callback (-> e .-target .getResponseText)))))

(def app-state 
  (atom {:streams '("onthar" "anoafafe")
         :logs '()
         :containers []}))

;; ===== components =====

(defn containers [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div
        nil
        (for [c (:containers data)]
          (dom/div nil
            (dom/h2 {:class "container-id"} (apply str (take 6 (:Id c))))
            (dom/h2 {:class "container-name"} (str (first (:Names c))))))))))

(defn stream [data owner] 
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (for [log (:logs data)]
          (dom/li nil (str (:name log) " -- " (:val log))))))))

;; ===== mount points =====

(om/root containers app-state
  {:target (. js/document (getElementById "containers"))})

(om/root stream app-state
  {:target (. js/document (getElementById "stream"))})

(aset js/document.body "onclick" 
      (fn [x] 
        (swap! app-state update-in [:streams] conj "YLOL")))  

;; ===== boot =====

(let [ws (new js/WebSocket "ws://localhost:3000/ws")]
  (aset ws "onmessage" 
        (fn [x] 
          (println "MESSAGE")
          (let [log (r/read-string (aget x "data"))]
            (println log)
            (swap! app-state update-in [:logs] conj log)))))

(request "/containers" 
         (fn [body] 
           (let [containers (r/read-string body)]
             (swap! app-state update-in [:containers] concat containers)
             (println "post change" @app-state))))
             
