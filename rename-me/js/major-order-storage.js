var row_major_order_total = 0;
var column_major_order_total = 0;
var array_dimension = 200;
var pause_time = 10;

var refresh_index = 0;
var refresh_index_max = 1000;
var refresh_pause_timeout;

var stop_benchmark = false;

var test_array;

$(document).ready(
	function()
	{
		$( 'button.begin' ).click( begin_benchmarks );
		$( 'button.stop' ).click( stop_benchmarks );
		
		$( 'button.stop' ).hide();
	}
);

function begin_benchmarks()
{
	$( 'button.stop' ).show();
	$( 'button.begin' ).hide();
	run_benchmark();
}

function stop_benchmarks()
{
	$( 'button.begin' ).show();
	$( 'button.stop' ).hide();
	stop_benchmarks = true;
}

function run_benchmark()
{
	if ( stop_benchmark == true )
	{
		return;
	}
	create_test_array_skelleton();
	run_row_major_benchmark();
	create_test_array_skelleton();
	run_column_major_benchmark();
	
	refresh_index++;
	if ( refresh_index < refresh_index_max )
	{
		run_benchmark();
	}
	else
	{
		refresh_index = 0;
		print_results();
		var refresh_pause_timeout = setTimeout( run_benchmark, pause_time );
	}
}

function create_test_array_skelleton()
{
	test_array = new Array();
	for ( var i = 0; i < array_dimension; i++ )
	{
		test_array[ i ] = new Array();
	}
}

function run_row_major_benchmark()
{
	var benchmark_time_start = new Date().getTime();
	for ( var column = 0; column < array_dimension; column++ )
	{
		for ( var row = 0; row < array_dimension; row++ )
		{
			test_array[ column ][ row ] = column + row;
		}
	}
	var benchmark_stop_time = new Date().getTime();
	row_major_order_total += benchmark_stop_time - benchmark_time_start;
}

function run_column_major_benchmark()
{
	var benchmark_time_start = new Date().getTime();
	for ( var row = 0; row < array_dimension; row++ )
	{
		for ( var column = 0; column < array_dimension; column++ )
		{
			test_array[ column ][ row ] = column + row;
		}
	}
	var benchmark_stop_time = new Date().getTime();
	column_major_order_total += benchmark_stop_time - benchmark_time_start;
}

function print_results()
{
	var max_total;
	if ( row_major_order_total > column_major_order_total )
	{
		max_total = row_major_order_total;
	}
	else
	{
		max_total = column_major_order_total;
	}
	$( '.total.row-major-order' ).html( row_major_order_total );
	$( '.total.column-major-order' ).html( column_major_order_total );
	var row_width = Math.floor( row_major_order_total / max_total * 100 );
	var column_width = Math.floor( column_major_order_total / max_total * 100 );
	$( '.total.row-major-order' ).css( 'width', row_width );
	$( '.total.column-major-order' ).css( 'width', column_width );
}