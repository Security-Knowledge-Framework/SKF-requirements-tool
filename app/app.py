from flask import Flask, render_template
import json
from itertools import groupby

app = Flask(__name__)

@app.route('/')
def home():
    with open('converter/ASVS-4.0.3.json', 'r') as f:
        data = json.load(f)
    
    data.sort(key=lambda x: x['chapter_name'])
    grouped_data_by_chapter = {k: list(v) for k, v in groupby(data, key=lambda x: x['chapter_name'])}
    
    data.sort(key=lambda x: x['section_name'])
    grouped_data_by_section = {k: list(v) for k, v in groupby(data, key=lambda x: x['section_name'])}
    
    return render_template('index.html', data_chapter=grouped_data_by_chapter, data_section=grouped_data_by_section)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
