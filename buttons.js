//external page that loads in the contacts

//3 columns
$(document).ready(
	function($)
	{
		//add function goes to second page which has the cell contacts
		//click the contact, it creates the row

		//two states: loaded and empty

	//get the data & iterate over the data
	createRow('Friend','123-123-1234',1);
	createRow('Son','923-123-1234',2);
	createRow('Daughter','123-123-1234',3);
	createRow('Spouse','923-123-1234',4);

	$("button").click(function(){
		//call url with Oauth key from AT&T
		$.ajax({url:"", success:function(result){
			//do something
			//need to process the data
			//create Row on result 
		} })
	}
	)

		$('#friendcmd button').click(
	
		function(e){
			//alert('hi');

			var phone = $(this).parent().parent().data('phone');

			//Req
			//Des
			//Txt
			//.find or substring
			var myId = $(this).attr('id');
			if(myId.search('Req') >= 0)
			{
				//stub, need to create a function here
				alert('fire Req' + phone);// +' '+ name);
			}
			else if(myId.search('Des') >= 0)
			{
				//stub, need to create a function here
				alert('fire Des' + phone);
			}
			else if(myId.search('Txt') >= 0)
			{
				//stub, need to create a function here
				alert('fire Txt' + phone);
			}

			 //returns: {not found} or index
		}
	);
	//createRow('Son2');
	//createRow('Daughter2');	
	}	
	)

//Request Location
function Req()
{}

//Share Destination
function Des()
{}

//Talk & Send
function Txt()
{}

//gets the name from the AT&T API and populates the table
function createRow(name,number,row_num)
{
	//create tr and insert into table
	//row doesn't exist, create it
	var tableContents = $('tbody').html();
	$('tbody').html(tableContents + '<tr data-phone="'+number+'" ><td>'+name+'</td><td><button id=\"Req'+row_num+'\"  >Send</button></td><td><button id=\"Des'+row_num+'\"  >Send</button></td><td><button id=\"Txt'+row_num+'\"  >Send</button></td></tr>')


	//row exists
	//$('tr').html()
}



//data-name=\"friend\"
//data-