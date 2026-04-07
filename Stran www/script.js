// Gladko drsenje za notranje povezave
document.addEventListener('click', function(e){
	const target = e.target.closest('a[href^="#"]');
	if(!target) return;
	const id = target.getAttribute('href');
	const el = document.querySelector(id);
	if(!el) return;
	e.preventDefault();
	el.scrollIntoView({behavior:'smooth', block:'start'});
});

// Trenutno leto v nogi strani
document.addEventListener('DOMContentLoaded', function(){
	const yearEl = document.getElementById('year');
	if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

	// Postopen nalagalnik logotipov: preizkusi več map in končnic
	const tryOrder = ['webp','png','jpg','jpeg'];
	const tryDirs = ['img/','stran 22/img/','stran%2022/img/','Stran 22/img/','Stran%2022/img/'];
	const logos = document.querySelectorAll('img[data-logo-base]');
	logos.forEach(function(img){
		const base = img.getAttribute('data-logo-base');
		if(!base) return;
		let idx = 0;
		let dirIdx = 0;
		function tryNext(){
			if(dirIdx >= tryDirs.length) return; // tiho prekini, če ni zadetkov
			if(idx >= tryOrder.length){ idx = 0; dirIdx++; }
			if(dirIdx >= tryDirs.length) return;
			const ext = tryOrder[idx++];
			const url = tryDirs[dirIdx] + base + '.' + ext;
			const test = new Image();
			test.onload = function(){ img.src = url; };
			test.onerror = tryNext;
			test.src = url;
		}
		tryNext();
	});
});

// Sledenje klikom gumba za igranje (rezerva za analitiko)
document.addEventListener('click', function(e){
	const btn = e.target.closest('.js-play-btn');
	if(!btn) return;
	const casinoName = btn.getAttribute('data-casino') || 'Neznano';
	console.log('Klik na IGRAJ ZDAJ:', casinoName);
});


