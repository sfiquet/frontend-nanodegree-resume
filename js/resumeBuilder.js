/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Sylvie Fiquet",
	"role": "Web Developer",
	"contact": "sfiquetdev@gmail.com",
	"picture": "images/fry.jpg",
	"welcome": "Welcome to my Web Page!",
	"skills": ["Programming", "Javascript", "Node.js", "Python", "TDD", "Git"]
};

var formatted = {
	"name": HTMLheaderName.replace("%data%", bio.name),
	"role": HTMLheaderRole.replace("%data%", bio.role),
	"contact": HTMLemail.replace("%data%", bio.contact),
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


