(ns scroll.db)

(require '[clj-leveldb :as lev])
(require '[byte-streams :as bs])

(defn encode-val [x]
  (pr-str x))

(defn decode-key [x]
  (byte-streams/to-string x))

(defn decode-val [x]
  (read-string 
    (byte-streams/to-string x)))

(def db-opts 
  {:key-decoder decode-key
   :val-encoder encode-val
   :val-decoder decode-val})
   
(defonce db (lev/create-db "./store" db-opts)) 

(defn delete-all []
  (->> (lev/iterator db)
       (map first)
       (map bs/to-char-sequence)
       (map #(lev/delete db %))))

