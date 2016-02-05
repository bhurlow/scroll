(ns scroll.core
  (:require [scroll.db :as db]
            [scroll.docker :as docker]
            [manifold.stream :as s]
            [clj-leveldb :as lev]))

(defonce active-streams (atom nil))

(defn cleanup []
  (map s/close! @active-streams))

(defn stream-logs-to-db []
  (let [streams (docker/all-streams)]
    (reset! active-streams streams)
    (doseq [s streams]
      (s/consume db/insert-log-entry s))))
      


