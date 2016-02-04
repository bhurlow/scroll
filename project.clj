(defproject scroll "0.1.0-SNAPSHOT"
  :main scroll.core
  :license {:name "MIT" :url "http://brianhurlow.com"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [factual/clj-leveldb "0.1.1"]
                 [byte-streams "0.2.1-alpha1"]
                 [http-kit "2.1.18"]
                 [aleph "0.4.1-beta2"]
                 [less-awful-ssl "1.0.1"]
                 [cheshire "5.5.0"]
                 [manifold "0.1.1"]])
