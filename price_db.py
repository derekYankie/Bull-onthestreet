# Self updating stock price database

import sqlite3

# Connect to database object
'''
Ask Joe whats the difference btwn .sqlite and .db
conn = sqlite3.connect('stock_price.sqlite')
cur = conn.cursor()
'''

# If database doesnt exist create it
conn = sqlite3.connect('stock_price.db')
cur = conn.cursor()
print "Opened database successfully";

# Drop table if it'll already exist
cur.execute('''
DROP TABLE IF EXISTS stocks''')

# Create a table
# when you call this method
# Receive user input, two values: symbol and price

symbol = raw_input('Enter stock symbol: ')
if(len(symbol)<1):symbol = 'GOOG'

price = raw_input('Enter stock price: ')
if(len(price)<1):price = '325'


#Input user data into table

def data_entry(symbol, price):
    cur.execute('CREATE TABLE IF NOT EXISTS stocks(symbol TEXT, price REAL)')
    cur.execute('INSERT INTO stocks (symbol, price) VALUES (?,?)', (symbol, price))
    conn.commit()
    cur.close()
    conn.close()

data_entry(symbol, price)


'''
# Input data into table


def data_entry():
    cur.execute("INSERT INTO stocks VALUES('GOOG', 345.60)")
    conn.commit()
    cur.close()
    conn.close()

create_table()
data_entry()
'''



