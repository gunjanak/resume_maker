from flask import Flask
from flask import Flask,render_template,request
import os

#pip3 install jsonlines
import jsonlines


app = Flask(__name__)

def process_data(data):
    profile = {}
    profile['name'] = data[0]['Full Name']
    profile['address'] = data[0]['Address']
    profile['email'] = data[0]['email']
    profile['number'] = data[0]['Phone Number']
    profile['current_company'] = data[2]['current_company']
    profile['current_position'] = data[2]['current_position']
    profile['current_job_start_date'] = data[2]['current_job_start_date']
    profile['current_responsibility'] = data[2]['current_responsibility']

    #Education
    profile['education'] = data[1]

    #Previous Experience
    companies_list = list(data[2])
    companies_list = companies_list[4:]
    no_of_pre_company = int(len(companies_list)/5)
    company_list= []
    position_list = []
    job_start_date = []
    job_end_date = []
    prev_responsibility = []
    for i in range(no_of_pre_company):
        company_list.append(data[2]['company_'+str(i+1)])
        position_list.append(data[2]['position_'+str(i+1)])
        job_start_date.append(data[2]['job_start_date_'+str(i+1)])
        job_end_date.append(data[2]['job_end_date_'+str(i+1)])
        prev_responsibility.append(data[2]['responsibility_'+str(i+1)])

    profile['previous_companies'] = company_list
    profile['previous_positions'] = position_list
    profile['previous_start_dates'] = job_start_date
    profile['previous_end_dates'] = job_end_date
    profile['previous_responsibilities'] = prev_responsibility


    #Publications
    paper = []
    journal = []
    published_date = []
    for i in range(int(len(data[3])/3)):
        paper.append(data[3]['paper_'+str(i+1)])
        journal.append(data[3]['journal_org_'+str(i+1)])
        published_date.append(data[3]['journal_date_'+str(i+1)])

    profile['publications'] = paper
    profile['journals'] = journal
    profile['paper_published_date'] = published_date

    #Awards
    awards = []
    awards_org = []
    awards_date = []
    for i in range(int(len(data[5])/3)):
        awards.append(data[5]['award_'+str(i+1)])
        awards_org.append(data[5]['award_org_'+str(i+1)])
        awards_date.append(data[5]['award_date_'+str(i+1)])

    profile['awards'] = awards
    profile['awards_org'] = awards_org
    profile['awards_date'] = awards_date

        



    #skills
    count = 0
    for keys in data[4]:
        print(keys[:5])
        if(keys[:5] == 'skill'):
            count += 1
    
    
    
    skills = []
    rating = []
    count_2 = 0
    for keys in data[4]:
        if(count_2 > (2*count-1)):
            break

        if(count_2%2 == 0):
            skills.append(data[4][keys])
        else:
            rating.append(data[4][keys])
        count_2 += 1
    
    count_3 = 0
    soft_skills = []
    for keys in data[4]:
        if(count_3 > count_2):
            soft_skills.append(data[4][keys])
        count_3 += 1

    profile['primary_skills'] = skills
    profile['rating'] = rating
    profile['soft_skills'] = soft_skills


    return profile


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
            print("Writing Data from index.html") 
            writer.write(request.form)
        print(type(request.form))

    return render_template("education.html")

@app.route("/experience/",methods=['POST'])
def experience():
     #data = json.load(f)
    #this receives data from education.html and writes it in json file.s
    if request.method == 'POST':
        # Print the form data to the console
        for key, value in request.form.items():
            print(f'{key}: {value}')

        name_of_file = "resume.json"
        # filename.jsonl is the name of the file
        with jsonlines.open(name_of_file, "a") as writer:
            print("Writing Data from education.html") 
            writer.write(request.form)


    return render_template("experience.html")


@app.route("/publications/",methods=['POST'])
def publications():
    if request.method == 'POST':
        # Print the form data to the console
        for key, value in request.form.items():
            print(f'{key}: {value}')

        name_of_file = "resume.json"
        # filename.jsonl is the name of the file
        with jsonlines.open(name_of_file, "a") as writer:
            print("Writing Data from experience.html") 
            writer.write(request.form)


    return render_template("publications.html")

@app.route("/skills/",methods=['POST'])
def skills():
     #data = json.load(f)
    if request.method == 'POST':
        # Print the form data to the console
        for key, value in request.form.items():
            print(f'{key}: {value}')

        name_of_file = "resume.json"
        
        with jsonlines.open(name_of_file, "a") as writer:
            print("Writing Data from publications.html") 
            writer.write(request.form)


    return render_template("skills.html")


@app.route("/awards/",methods=['POST'])
def awards():
     #data = json.load(f)
    if request.method == 'POST':
        # Print the form data to the console
        for key, value in request.form.items():
            print(f'{key}: {value}')

        name_of_file = "resume.json"
        
        with jsonlines.open(name_of_file, "a") as writer:
            print("Writing Data from skills.html") 
            writer.write(request.form)


    return render_template("awards.html")


@app.route("/languages/",methods=['POST'])
def languages():
     #data = json.load(f)
    if request.method == 'POST':
        # Print the form data to the console
        for key, value in request.form.items():
            print(f'{key}: {value}')

        name_of_file = "resume.json"
        
        with jsonlines.open(name_of_file, "a") as writer:
            print("Writing Data from awards.html") 
            writer.write(request.form)


    return render_template("languages.html")


@app.route("/resume/",methods=['POST'])
def resume():
    #data = json.load(f)
    if request.method == 'POST':
        # Print the form data to the console
        for key, value in request.form.items():
            print(f'{key}: {value}')

    name_of_file = "resume.json"
    
    with jsonlines.open(name_of_file, "a") as writer:
        print("Writing Data from language.html") 
        writer.write(request.form)

    with jsonlines.open(name_of_file, 'r') as jsonl_f:
        data = [obj for obj in jsonl_f]

    data = process_data(data)


    return render_template("resume.html",data=data)



if __name__ == '__main__':
    app.run(port=5000,debug=True)