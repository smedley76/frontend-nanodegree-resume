/*
Still having issues with skills, they are *pended to #skills without bullets
but arent lined up where it should be, im missing something and i cant find it yet
perhaps its in a furture lesson, everything else looks correct.
*/ 

//doesnt make sense to type it twice in the same object
username = "smedley76";

//Biography object, JSON
var bio = {
  "name": "Steven Medley",
  "role": "Wannabe Developer",
  "contacts": {
    "mobile": "(816)456-0886",
    "github": username,
    "email": username + "@gmail.com",
    "location": "Kansas City"
  },
  "biopic": "images/me.jpg",
  "welcomemessage": "Student of web development, studying:",
  "skills": ["C", "CSS" , "HTML", "JavaScript"]
};
// I *pended everything readable and OCD like organized.
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name),
                     HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic),
                    HTMLwelcomeMsg.replace("%data%", bio.welcomemessage),
                    HTMLskillsStart);
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile),
                         HTMLlocation.replace("%data%", bio.contacts.location),
                         HTMLemail.replace("%data%", bio.contacts.email), 
                         HTMLgithub.replace("%data%", bio.contacts.github));
$("#skills").append(HTMLskills.replace("%data%", bio.skills.join("<br>")));


//Work object, DOT notation, bracket append
var work = {};
work.position = "Assembler; Truck Chassis";
work.employer = "Ford Motor Company";
work.years = "2015 - present";
work.city = "Claycomo, MO";
work.description = "Install front break line on every F150, F150 4x4's install half shafts";
$("#workExperience").append(HTMLworkStart,
                            HTMLworkEmployer.replace("%data%", work["employer"]),
                            HTMLworkTitle.replace("%data%", work["position"]),
                            HTMLworkDates.replace("%data%", work["years"]),
                            HTMLworkLocation.replace("%data%", work["city"]),
                            HTMLworkDescription.replace("%data%", work["description"]));


//Education, BRACKET notation, dot append
var education = {};
education["school"] = "Excelsior Springs Job Corps";
education["degree"] = ["G.E.D.", "HS diploma", "SMAW cert", "GMAW cert", "FCAW cert"]; 
education["years"] = "2006 - 2007";
education["city"] = "Excelsior Springs, MO";
education["major"] = "Welding";
$("#education").append(HTMLschoolStart,
                HTMLschoolName.replace("%data%", education.school),
                HTMLschoolDegree.replace("%data%", education.degree),
                HTMLschoolDates.replace("%data%", education.years),
                HTMLschoolLocation.replace("%data%", education.city),
                HTMLschoolMajor.replace("%data%", education.major));

