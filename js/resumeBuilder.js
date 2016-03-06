/*
I feel like i cheated by looking in the helper.js file
but you really have to to see all the HTMLxxxxx stuff
the reason i feel i cheated, is because the instructor notes dont
say anything about adding "location" in the contacts (which i added)
nor does the video. also they dont exactly tell you how to append 
anything where it goes, perhaps thats part of the learning process?
another thing im confused about, if i *pend skills to #header the infamous
list item bullets show up, but ordered in the correct area of the DOM however if i
*pend to #skills it of course removes them but then the stretch across the page.
i know how i can fix it, but maybe i didnt look deep enough to figure out whats
going to fix it.
*/ 

//doesnt make sense to type it twice in the same object
username = "smedley76";

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


$("#topContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile),
                          HTMLlocation.replace("%data%", bio.contacts.location),
                          HTMLemail.replace("%data%", bio.contacts.email), 
                          HTMLgithub.replace("%data%", bio.contacts.github));
$("#skills").prepend(HTMLskills.replace("%data%", bio.skills[0]),
                     HTMLskills.replace("%data%", bio.skills[1]),
                     HTMLskills.replace("%data%", bio.skills[2]),
                     HTMLskills.replace("%data%", bio.skills[3]));
