
var teenah_api_url = "http://api.teenah-app.com/v1";

$(function(){

	$(".api_url").each(function(){
		var url = $(this).html();
		$(this).html(url.replace("{{teenah_api_url}}", teenah_api_url));
	});
});

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-46290132-1', 'teenah-app.com');
	ga('send', 'pageview');
