/*
d3.select('.item').text('select');
d3.selectAll('#chart .item').text('selected');
d3.selectAll('.item:nth-child(3)').text('select nth');
d3.selectAll('.item:nth-child(odd)').text('select odd');
d3.selectAll('.item:nth-child(even)').text('select even');
d3.selectAll('.item:nth-child(n+3)').text('select 3');
d3.selectAll('.item:nth-child(2n)').text('select 2n');
*/
/*
d3.selectAll('.item:nth-child(3n)')
	.append('span')
	.html(' <strong>Hippo</strong>');
d3.selectAll('#chart')
	.insert('span', ':nth-child(4)')
	.html(' <strong>Panther</strong>');
d3.select('.item:nth-child(3)')
	.remove();
*/
d3.select('.item').
	attr('class', 'highlight');
d3.selectAll('.item:nth-child(3)').
	classed('highlight', true);
d3.selectAll('.item:nth-child(5)').
	classed({
		'highlight': true,
		'item': false,
		'bigger': true
	});
d3.selectAll('.item:nth-child(7)').
	style({
		'background': '#268BD2',
		'color': '#EEE8D5',
		'padding': '10px',
		'margin': '5px'
	});
