/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Sylvie Fiquet",
	"role": "Web Developer",
	"welcomeMessage": "Welcome to my Web Page!",
	"contacts": {
		"mobile": "",
		"email": "sfiquetdev@gmail.com",
		"github": "sfiquet",
		"twitter": "",
		"location": "United Kingdom"
	},
	"skills": [ "Programming", "Javascript", "Node.js", "Python", "TDD", "Git" ]
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

var projects = {
	"projects": [
		{
			"title": "Monster Workshop",
			"dates": "2015-ongoing",
			"description": "Monster customisation utility for Pathfinder game masters, written with Node.js and Express",
			"images": ["example.com/image1", "example.com/image2"]
		}
	]
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
			"degree": "Moved to Computer Science after 5 years so did not graduate as a MD",
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

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
if (bio.skills.length) {
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(skill){
		$("#skills").append(HTMLskills.replace("%data%", skill));
	});
}

var employer, title;
work.jobs.forEach(function(currJob){

	$("#workExperience").append(HTMLworkStart);

	employer = HTMLworkEmployer.replace("%data%", currJob.employer);
	title = HTMLworkTitle.replace("%data%", currJob.title);

	$(".work-entry:last").append(employer + title);
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", currJob.location));
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", currJob.dates));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", currJob.description));
});
