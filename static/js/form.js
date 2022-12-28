var i = 0; /* Set Global Variable i */
function increment(){
i += 1; /* Function for automatic increment of field's "Name" attribute. */
}
/*
---------------------------------------------

Function to Remove Form Elements Dynamically
---------------------------------------------

*/
function removeElement(parentDiv, childDiv){
if (childDiv == parentDiv){
alert("The parent div cannot be removed.");
}
else if (document.getElementById(childDiv)){
var child = document.getElementById(childDiv);
var parent = document.getElementById(parentDiv);
parent.removeChild(child);
}
else{
alert("Child div has already been removed or does not exist.");
return false;
}
}


/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the PhD text field.

----------------------------------------------------------------------------
*/
function phdFunction(){
    var r = document.createElement('span');
    var phd = document.createElement('h1');
    phd.innerHTML = "PHD";
    r.appendChild(phd);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("class","form-control")
    y.setAttribute("placeholder", "University");

    
    //increment();

    y.setAttribute("Name", "phd_uni");
    r.appendChild(y);
    
    
    
    
    var start_date = document.createElement("INPUT");
    start_date.setAttribute("class","form-control")
    start_date.setAttribute("type","date");
    start_date.setAttribute("placeholder","start_date")
    start_date.setAttribute("Name","start_date")
    r.appendChild(start_date)
    
    var end_date = document.createElement("INPUT");
    end_date.setAttribute("class","form-control");
    end_date.setAttribute("type","date");
    end_date.setAttribute("placeholder","end_date")
    end_date.setAttribute("Name","end_date")
    r.appendChild(end_date)
    
    var thesis = document.createElement("INPUT");
    thesis.setAttribute("class","form-control")
    thesis.setAttribute("type","text");
    thesis.setAttribute("placeholder","Your Thesis Title")
    thesis.setAttribute("Name","phd_thesis")
    r.appendChild(thesis)
    
    var thesis_url = document.createElement("INPUT");
    thesis_url.setAttribute("class","form-control");
    thesis_url.setAttribute("type","href");
    thesis_url.setAttribute("placeholder","Your Thesis Url here")
    thesis_url.setAttribute("Name","phd_thesis_url")
    r.appendChild(thesis_url);



    r.setAttribute("id", "phd");
    document.getElementById("myForm").appendChild(r);
    
    
    


    document.getElementById("myForm").appendChild(r);
        //console.log(r);
        let child_of_r = r.children;
        console.log(child_of_r[0]);

        for (let i = 1; i < child_of_r.length; i++) {
            child_of_r[i].setAttribute("class","form-control");

            
          }
          

    var cross = document.createElement("IMG");
    cross.setAttribute('width','10%');
    cross.setAttribute('height','10%');
    cross.setAttribute("src", "https://www.freeiconspng.com/uploads/x-delete-button-png-15.png");
    cross.setAttribute("onclick", "removeElement('myForm','phd')");
    r.appendChild(cross);

    var horizontal_line = document.createElement('hr');
    horizontal_line.setAttribute("height","20px");
    horizontal_line.setAttribute("color","gray");
    r.addpendChild(horizontal_line);


   


    }
   
    /*
    
    ----------------------------------------------------------------------------
    
    Functions that will be called upon, when user click on the PostGrad text field.
    
    ----------------------------------------------------------------------------
    */
    function PostGradFunction(){
        var r = document.createElement('span');
        var postgrad = document.createElement('h1');
        postgrad.innerHTML = "Post Graduation";
        r.appendChild(postgrad);
        var y = document.createElement("INPUT");
        y.setAttribute("type", "text");
        y.setAttribute("placeholder", "University");
        //increment();
        y.setAttribute("Name", "postgrad_uni");
        r.appendChild(y);
     
        
    
        var postgrad_degree = document.createElement("INPUT");
        postgrad_degree.setAttribute("type","text");
        postgrad_degree.setAttribute("placeholder","Name of Degree");
        postgrad_degree.setAttribute("Name","postgrad_degree");
        r.appendChild(postgrad_degree)
        
        
        var start_date = document.createElement("INPUT");
        start_date.setAttribute("type","date");
        start_date.setAttribute("placeholder","start_date")
        start_date.setAttribute("Name","postgrad_start_date")
        r.appendChild(start_date)
        
        var end_date = document.createElement("INPUT");
        end_date.setAttribute("type","date");
        end_date.setAttribute("placeholder","end_date")
        end_date.setAttribute("Name","postgrad_end_date")
        r.appendChild(end_date)
    
    
        var thesis = document.createElement("INPUT");
        thesis.setAttribute("type","text");
        thesis.setAttribute("placeholder","Your Thesis Title")
        thesis.setAttribute("Name","postgrad_thesis")
        r.appendChild(thesis)
    
        var thesis_url = document.createElement("INPUT");
        thesis_url.setAttribute("type","href");
        thesis_url.setAttribute("placeholder","Your Thesis Url here")
        thesis_url.setAttribute("Name","postgrad_thesis_url")
        r.appendChild(thesis_url)
        
        r.setAttribute("id", "postgrad");
        
        



        document.getElementById("myForm").appendChild(r);
        //console.log(r);
        let child_of_r = r.children;

        for (let i = 1; i < child_of_r.length; i++) {

            child_of_r[i].setAttribute("class","form-control");

            
          }

        var cross = document.createElement("IMG");
        cross.setAttribute('width','10%');
        cross.setAttribute('height','10%');
        cross.setAttribute("src", "https://www.freeiconspng.com/uploads/x-delete-button-png-15.png");
        cross.setAttribute("onclick", "removeElement('myForm','postgrad')");
        r.appendChild(cross);



        
        }
    
    
    
    /*
    
    ----------------------------------------------------------------------------
    
    Functions that will be called upon, when user click on the PostGrad text field.
    
    ----------------------------------------------------------------------------
    */
    function UnderGradFunction(){
        var r = document.createElement('span');
        var undergrad = document.createElement('h1');
        undergrad.innerHTML = "Under Graduation";
        r.appendChild(undergrad);
        var y = document.createElement("INPUT");
        y.setAttribute("type", "text");
        y.setAttribute("placeholder", "University");
        //var g = document.createElement("IMG");
        //g.setAttribute("src", "delete.png");
        //increment();
        y.setAttribute("Name", "undergrad_uni");
        r.appendChild(y);
        //g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
        //r.appendChild(g);
        var degree = document.createElement("INPUT");
        degree.setAttribute("type","text");
        degree.setAttribute("placeholder","Name of Degree");
        degree.setAttribute("Name","undergrad_degree");
        r.appendChild(degree)
    
    
    
        var start_date = document.createElement("INPUT");
        start_date.setAttribute("type","date");
        start_date.setAttribute("placeholder","start_date")
        start_date.setAttribute("Name","undergrad_start_date")
        r.appendChild(start_date)
        
        var end_date = document.createElement("INPUT");
        end_date.setAttribute("type","date");
        end_date.setAttribute("placeholder","end_date")
        end_date.setAttribute("Name","undergrad_end_date")
        r.appendChild(end_date)
    
    
        var thesis = document.createElement("INPUT");
        thesis.setAttribute("type","text");
        thesis.setAttribute("placeholder","Your Final Year Project Title")
        thesis.setAttribute("Name","undergrad_project")
        r.appendChild(thesis)
    
        var thesis_url = document.createElement("INPUT");
        thesis_url.setAttribute("type","href");
        thesis_url.setAttribute("placeholder","Your Final Year Project Url here")
        thesis_url.setAttribute("Name","undergrad_project_url")
        r.appendChild(thesis_url)
        
        
    
        
        
        r.setAttribute("id", "undergrad");
        
        document.getElementById("myForm").appendChild(r);


        document.getElementById("myForm").appendChild(r);
        


          document.getElementById("myForm").appendChild(r);
        //console.log(r);
        let child_of_r = r.children;

        for (let i = 1; i < child_of_r.length; i++) {

            child_of_r[i].setAttribute("class","form-control");

            
          }

        var cross = document.createElement("IMG");
        cross.setAttribute('width','10%');
        cross.setAttribute('height','10%');
        cross.setAttribute("src", "https://www.freeiconspng.com/uploads/x-delete-button-png-15.png");
        cross.setAttribute("onclick", "removeElement('myForm','undergrad')");
        r.appendChild(cross);


        }
    
    
    
    /*
    
    ----------------------------------------------------------------------------
    
    Functions that will be called upon, when user click on the HighSchool text field.
    
    ----------------------------------------------------------------------------
    */
    function HighSchoolFunction(){
        var r = document.createElement('span');
        var HighSchool = document.createElement('h1');
        HighSchool.innerHTML = "High School";
        r.appendChild(HighSchool);
        var y = document.createElement("INPUT");
        y.setAttribute("type", "text");
        y.setAttribute("placeholder", "School");
        //var g = document.createElement("IMG");
        //g.setAttribute("src", "delete.png");
        //increment();
        y.setAttribute("Name", "School");
        r.appendChild(y);
        //g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
        //r.appendChild(g);
        
        var start_date = document.createElement("INPUT");
        start_date.setAttribute("type","date");
        start_date.setAttribute("placeholder","start_date")
        start_date.setAttribute("Name","highschool_start_date")
        r.appendChild(start_date)
        
        var end_date = document.createElement("INPUT");
        end_date.setAttribute("type","date");
        end_date.setAttribute("placeholder","end_date")
        end_date.setAttribute("Name","highschool_end_date")
        r.appendChild(end_date)
    
        
        r.setAttribute("id", "highschool");
        
        document.getElementById("myForm").appendChild(r);


    
          let child_of_r = r.children;
  
          for (let i = 1; i < child_of_r.length; i++) {
  
              child_of_r[i].setAttribute("class","form-control");
  
              
            }
  
          var cross = document.createElement("IMG");
          cross.setAttribute('width','10%');
          cross.setAttribute('height','10%');
          cross.setAttribute("src", "https://www.freeiconspng.com/uploads/x-delete-button-png-15.png");
          cross.setAttribute("onclick", "removeElement('myForm','highschool')");
          r.appendChild(cross);
  



        }


