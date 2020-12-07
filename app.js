$(() => {



let currentResultIndex = 0
let $resultNumber = $(".carousel-images").children().length - 1
$('.next').on('click' ,  (event) => {

$('.carousel-images').children().eq(currentResultIndex).css('display','none')

if (currentResultIndex  < $resultNumber) {

	currentResultIndex++
}else {
	currentResultIndex = 0
}

$(currentResultIndex).css('display', 'block')



})

$('.previous').on('click', () => {

	$('.carousel-images').children().eq(currentResultIndex).css('display','none')

   if ( currentResultIndex>0) {
		 currentResultIndex--
	 }else {
	 	currentResultIndex = 1
	 }

	 $(currentResultIndex).css('display', 'block')

})


  //event listener
  $("form").on("submit", (event) => {
    //stop the function from loading data on page load, wait for listener
    event.preventDefault();

    // grab the users input from the form
    const userInput = $('input[type="text"]').val();

    //network request with jQuery
    $.ajax({
      //make user input the query parameter
      url: `https://api.hunter.io/v2/domain-search?domain=${userInput}&api_key=ce559ef10b7dddc1e3b51fb2b79f02722bde3d15`,
			// https://api.hunter.io/v2/email-finder?domain=asana.com&first_name=Dustin&last_name=Moskovitz&api_key=ce559ef10b7dddc1e3b51fb2b79f02722bde3d15
      //every promise returns a .then() function
      //.then() takes two callbacks as arguments; a success & error handler
    }).then(
      (data) => {


       haiat = (data.data.emails)
			 console.log(haiat);
			 //good code------------------------------------------------->
			 // let reformattedArray = haiat.map(obj => {
			 //    let rObj = {}
			 //    rObj[obj.key] = obj.value
			 //    return rObj
			 // })
			 //----------------------------------------------------------->
			 // console.log(reformattedArray);
			 haiat.forEach(element =>$('#firstN').html('First Name :' + element.first_name));
			 haiat.forEach(element =>$('#lastN').html('Last Name : ' + element.last_name));
			 haiat.forEach(element =>$('#email').html('Email Address : ' + element.value));
			 haiat.forEach(element =>$('#position').html('Department/Position: ' + element.position));
			 haiat.forEach(element =>$('#type').html('Type of Contact :' + element.type));
			 haiat.forEach(element =>$('#verificationDate').html('Last Date check: ' + element.verification.date));
			 haiat.forEach(element =>$('#verificationStatus').html('Email Validity: ' + element.verification.status));





// console.log(haiat.first_name);
				  // console.log(data.data.emails);






        //handler for success

        // const $fn = ('<div>')
        // $($fn).html(data.data.emails['3'].first_name)
        // 		$('.secondForm').append($fn)
        // console.log(fn);

        // for (let i=0; data.data.emails.length-1 >0 ; i++)
        //good code----------------------------------------------------
        // $('#firstN').html('First Name :' + data.data.emails['3'].first_name)
        // $('#lastN').html('Last Name : ' + data.data.emails['3'].last_name)
        // $('#email').html('Email Address : ' + data.data.emails['3'].value)
        // $('#position').html('Department/Position: ' + data.data.emails['3'].position)
        // $('#type').html('Type of Contact :' + data.data.emails['3'].type)
        // $('#verificationDate').html('Last Date check: ' + data.data.emails['3'].verification.date)
        // $('#verificationStatus').html('Email Validity: ' + data.data.emails['3'].verification.status)

        //--------------------------––––---––––––––––––––––––––––------------------------------------------------------




        // console.log(data.data.emails['3'],data.data.emails['3'].first_name);


        // const $table = $('<ul>').addClass('result')
        // $('body').append('result')

        // $("#title").html(data.Title);
        // $("#year").html(data.Year);
        // $("#rated").html(data.Rated);
      },
      (errors) => {
        //handler for errors
        console.log(errors);
        const customError = `${error.statusText.toUpperCase()}: "Bad request; Check URL."`;
        // $("#ifError").html(customError).css("color", "red");
      }
    );
  });


});
