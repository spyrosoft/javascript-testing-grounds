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
	var message = message_event.data;
	for ( var employee_index in employee_lookup_table )
	{
		var employee = employee_lookup_table[ employee_index ];
		if ( employee[ 'first-name' ] === message[ 'first-name' ]
			&& employee[ 'last-name' ] === message[ 'last-name' ] )
		{
			postMessage( employee_lookup_table[ employee_index ] );
			return;
		}
	}
};