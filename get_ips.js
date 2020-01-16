var links = Array.from(document.querySelectorAll('.author a:last-child'));

var ips = links.map(link => link.innerText);

ips = Array.from(new Set(ips));

ips.join('\n');
