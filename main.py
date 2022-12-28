from flask import Flask
from flask import Flask,render_template,request
import os

#pip3 install jsonlines
import jsonlines


app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')


@app.route("/education/",methods=['POST'])
def education():
     
    #this receives data from index2.html and writes it in json file.s
    if request.method == 'POST':
        # Print the form data to the console
        for key, value in request.form.items():
            print(f'{key}: {value}')
        

        

        
        if os.path.exists("resume.json"):
            os.remove("resume.json")
            name_of_file = "resume.json"
        else:
            name_of_file = "resume.json"
        # filename.jsonl is the name of the file
        #with jsonlines.open(name_of_file, "a") as writer:
        #    print("Writing Data from index2.html") 
        #    writer.write(request.form)
        #with open(name_of_file,'w') as fp:
         #   json.dump(request.form,fp,default=str)
        
        with jsonlines.open(name_of_file, "x") as writer:
            print("Writing Data from index2.html") 
            writer.write(request.form)
        print(type(request.form))

    return render_template("education.html")
    
if __name__ == '__main__':
    app.run(port=5000,debug=True)