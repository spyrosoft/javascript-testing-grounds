var employee_lookup_table = [
	{
		'first-name' : 'Larry',
		'last-name' : 'Underbarton',
		'occupation' : 'Chill Janitor'
	},
	{
		'first-name' : 'Bart',
		'last-name' : 'Cranberry',
		'occupation' : 'Hairy Football Quarterback'
	}
];

onmessage = function( message_event )
{
	for ( var employee in employee_lookup_table )
	{
		console.log( employee );
	}
};