import pickle
from sklearn.feature_extraction.text import TfidfVectorizer 
import nltk
nltk.download('punkt')
from nltk.tokenize import word_tokenize
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer 
nltk.download('wordnet') 
nltk.download('omw-1.4')

lemmatizer = WordNetLemmatizer() 
stop_words = set(stopwords.words('english'))
tfidf_vectorizer = TfidfVectorizer(max_features=5000)

filename = 'movie_review_sentiment_model.pkl'
with open(filename, 'rb') as file:
    loaded_model = pickle.load(file)
    
def process_input(text):
    processed_text = word_tokenize(text)
    processed_text = [lemmatizer.lemmatize(token) for token in processed_text]
    single_document = " ".join(processed_text)
    document_list = [single_document]
    X_features = tfidf_vectorizer.transform(document_list)
    return loaded_model.predict(X_features)[0]

print("ready!")

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/get_sentiment', methods=['POST'])
def get_sentiment():
    if 'review_text' not in request.json:
        print("No text given")
        return jsonify({"error": "No image data provided"}), 400
    
    review_text = request.json['review_text']
    
    result = process_input(review_text)
    
    return jsonify({"sentiment": result, "status": "success"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    