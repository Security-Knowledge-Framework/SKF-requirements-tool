# SKF Requirements-tool
This is the tool used to easily select requirements from standards like the ASVS 

## run locally


To create and start a Python virtual environment, you can use the venv module that comes with Python 3. This module creates a self-contained environment 
that can have its own independent set of installed Python packages.

First, navigate to your project directory (or wherever you want the virtual environment to be created):

```bash
cd /path/to/your/project
python3 -m venv env
source env/bin/activate
```

```bash
pip3 install -r requirements.txt
```

```bash
python3 app.py
```

To exit the virtual environment when you're done, you can use the deactivate command:


```bash
deactivate
```

## OR

```bash
docker build -t my-flask-app .
```

```bash
docker run -p 5000:5000 my-flask-app
```

# Special thanks to our collaborators!

[Niek Hoogma](https://www.linkedin.com/in/niekhoogma/)

[Riccardo ten Cate](https://www.linkedin.com/in/riccardo-ten-cate-a0b79780/)
