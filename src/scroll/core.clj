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

;; ===== routes =====

(defroutes app
  (GET "/" [] (pages/index))
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