/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Experience text field.

----------------------------------------------------------------------------
*/
function ExperienceFunction(){
    var r = document.createElement('span');
    var currentjob = document.createElement('h1');
    currentjob.innerHTML = "Experience";
    r.appendChild(currentjob);


    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Company");
    //var g = document.createElement("IMG");
    //g.setAttribute("src", "delete.png");
    increment();
    y.setAttribute("Name", "company_"+i);
    r.appendChild(y);
    //g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    //r.appendChild(g);

    var position = document.createElement("INPUT");
    position.setAttribute("type","text");
    position.setAttribute("placeholder","Position")
    position.setAttribute("Name","position_"+i)
    r.appendChild(position)
    
    
    var start_date = document.createElement("INPUT");
    start_date.setAttribute("type","date");
    start_date.setAttribute("placeholder","start_date")
    start_date.setAttribute("Name","job_start_date_"+i)
    r.appendChild(start_date)


    var end_date = document.createElement("INPUT");
    end_date.setAttribute("type","date");
    end_date.setAttribute("placeholder","end_date")
    end_date.setAttribute("Name","job_end_date_"+i)
    r.appendChild(end_date)
    
    var responsibility = document.createElement("INPUT");
    responsibility.setAttribute("type","text");
    responsibility.setAttribute("placeholder","Responsibility")
    responsibility.setAttribute("Name","responsibility_"+i)
    r.appendChild(responsibility)
    
    
    r.setAttribute("id", "job"+i);
    
    document.getElementById("myForm").appendChild(r);



    let child_of_r = r.children;
  
    for (let i = 1; i < child_of_r.length; i++) {

        child_of_r[i].setAttribute("class","form-control");

        
    }

    var cross = document.createElement("IMG");
    cross.setAttribute('width','10%');
    cross.setAttribute('height','10%');
    cross.setAttribute("src", "https://www.freeiconspng.com/uploads/x-delete-button-png-15.png");
    //cross.setAttribute("onclick", "removeElement('myForm','job'+i)");
    cross.setAttribute("onclick", "removeElement('myForm','job" + i + "')");
    r.appendChild(cross);
  




    }





