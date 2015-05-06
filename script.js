d3.select('.item').text('select');
d3.selectAll('#chart .item').text('selected');
d3.selectAll('.item:nth-child(3)').text('select nth');
d3.selectAll('.item:nth-child(odd)').text('select odd');
d3.selectAll('.item:nth-child(even)').text('select even');
d3.selectAll('.item:nth-child(n+3)').text('select even');
d3.selectAll('.item:nth-child(2n)').text('select even');