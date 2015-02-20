var myApiKey = "7fe15faa0b9ff9cbf57917d9af3ad85a797fa33e";
//Get user info
var getUserAccount = function(){

	$.ajax({

		url:"https://api.github.com/users/GregWrightbjj",
		data:{
			api_key: myApiKey 
		},
		method: "GET",
		success: function(userData){
			console.log(userData);
var userObject = {
avatar: userData.avatar_url,
name: userData.name,
userName: userData.login,
company: userData.company,
location: userData.location,
email: userData.email,
joinedDate: userData.created_at,
blog: userData.blog,
Followers: userData.followers,
Following: userData.following
}
// Creates an html string with the Handlebars template and our new object
   var htmlString = templates.userProf(userObject)

 // Append that HTML string to the container on the page
        $("#user-container").append(htmlString);
		}
	})
}


//Get User Repo
var getUserRepo = function(){

	$.ajax({

		url:"https://api.github.com/users/GregWrightbjj/repos",
		data:{
			api_key: myApiKey 
		},
		method: "GET",
		success: function(repoData){
			console.log(repoData);
var repoObject = {
name: repoData.name,
language: repoData.language,
stargazers: repoData.stargazers_count,
forkCount: repoData.fork_count,
fork_url: repoData.fork_url,
description: repoData.description,
updated: repoData.updated_at
}
var htmlS = templates.repos(repoObject)
  $("#repo-container").append(htmlS);

		}
	})
}




var templates = {};

var getTemplates = function(){
 // Retrieve the  template from the <script> tag in our HTML file
  var userDataString = $("#userInfo").text()

 // Create the Handlebars template function from that
  templates.userProf = Handlebars.compile(userDataString)

 


// Again for Repo
  var repoDataString = $("#theRepo").text()
  templates.repos= Handlebars.compile(repoDataString)
  

}


//Bind listener to on-load
$(document).on("ready", function(){

	getTemplates();
	getUserAccount();
	getUserRepo();
})