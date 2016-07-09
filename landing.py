from flask import Flask, render_template
import json
import urllib

app = Flask(__name__)

# Home page

@app.route('/')
def index():
    return render_template("index.html")



@app.route('/stock_chart')
def stock_chart():
    return render_template("stock_chart.html")




if __name__ == "__main__":
    app.run(debug=True)