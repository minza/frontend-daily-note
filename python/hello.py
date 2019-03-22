from flask import Flask
import requests
app = Flask(__name__)
@app.route('/')
def index():
    a=requests.get('https://list.tmall.com/search_product.htm?q=123&type=p&vmarket=&spm=875.7931836%2FB.a2227oh.d100&from=mallfp..pc_1_searchbutton')
    print(a.text)
    return a.text

if __name__ == '__main__':
    app.run()