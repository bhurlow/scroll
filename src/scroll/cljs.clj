(ns scroll.cljs)
(require 'cljs.build.api)

; (cljs.build.api/build 
;   "src/frontend" 
;   {:output-to "resources/public/main.js"
;    :output-dir "resources/public"
;    :parallel-build true})

(defn watch []
  (cljs.build.api/watch
    "src/frontend" 
    {:output-to "resources/public/main.js"
     :output-dir "resources/public"
     :parallel-build true}))

(.start (Thread. (watch)))
