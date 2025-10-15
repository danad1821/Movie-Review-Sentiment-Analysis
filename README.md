# Movie Review Sentiment Analysis #
## Description: ##
This project implements a Sentiment Analysis model using Python to classify IMDB movie reviews as either positive or negative. It utilizes a large public dataset of 50,000 highly polarized movie reviews to train a robust classification model. The goal is to demonstrate a standard Natural Language Processing (NLP) workflow from data cleaning to model deployment. 
## Dataset: ##
The model is trained and evaluated using the IMDB Dataset of 50k Movie Reviews, a classic benchmark dataset for binary sentiment classification.
* Source: Kaggle
* Link: https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews
* Content: 50,000 movie reviews, equally split between 25,000 for training and 25,000 for testing in the original dataset.
* Task: Binary classification (Positive/Negative sentiment).
## NLP Pipline: ##
The project followed a multi-step pipeline for cleaning, vectorizing, and classifying the text data.
1. Data Preparation:
  * The raw data was loaded and randomly shuffled.
  * The dataset was split into a training set (80%) and a testing set (20%). The training set consisted of 40,000 reviews.
3. Text Preprocessing:
The review text underwent several cleaning steps using Python's NLP libraries:
  * Lowercasing all text.
  * Removing HTML tags
  * Removing punctuation, special characters, and numbers.
  * Stop Word Removal: Common words were removed using the English stop word list from NLTK.
  * Lemmatization
5. Feature Engineering & Modeling:
  * Vectorization: The cleaned text was converted into numerical features using a Tf-Idf Vectorizer. This resulted in 87,319 features (unique tokens) for the training data.
  * Model: A Logistic Regression model from scikit-learn was used as the classifier.
## Results: ##
The Logistic Regression model was evaluated on the 10,000-review test set.
### Overall Performance ###
The model achieved high and balanced performance across all major metrics:
| Metric | Score |
| Accuracy | 0.887 |
| Precision | 0.89 |
| Recall | 0.89 |
| F1-Score | 0.89 |

### Classification Report ###
| Class | Precision | Recall | F1-Score | Support |
| Negative | 0.88 | 0.90 | 0.89 | 4991 |
| Positive | 0.90 | 0.88 | 0.89 | 5009 |
