//*create  db command
//use  findMyRestaurant
//*create collection
//the collection resturents created when I create the first iten in collection  resturents
//*create collection items 
//create one item in collection  resturents
db.resturents.insertOne({name:"resturent 1",adrees:{city:"telaviv",street:"Four14",coordinates:[-77,564,40.677] },Kosher:"true",reviews:[{"date":"11/12/22","score":5}]})
//create two item in collection  resturents
 db.resturents.insertOne({name:"resturent 2",adrees:{city:"ashdod",street:"2",coordinates:[-76,563,40.677] },Kosher:"true",reviews:[{"date":"10/11/22","score":4}]})
//create three item in collection  resturents
db.resturents.insertOne({name:"resturent 3",adrees:{city:"london",street:"3",coordinates:[-72,561,30.658] },Halack:"true",reviews:[{"date":"10/10/22","score":3}]})
//create four resturent in collection  resturents
 db.resturents.insertOne({name:"resturent 4",adrees:{city:"london",street:"3",coordinates:[-72,561,30.658] },notkosher:"true",reviews:[{"date":"10/10/22","score":2}]})
//create five resturent in collection  resturents
test> db.resturents.insertOne({name:"resturent 4",adrees:{city:"telaviv",street:"3",coordinates:[-72,561,30.658] },halack:"true",reviews:[{"date":"10/08/22", score:5}]})
//update duplicate name in five resturent
db.resturents.updateOne({name:"resturent 4"} ,{$set:{name:"resturent 5"}})
//see all resturents command 
db.resturents.find()

