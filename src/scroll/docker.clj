(ns scroll.docker
  (:require [aleph.http :as http]
            [byte-streams :as bs]
            [cheshire.core :as json]
            [manifold.deferred :as d]
            [manifold.stream :as s]))

(def host "http://192.168.99.100:5000")
(def cid "f8b8c66ed5c8")

(defn list-containers []
  (-> @(http/get (str host "/containers/json"))
       :body
       bs/to-string
       (json/parse-string true)
       (->> (map #(select-keys % [:Names :Id])))))

(defn log-stream [id]
  (-> @(http/get (str host "/containers/" id "/logs?stdout=1&tail=10&follow=1"))
       :body
       (bs/to-line-seq)
       (s/->source)))

(defn annotate [container-name]
  (fn [log] 
    {:name container-name
     :val log}))

(defn annotated-log-stream [name id] 
  (->> (log-stream id)
       (s/map (fn [x] {:name name :val x}))))

(defn container->stream [container]
  (annotated-log-stream 
    (:Names container) 
    (:Id container)))

(defn all-streams []
  (let [containers (list-containers)
        streams (map container->stream containers)]
    streams))

;; ===== manifold streams =====

; (while true (println "GIT" @(s/take! mystream)))

; (def test-stream 
;   (s/->source (range 50)))

; (->> test-stream
;      (s/map inc)
;      (s/map (fn [x] {:key x}))
;      (s/stream->seq))

; (->> (s/->source (range 10))
;      (s/map (fn [x] {:key x}))
;      (s/take!)
;      (d/unwrap)
;      (:key))

; (->> (log-stream cid)
;      (s/map (fn [x] {:key x}))
;      (s/take!)
;      (d/unwrap)
;      (:key))
     


; (def log-url 
;   (str host "/containers/39220889e1c67f313e8dc017eb81696cdf3184c64845de3c71b2d8d6723d0960/logs?stdout=1&follow=1"))

; (def dir (partial str "./keys/"))

;; TODO, convert key to pk8
;; openssl pkcs8 -topk8 -inform PEM -outform PEM -in key.pem -out key.p8 -nocrypt
; (def ctx 
;   (apply 
;     ssl-context 
;     (map dir ["key.p8" "cert.pem" "ca.pem"])))

; (def engine 
;   (.createSSLEngine ctx))

; (def host "https://192.168.99.100:2376")

; (defn make-req [path stream?]
;   (let [engine (.createSSLEngine ctx)]
;     (println "MAKING REQ")
;     (http/request {:sslengine engine
;                    :url (str host path)
;                    ; :as (if stream? :stream :auto)
;                    :as :stream
;                    :method :get})))

; (def log-url 
;   (str host "/containers/39220889e1c67f313e8dc017eb81696cdf3184c64845de3c71b2d8d6723d0960/logs?stdout=1&tail=10"))

; (defn log-req []
;   (let [engine (.createSSLEngine ctx)]
;     @(http/request {:sslengine engine}
;                    :keepalive 30000
;                    :url log-url
;                    :method :get)))

; (defn list-containers []
;   (let [res @(make-req "/containers/json" false)]
;     (-> (:body res)
;         (json/parse-string true)
;         (->> (map #(select-keys % [:Names :Id])))))) 

; (defn log-stream [id]
;   (:body
;     @(make-req (str "/containers/" id "/logs?stdout=1&follow=1") false)))

; (defn buffer [id]
;   (byte-streams/convert
;     (log-stream id) 
;     java.nio.ByteBuffer))

; (def target "39220889e1c67f313e8dc017eb81696cdf3184c64845de3c71b2d8d6723d0960")

; (defn consume-heap [buffer]
;   (while (.hasRemaining buffer)
;     (prn (.get buffer))))

             
; (defn stream-logs [id]
;   (let [stream (log-stream id)]
;     (println stream) 
;     (loop [stream stream]
;       (while (pos? (.available stream))
;         (prn (.read stream))))))

;; ===== testing streaming =====

; (defonce server (atom nil))

; (defn pump-channel [channel]
;   (dotimes [i 20]
;     (println "OPEN?" (open? channel))
;     (println "IN DOTIMES" i)
;     (Thread/sleep 300)
;     (if (= i 19)
;       (send! channel (str "event" i))
;       (send! channel (str "event" i) false))))

; (defn handler [req]
;   (with-channel req channel
;     (pump-channel channel)))

; (defn start-server []
;   (reset! server (run-server handler {:port 9090})))

; (defn stop-server []
;   (@server :timeout 100))
  
; (stop-server)
; (start-server)

;; ===== testing streamin client =====

;; can't seem to get client to return stream until
;; all channel writes have happened????

; @(http/get "http://localhost:9090" {:as :stream})

; (http/get "http://localhost:9090" {:as :stream}
;           (fn [req] 
;             (println "got req")
;             (println "->" req)))
  

