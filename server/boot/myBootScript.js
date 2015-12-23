module.exports = function(app) {
  var InvestorAccount = app.models.InvestorAccount;
  //var Project = app.models.Project;
  var Team = app.models.Team;
  var id1Val = 1
  var id2Val = 1


  InvestorAccount.create([
    {investorNamename: 'Carlo', id: id1Val++ , tradingAccountid: id2Val++ },
    {investorNamename: 'Gary', id: id1Val++, tradingAccountid: id2Val++ },

  ], function(err, InvestorAccount) {
    if (err) throw err;

    console.log('Created InvestorAccount:', InvestorAccount);

    // create project 1 and make gary the owner
	//For this method to work the models must be linked properly
	//NB that 'projects' is the plural of the Project model
    //guardians[0].projects.create({
      //name: "Project 1",
      //description: "This is a description of my project"
    //}, function(err, project) {
      //if (err) throw err;

    //  console.log('Created project:', project);
    //});
  });
};
