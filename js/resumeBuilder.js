/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": " Sylvie Fiquet ",
	"role": "Web Developer",
	"contacts": {
		"mobile": "01234-123456",
		"email": "sfiquetdev@gmail.com",
		"github": "sfiquet",
		"twitter": "example",
		"location": "Guildford, UK"
	},
	"welcomeMessage": "Hi, I'm Sylvie! I'm learning website development. This is my resume.",
	"skills": [ "Programming", "Javascript", "Node.js", "Python", "TDD", "Git" ],
	"biopic": "images/fry.jpg"
};

bio.display = function() {

	var displayContacts = function(elementId, contacts) {
		$(elementId).append(HTMLmobile.replace("%data%", contacts.mobile));
		$(elementId).append(HTMLemail.replace("%data%", contacts.email));
		$(elementId).append(HTMLtwitter.replace("%data%", contacts.twitter));
		$(elementId).append(HTMLgithub.replace("%data%", contacts.github));
		$(elementId).append(HTMLlocation.replace("%data%", contacts.location));
	};

	
	$("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", this.name));

	displayContacts("#topContacts", this.contacts);
	displayContacts("#footerContacts", this.contacts);

	$("#header").append(HTMLbioPic.replace("%data%", this.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));


	if (this.skills.length) {
	
		$("#header").append(HTMLskillsStart);

		this.skills.forEach(function(skill) {

			$("#skills").append(HTMLskills.replace("%data%", skill));
		});
	}
};

var work = {
	"jobs": [
		{
			"employer": "Priory Group",
			"title": "Computer Science Teacher",
			"location": "Godalming, UK",
			"dates": "2012-2013",
			"description": "Taught GCSE Computing to a very small class of autistic students with Python as the main programming language"
		},
		{
			"employer": "Software Answers Ltd",
			"title": "Software Engineer",
			"location": "Farnborough, UK",
			"dates": "1994-1999",
			"description": "Developed desktop software for Windows in the domains of sales forecasting and analysis and optimisation of orders. Design, coding, testing, maintenance, documentation, communication with QA and trainers"
		},
		{
			"employer": "Banque de France",
			"title": "Software Development Contractor",
			"location": "Marne-la-Vallée, France",
			"dates": "1992-1993",
			"description": "Maintain, extend and document expert system written in C, liaise with deployment team and with knowledge engineer. Prototyped migration from DOS to Windows."
		},
		{
			"employer": "Société Générale",
			"title": "Software Development Contractor",
			"location": "Paris, France",
			"dates": "1991-1992",
			"description": "Wrote a UI generation tool for options trading applications."
		}
	]
};

work.display = function() {

	var employer, title;

	this.jobs.forEach(function(currJob){

		$("#workExperience").append(HTMLworkStart);

		employer = HTMLworkEmployer.replace("%data%", currJob.employer);
		title = HTMLworkTitle.replace("%data%", currJob.title);

		$(".work-entry:last").append(employer + title);
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", currJob.location));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", currJob.dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", currJob.description));
	});
};

var projects = {
	"projects": [
		{
			"title": "Monster Workshop",
			"dates": "2015-ongoing",
			"description": "Monster customisation utility for Pathfinder game masters, written with Node.js and Express",
			"images": ["http://lorempixel.com/300/170/nature", "http://lorempixel.com/300/170/abstract"]
		}
	]
};

projects.display = function() {

	$("#projects").append(HTMLprojectStart);

	this.projects.forEach(function(project) {

		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

		project.images.forEach(function(img) {

			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
		});
	});
};

var education = {
	"schools": [
		{
			"name": "University René Descartes Paris V",
			"location": "Paris, France",
			"degree": "Master (DESS)",
			"majors": ["Computer Science"],
			"dates": "1990-1991",
			"url": "https://www.univ-paris5.fr/eng"
		},
		{
			"name": "University Rennes I, Faculté de Médecine",
			"location": "Rennes, France",
			"degree": "dropped out",
			"majors": ["Medicine"],
			"dates": "1985-1990",
			"url": "http://www.medecine.univ-rennes1.fr"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"dates": 2013,
			"url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
		},
		{
			"title": "Algorithms, Part I",
			"school": "Coursera",
			"dates": 2013,
			"url": "https://www.coursera.org/course/algs4partI"
		},
		{
			"title": "Algorithms, Part II",
			"school": "Coursera",
			"dates": 2013,
			"url": "https://www.coursera.org/course/algs4partII"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		}
	]
};

education.display = function() {

	this.schools.forEach(function(school) {
		
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));

		school.majors.forEach(function(major) {

			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
		});
	});

	if (this.onlineCourses) {
		$("#education").append(HTMLonlineClasses);

		this.onlineCourses.forEach(function(course) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
		});
	}
};


var inName = function() {
	
	var result = "";
	var nameArr = [];

	nameArr = bio.name.trim().split(" ");
	console.log(nameArr);
	nameArr[0] = nameArr[0].slice(0, 1).toUpperCase() + nameArr[0].slice(1).toLowerCase();
	nameArr[1] = nameArr[1].toUpperCase();

	result = nameArr.join(" ");
	return result;
};


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
