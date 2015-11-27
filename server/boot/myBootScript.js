module.exports = function(app) {
  var InvestorAccount = app.models.InvestorAccount;
  //var Project = app.models.Project;
  //var Team = app.models.Team;

  InvestorAccount.create([
    {investorNamename: 'Carlo', id: '1', tradingAccountid: '1'},
    {investorNamename: 'Gary', id: '2', tradingAccountid: '2'},

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
