var bio = {
	"name": "Fabien Kunis",
	"role": "Software Developer",
	"contacts": {
		"email": "fabien.kunis@gmail.com",
		"github": "xineohp167",
		"mobile": "+359886023622",
		"location": "Sofia, Bulgaria"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "Go beyond and outer the limits!",
	"skills": ["Java", "JavaEE", "python", "Software Development", "Test Driven Development"]
};

var work = {
	"jobs": [
		{
			"employer": "Employer",
			"title": "Title",
			"location": "Location",
			"datesWorked": "Dates",
			"description": "Description"
		}
	]
};

var education = {
	"schools": [
		{ "name": "University of Sofia \" St. Kliment Ohridski \"",
			"datesAttended": "2012-2014",
			"location": "Sofia, Bulgaria",
			"degree": "M.Sc. Microelectronics and Information Technology",
			"url": "https://www.uni-sofia.bg/index.php/eng"
		}
	],
	"onlineCourses": [
		{ "school": "University of Helsinki",
			"title": "Object-Oriented Programming with Java, part I",
			"completed": "2016",
			"url": "https://drive.google.com/open?id=0B6QKKfa77zdObnpYZHRtdERtZWs"
		},
		{ "school": "University of Helsinki",
			"title": "Object-Oriented Programming with Java, part II",
			"completed": "2016",
			"url": "https://drive.google.com/open?id=0B6QKKfa77zdOZGhCYzBqV3N4YkE"
		},
		{ "school": "MongoDB University",
			"title": "MongoDB for Java Developers M101J",
			"completed": "2014",
			"url": "https://drive.google.com/file/d/0B6QKKfa77zdONXVpb3AyUUdscjA"
		},
		{ "school": "MongoDB University",
			"title": "MongoDB for DBAs M102",
			"completed": "2014",
			"url": "https://drive.google.com/open?id=0B6QKKfa77zdOYzQ5Wi1ldkVNX0k"
		},
		{ "school": "Stanford University - OpenEdx",
			"title": "Introduction to Databases with distinction",
			"completed": "2014",
			"url": "https://drive.google.com/open?id=0B6QKKfa77zdOU3d5dnpxc0hXRUk"
		},
		{ "school": "University of Illinois at Urbana–Champaign - Coursera",
			"title": "Creative, Serious and Playful Science of Android Apps",
			"completed": "2014",
			"url": "https://drive.google.com/open?id=0B6QKKfa77zdOcjlBNE9YdmdSdWM"
		},
		{ "school": "Rice University - Coursera",
			"title": "An Introduction to Interactive Programming in Python with distinction",
			"completed": "2014",
			"url": "https://drive.google.com/file/d/0B6QKKfa77zdOYkNPUnBVMTBjRjA"
		},
		{ "school": "University of Toronto - Coursera",
			"title": "Learn to Program: The Fundamentals",
			"completed": "2014",
			"url": "https://drive.google.com/open?id=0B6QKKfa77zdONDRvOWFCVVNyR00"
		},
		{ "school": "Udacity",
			"title": "Problem Solving with Java with highest distinction",
			"completed": "2014",
			"url": "https://drive.google.com/open?id=0B6QKKfa77zdONG1lT0NHODE2dU0"
		},
		{ "school": "Stanford University - Coursera",
			"title": "Introduction to Logic with distinction",
			"completed": "2013",
			"url": "https://drive.google.com/open?id=0B6QKKfa77zdOQVljXzUxYll1RW8"
		}

	]
};

var projects = {
	"projects": [
		{
			"title": "Title",
			"datesWorked": "Dates",
			"description": "Description",
			"images": []
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);


			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);

		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
			}
		}

	}
}

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Java',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2014, 11], [2013, 11], [2012, 11], [2011, 8], [2010, 4], [2009, 12], [1998, 8], [1999, 8], [2000, 4]]
			},
			{
				name: 'python',
				color: 'rgba(119, 152, 191, .5)',
				data: [[2014, 1], [2013, 1], [2012, 1], [2011, 1]]
			},
			{
				name: 'SQL',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2013, 2]]
			},
			{
				name: 'PL/SQL',
				color: 'rgba(170, 162, 30, .5)',
				data: [[2010, 2], [2006, 4]]
			},
			{
				name: 'C++',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2004, 12], [2003, 6]]
			},
			{
				name: 'C',
				color: 'rgba(0, 102, 0, .5)',
				data: [[1997, 8], [2004, 2], [2008, 4]]
			},
			{
				name: 'Javascript',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2014, 1]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2014, 5], [2002, 3], [2008, 4], [2005, 2]]
			},
			{
				name: 'Web Development',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2014, 2]]
			},
			{
				name: 'TDD',
				color: 'rgba(0, 102, 51, .5)',
				data: [[2014, 12], [2013, 12], [2012, 12], [2011, 4]]
			},
			{
				name: 'Django',
				color: 'rgba(204, 102, 0, .5)',
				data: [[2013, 2.5]]
			},
			{
				name: 'Perl',
				color: 'rgba(210, 200, 0, .5)',
				data: [[2011, 3], [2013, 1], [2012, 1], [2014, 1]]
			}]
	});
});


$("#mapDiv").append(googleMap);
