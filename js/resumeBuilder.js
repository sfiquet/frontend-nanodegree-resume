/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Sylvie Fiquet",
	"role": "Web Developer",
	"contact": {
		"mobile": "01234-1234",
		"email": "sfiquetdev@gmail.com",
		"github": "sfiquet",
		"twitter": "bla",
		"location": "United Kingdom"
	},
	"picture": "images/fry.jpg",
	"welcome": "Welcome to my Web Page!",
	"skills": ["Programming", "Javascript", "Node.js", "Python", "TDD", "Git"]
};

var work = {};
work.position = "Computer Science Teacher";
work.employer = "Priory Group";
work.years = "2012-2013";
work.city = "Godalming";

var education = {};
education["name"] = "University René Descartes Paris V";
education["years"] = "1990-1991";
education["city"] = "Paris, France";


var formatted = {
	"name": HTMLheaderName.replace("%data%", bio.name),
	"role": HTMLheaderRole.replace("%data%", bio.role),
	"contact": HTMLemail.replace("%data%", bio.contact.email),
	"picture": HTMLbioPic.replace("%data%", bio.picture),
	"welcome": HTMLwelcomeMsg.replace("%data%", bio.welcome),
	"skills": HTMLskills.replace("%data%", bio.skills.join(", "))
};

$("#header").prepend(formatted.role);
$("#header").prepend(formatted.name);
$("#header").prepend(formatted.picture);

$("#header").append(formatted.welcome);
$("#header").append(formatted.skills);
$("#footerContacts").append(formatted.contact);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work["employer"]));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work["position"]));
$("#workExperience").append(HTMLworkDates.replace("%data%", work["years"]));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work["city"]));

$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", education.name));
$("#education").append(HTMLschoolDates.replace("%data%", education.years));
$("#education").append(HTMLschoolLocation.replace("%data%", education.city));
