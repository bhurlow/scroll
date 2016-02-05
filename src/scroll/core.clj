(ns scroll.core
  (:require [scroll.db :as db]
            [scroll.docker :as docker]
            [scroll.pages :as pages]
            [manifold.stream :as s]
            [clj-leveldb :as lev]
            [aleph.http :as http]
            [ring.middleware.file :refer :all]
            [ring.middleware.resource :refer :all]
            [compojure.core :refer :all]
            [compojure.route :refer (not-found resources)]
            [hiccup.core :refer (html)]))

(defonce active-streams (atom nil))

(defn cleanup []
  (map s/close! @active-streams))

(defn stream-logs-to-db []
  (let [streams (docker/all-streams)]
    (reset! active-streams streams)
    (doseq [s streams]
      (s/consume db/insert-log-entry s))))

(defn handle-ws [req]
  (let [s @(http/websocket-connection req)
        src (s/throttle 1 (s/->source (repeatedly 100 #(str (rand-int 100)))))]
    (println "USING WS" s)
    (s/connect src s)
    "dealing with ws"))

;; ===== routes =====

(defroutes app
  (GET "/" [] (pages/index))
  (GET "/ws" req (handle-ws req))
  (not-found "<h1>Page not found</h1>"))

(def handler
  (-> #'app
      (wrap-resource "/public")))

;; ===== web handlers =====
      
(defonce server (atom nil))

(defn start-server [] 
  (reset! server 
    (http/start-server handler {:port 3000})))

(defn stop-server []
  (@server :timeout 100))

