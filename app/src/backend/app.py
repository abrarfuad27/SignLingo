from flask import Flask, jsonify
from flaskext.mysql import MySQL

app = Flask(__name__)
mysql = MySQL(app)

# Configure MySQL settings
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'b2#aK7gY19nP'
app.config['MYSQL_DATABASE_DB'] = 'quiz_'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

# Initialize MySQL
mysql.init_app(app)

@app.route('/api/questions', methods=['GET'])
def get_questions():
    try:
        cursor = mysql.get_db().cursor()
        cursor.execute('SELECT * FROM questions')
        data = cursor.fetchall()
        return jsonify(data)
    except Exception as e:
        return str(e)
    finally:
        cursor.close()


@app.route('/api/answers', methods=['GET'])
def get_answers():
    try:
        cursor = mysql.get_db().cursor()
        cursor.execute('SELECT * FROM answers')
        data = cursor.fetchall()
        return jsonify(data)
    except Exception as e:
        return str(e)
    finally:
        cursor.close()



if __name__ == '__main__':
    app.run(debug=True)