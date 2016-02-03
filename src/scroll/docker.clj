(ns scroll.docker
  (:require [org.httpkit.client :as http]
            [cheshire.core :as json]
            [less.awful.ssl :refer (ssl-context)]
            [manifold.stream :as s]))

(def dir (partial str "./keys/"))

;; TODO, convert key to pk8
;; openssl pkcs8 -topk8 -inform PEM -outform PEM -in key.pem -out key.p8 -nocrypt
(def ctx 
  (apply 
    ssl-context 
    (map dir ["key.p8" "cert.pem" "ca.pem"])))

(def engine 
  (.createSSLEngine ctx))

(def host "https://192.168.99.100:2376")

(defn make-req [path stream?]
  (let [engine (.createSSLEngine ctx)]
    (http/request {:sslengine engine
                   :url (str host path)
                   :as (if stream? :stream :auto)
                   :method :get})))

(defn list-containers []
  (let [res @(make-req "/containers/json" false)]
    (-> (:body res)
        (json/parse-string true)
        (->> (map #(select-keys % [:Names :Id])))))) 
             
(defn stream-logs [id]
  (let [res @(make-req (str "/containers/" id "/logs") true)]
    res))

              





