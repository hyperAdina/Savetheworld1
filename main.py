from flask import Flask, render_template, request
app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])
def webapphw():
    subjects = ['Study', 'CCA', 'Life']
    return render_template('webapphw.html', subjects=subjects)

app.run(host='0.0.0.0', port=81)