/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Current Job text field.

----------------------------------------------------------------------------
*/
function CurrentJobFunction(){
    var r = document.createElement('span');
    var currentjob = document.createElement('h1');
    currentjob.innerHTML = "Current Job";
    r.appendChild(currentjob);


    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Company");
    //var g = document.createElement("IMG");
    //g.setAttribute("src", "delete.png");
    //increment();
    y.setAttribute("Name", "current_company");
    r.appendChild(y);
    //g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    //r.appendChild(g);

    var position = document.createElement("INPUT");
    position.setAttribute("type","text");
    position.setAttribute("placeholder","Current Position")
    position.setAttribute("Name","current_position")
    r.appendChild(position)
    
    
    
    var start_date = document.createElement("INPUT");
    start_date.setAttribute("type","date");
    start_date.setAttribute("placeholder","start_date")
    start_date.setAttribute("Name","current_job_start_date")
    r.appendChild(start_date)

    var responsibility = document.createElement("INPUT");
    responsibility.setAttribute("type","text");
    responsibility.setAttribute("placeholder","Responsibility")
    responsibility.setAttribute("Name","current_responsibility")
    r.appendChild(responsibility)
    
    
    
    r.setAttribute("id", "currentjob");
    
    document.getElementById("myForm").appendChild(r);







    let child_of_r = r.children;
  
    for (let i = 1; i < child_of_r.length; i++) {

        child_of_r[i].setAttribute("class","form-control");

        
    }

    var cross = document.createElement("IMG");
    cross.setAttribute('width','10%');
    cross.setAttribute('height','10%');
    cross.setAttribute("src", "https://www.freeiconspng.com/uploads/x-delete-button-png-15.png");
    cross.setAttribute("onclick", "removeElement('myForm','currentjob')");
    r.appendChild(cross);



    }



