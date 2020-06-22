$( function() {
    var skills = [
      "Git",
      "Github",
      "EJS",
      "ExpressJs",
      "C",
      "C++",
      "NodeJs",
      "Django",
      "HTML",
      "CSS",
      "Java",
      "JavaScript",
      "Cyber Security",
      "Graphic Design",
      "PHP",
      "Python",
      "Web scraping",
      "ReactJs"
    ];
    $("#tags").autocomplete({
      source: skills
    });
  } );