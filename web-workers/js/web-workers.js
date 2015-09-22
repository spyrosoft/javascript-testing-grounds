var demo_web_worker = new Worker( './js/web-worker.js' );

$( document ).ready(
	function()
	{
		$( 'button.begin' ).click( begin_web_workers_demo );
	}
);


function begin_web_workers_demo()
{
	if ( ! window.Worker ) {
		alert( 'Your JavaScript interpreter does not support web workers.' );
		return;
	}
	
	var worker_message = {
		'first-name' : 'Larry',
		'last-name' : 'Underbarton'
	};
	
	demo_web_worker.postMessage( worker_message );
}