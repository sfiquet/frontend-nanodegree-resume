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
