const fs = require('fs');

const landingCount = 10;
const landingPages = new Array(landingCount).fill(null);
const namedPages = ['about', 'product-bottom', 'welcome-membership'];
const duplicateSections = {
  "page-blocks": ['club-top', 'club-bottom', 'club-middle', 'events', 'events-bottom', 
    'product', 'faq', 'faq-bottom', 'club', 'club-mc-top', 'club-mc-middle', 'club-mc-bottom', 
    'club-wc-top', 'club-wc-middle', 'club-wc-bottom', 'timeline-top', 'timeline-bottom'].concat(namedPages).concat(landingPages.flatMap((page, i) => [`landing-top-${i+1}`, `landing-bottom-${i+1}`])),
  "accordions-faqs": ["club-mc", "club-wc"].concat(landingPages.map((page, i) => `landing-${i+1}`)),
  "club": ["mc", "wc"],
  "hero-slideshow": namedPages.concat(landingPages.map((page, i) => `landing-${i+1}`))
}

namedPages.forEach( async (page, i) => {
  fs.readFile(`templates/page.${page}.liquid`, (err, data) => {
    if(err){
      fs.writeFile(`templates/page.${page}.liquid`, `{% section 'hero-slideshow-${page}' %} \n {% section 'page-blocks-${page}' %}`, function(err) {
        if(err) {
          return console.log(err);
        }
      });
    }
  });
});
landingPages.forEach( (page, i) => {
  fs.writeFile(`templates/page.landing_${i+1}.liquid`, 
  `
    {% section 'hero-slideshow-landing-${i+1}' %}
    {% section 'page-blocks-landing-top-${i+1}' %}
    {% section 'accordions-faqs-landing-${i+1}' %}
    {% section 'page-blocks-landing-bottom-${i+1}' %}
  `, function(err) {
    if(err) {
        return console.log(err);
    }
  });
});

// The key is the root component and the value is an array of the pages it needs to be duplicated for


Object.keys(duplicateSections).forEach((key) => {
  duplicateSections[key].forEach((section) => {
    copyFile(`sections/${key}.liquid`, `sections/${key}-${section}.liquid`);
  });
});



function copyFile(source, target) {
  fs.copyFile(source, target, (err) => {
    if (err) throw err;
    console.log(`source was copied to ${target}`);
    var data = fs.readFileSync(target); //read existing contents into data
    var fd = fs.openSync(target, 'w+');
    var buffer = new Buffer(`{% comment %}\n  This is a generated file. Please edit and copy the original file (${source}) to maintain consistency \n  between different page versions of this section\n{% endcomment %}\n`);

    fs.writeSync(fd, buffer, 0, buffer.length, 0); //write new data
    fs.writeSync(fd, data, 0, data.length, buffer.length); //append old data
    // or fs.appendFile
  });
}
