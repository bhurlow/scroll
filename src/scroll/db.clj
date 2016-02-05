(ns scroll.db)

(require '[clj-leveldb :as lev])
(require '[byte-streams :as bs])

;; use this to put
;; clj values into the db

; (defn encode-val [x]
;   (pr-str x))

; (defn decode-key [x]
;   (byte-streams/to-string x))

; (defn decode-val [x]
;   (read-string 
;     (byte-streams/to-string x)))

(def db-opts 
  {:key-decoder byte-streams/to-string
   :val-decoder byte-streams/to-string})
   
(defonce db (lev/create-db "/tmp/store" db-opts)) 

(defn delete-all []
  (->> (lev/iterator db)
       (map first)
       (map bs/to-char-sequence)
       (map #(lev/delete db %))))

;; must make two puts for our two different
;; lookup indexes 
;; 1. for all time ordered logs
;; 2. for ordered logs for a given container name
(defn insert-log-entry [entry]
  (let [ms (System/currentTimeMillis)
        name (reduce str (:name entry))
        val (:val entry)
        key (str ms ":" name)]
    (lev/put db key val)))

(defn all-db []
  (lev/iterator db))

(lev/put db (str (System/currentTimeMillis) ":" "/aihfe")
          "may val string")






