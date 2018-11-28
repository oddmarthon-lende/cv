(async function(file) {

  const data = await fetch(file).then(response => response.json());
  let selection;

  document.title = `${data.name} - ${data.title}`;

  d3.select(".header__name")
    .text(data.name);

  d3.select(".header__title")
    .text(data.title);

  d3.select(".header__contact")
    .html(data.contact.join("<br />"));

  d3.select(".section__description .content")
    .html(data.description.join("<br />"))
    .select(".age")
    .text( ((Date.now() - Date.parse("1982-02-11T00:00:00")) / 60 / 60 / 24 / 365 / 1000).toFixed(2));

  // Experience ---------------------

  selection =
  d3.select(".section__experience .content")
    .selectAll("div.job")
    .data(data.experience)
    .enter()
    .append("div")
    .classed("job", true);

  selection.append("div")
    .classed("job__title", true)
    .text(d => d.title);

  selection.append("div")
    .classed("job__company", true)
    .text(d => d.company);

  selection.append("div")
    .classed("job__date", true)
    .text(d => `${d.start} - ${d.end}`);

  selection.append("div")
    .classed("job__description", true)
    .html(d => d.description.join("<br />"));

  // ----------------------------------

  // Education ---------------------

  selection =
  d3.select(".section__education .content")
    .selectAll("div.school")
    .data(data.education)
    .enter()
    .append("div")
    .classed("school", true);

  selection.append("div")
    .classed("school__name", true)
    .text(d => d.school);

  selection.append("div")
    .classed("school__date", true)
    .text(d => `${d.start} - ${d.end}`);

  selection.append("div")
    .classed("school__subject", true)
    .text(d => d.subject);

  // ----------------------------------

  d3.select(".section__skills .content")
    .selectAll("span.skill")
    .data(data.skills)
    .enter()
    .append("span")
    .classed("skill", true)
    .text(d => d);

  d3.select(".section__hobbies .content")
    .selectAll("span.hobby")
    .data(data.hobbies)
    .enter()
    .append("span")
    .classed("hobby", true)
    .text(d => d);



})('cv.json');
