import urllib, json

url ="http://finance.yahoo.com/d/quotes.csv"

"""Receive the content of ``url``, parse it as JSON and return the
       object.
    """


urlhandle = urllib.urlopen(url)
data = urlhandle.read()
#deCearalizing library of list of dictionaries
try: js = json.loads(str(data))
except: js = None

print data


stock = js["results"][0]["quote"]["symbol"]
print 'Stock: ', stock

yql = {
     "symbol": "YHOO",
     "Ask": "35.130",
     "AverageDailyVolume": "14096600",
     "Bid": "35.120",
     "BookValue": "30.033",
     "Change_PercentChange": "-1.115 - -3.077%",
     "Change": "-1.115",
}

print(json.dumps(yql))
'''


url = base_url + urllib.urlencode(query)
response = urllib.urlopen(url)
data = response.read()
quote = json.loads(data)
print len(quote)
'''
