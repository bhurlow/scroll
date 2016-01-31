(ns scroll.core)
(require '[clj-leveldb :as lev])

(defonce db (lev/create-db "/tmp/leveldb" {}))



