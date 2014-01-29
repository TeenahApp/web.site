
var teenah_api_url = "http://ec2-54-213-71-178.us-west-2.compute.amazonaws.com/api/public/index.php/api/v1";

$(function(){

	$(".api_url").each(function(){
		var url = $(this).html();
		$(this).html(url.replace("{{teenah_api_url}}", teenah_api_url));
	});
});