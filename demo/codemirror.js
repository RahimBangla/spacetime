//html example
var html = '<script src="https://unpkg.com/spacetime"></script>\n';
html += '<script>\n';
html += '  // make a new Date in New York\n';
html += '  var d = spacetime(\'March 1 2012\', \'America/New_York\')\n';
html += '  d.time(\'4:20pm\')\n';
html += '  d.goto(\'America/Los_Angeles\')\n';
html += '  d.time()\n  //\'1:20pm\'\n';
html += '</script>';

var options = {
  // mode: 'html-mixed',
  theme: 'spencertheme',
  readOnly: true,
  value: html
};
var el = document.getElementById('html');
CodeMirror(el, options);

// - node example -
var node = '// npm install spacetime\n';
node += 'var spacetime = require(\'spacetime\')\n\n';
node += 'var d = spacetime.now(\'Europe/Paris\')\n';
node += 'd.isAsleep()\n';
node += '//true\n\n';
node += 'd.dayName()\n';
node += '//\'Wednesday\'';
options = {
  mode: 'javascript',
  theme: 'spencertheme',
  readOnly: true,
  value: node
};
el = document.getElementById('node');
CodeMirror(el, options);

//--showoff
var doc = '//make a new date in a remote timezone:\nlet s = new spacetime(\'January 5 2018\', \'Africa/Djibouti\')\n\n';
doc += '//query it like this:\ns.date()//5 ✔️ weee!\n';
doc += 's.monthName()//\'january\' ✔️\n';
doc += 's.year()//2018 ✔️\n\n';
doc += '//inspect the daylight-savings-time:\n';
doc += 's.inDST()//false\n';
doc += 's.hasDST()//false\n';
doc += 's.offset()//180 (minutes) ✔️\n\n';
doc += '//you can change the date/time:\n';
doc += 's.date(7) //jan 7th\n';
doc += 's.time(\'4:30pm\')\n';
doc += 's.year(2019) //jan 7th 2019\n\n';
doc += '//this same moment, but in Namibia:\n';
doc += 's.goto(\'Africa/Windhoek\')//false\n';
doc += 's.time()\n\n';
doc += '//Namibia is currently in daylight-savings time\n';
doc += 's.isDST()//true\n';
doc += 's.offset()//120\n\n';
doc += '//but after april 2nd,\n';
doc += 's.month(\'april\').date(3)\n';
doc += 's.isDST()//false\n';
doc += 's.offset()//60\n';
CodeMirror(document.getElementById('showoff'), {
  mode: 'javascript',
  theme: 'spencertheme',
  readOnly: true,
  value: doc
});


//---docs---
var doc = 'd = new Date(fakeParis)\n';
doc += 'd.getHours()// ✔️ weee!';
CodeMirror(document.getElementById('doc'), {
  mode: 'javascript',
  theme: 'spencertheme',
  readOnly: true,
  value: doc
});
doc = 'd = new Date(fakeParis)\n';
doc += 'd.setHours(6)// ✖️ uh-oh';
CodeMirror(document.getElementById('docBad'), {
  mode: 'javascript',
  theme: 'spencertheme',
  readOnly: true,
  value: doc
});
doc = 'var localTime = fakeParis - parisOffset + myOffset \n';
doc += 'local = new Date(localTime)\n';
doc += 'local.setHours(6)// 🎉\n';
doc += 'var parisAgain = local.getTIme() - myOffset + parisOffset\n// ¯\\_(ツ)_/¯';
CodeMirror(document.getElementById('docThree'), {
  mode: 'javascript',
  theme: 'spencertheme',
  readOnly: true,
  value: doc
});