/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Publications text field.

----------------------------------------------------------------------------
*/
function publicationFunction(){
    var r = document.createElement('span');
    var publication = document.createElement('p');
    publication.innerHTML = "Publicationss";
    r.appendChild(publication);


    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Paper Title");
    //var g = document.createElement("IMG");
    //g.setAttribute("src", "delete.png");
    increment();
    y.setAttribute("Name", "paper_"+i);
    r.appendChild(y);
    //g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    //r.appendChild(g);
    
    
    var organization = document.createElement("INPUT");
    organization.setAttribute("type","text");
    organization.setAttribute("placeholder","Name of Journal/Conference")
    organization.setAttribute("Name","journal_org_"+i)
    r.appendChild(organization)


    var date = document.createElement("INPUT");
    date.setAttribute("type","date");
    date.setAttribute("placeholder","Journal Date")
    date.setAttribute("Name","journal_date_"+i)
    r.appendChild(date)

    
    
    r.setAttribute("id", "journal_"+i);
    
    document.getElementById("myForm").appendChild(r);



    let child_of_r = r.children;
  
    for (let i = 1; i < child_of_r.length; i++) {

        child_of_r[i].setAttribute("class","form-control");

        
    }

    var cross = document.createElement("IMG");
    cross.setAttribute('width','10%');
    cross.setAttribute('height','10%');
    cross.setAttribute("src", "https://www.freeiconspng.com/uploads/x-delete-button-png-15.png");
    cross.setAttribute("onclick", "removeElement('myForm','journal_" + i + "')");
    r.appendChild(cross);



    }




/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Reset Button.

------------------------------------------------------------------------------
*/
function resetElements(){
    document.getElementById('myForm').innerHTML = '';
    }
    