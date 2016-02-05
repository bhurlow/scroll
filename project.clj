(defproject scroll "0.1.0-SNAPSHOT"
  :main scroll.core
  :license {:name "MIT" :url "http://brianhurlow.com"}
  :plugins [[lein-cljsbuild "1.1.2"]]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [org.omcljs/om "0.9.0"]
                 [factual/clj-leveldb "0.1.1"]
                 [byte-streams "0.2.1-alpha1"]
                 [http-kit "2.1.18"]
                 [aleph "0.4.1-beta2"]
                 [less-awful-ssl "1.0.1"]
                 [cheshire "5.5.0"]
                 [manifold "0.1.1"]
                 [hiccup "1.0.5"]
                 [compojure "1.4.0"]]
  :cljsbuild {
              :builds [{ 
                        :source-paths ["src-cljs"]
                        :compiler {:output-to "main.js"
                                   :optimizations :whitespace
                                   :parallel-build true}}]})
                                   
