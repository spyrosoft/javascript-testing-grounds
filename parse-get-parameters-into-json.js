var get_parameters_string = 'string="string"&integer=4444&double-float=4.12345678901234&boolean=false&array=[[2,3,4],[4,5,6]]';
var get_parameters_split = get_parameters_string.split( '&' );
var get_parameters = new Object;
var errors = new Array;

get_parameters_split.forEach(
	function( get_parameter_split )
	{
		var get_parameter = get_parameter_split.split( '=' );
		try
		{
			get_parameters[ get_parameter[ 0 ] ] = eval( get_parameter[ 1 ] );
		}
		catch ( error )
		{
			errors.push( 'The settings parameter "' + get_parameter + '" is not valid' );
		}
	}
);

//Display errors to the user