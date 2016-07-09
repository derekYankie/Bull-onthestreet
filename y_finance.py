#Pullling yahoo finance api

import urllib

import json


myserviceurl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback='

json_obj = urllib.urlopen(myserviceurl)
data = json_obj.read()

js = json.loads(str(data))

quotes = js['query']['results']['quote']

for i in quotes:
    print i['Symbol']