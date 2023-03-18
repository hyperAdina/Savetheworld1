from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
  name = None
  email = None
  gender = None
  preferences = None
  
  if request.method == 'POST':
    name = request.form['name']
    email = request.form['email']
    gender = request.form['gender']
    preferences = request.form.getlist('preferences')
    with open('data.txt', 'a') as file:
      file.write(name+' '+email+' '+gender+' \n')
  return render_template('index.html', name=name, email=email, gender=gender, preferences=preferences)
  
  
  return render_template('index.html')

    


app.run(host='0.0.0.0', port=81)
