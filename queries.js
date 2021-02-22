db.restaurants.find();
db.restaurants.find({}, {restaurant_id:1, name:1, borough:1, cuisine:1});
db.restaurants.find({}, {_id: 0, restaurant_id:1, name:1, borough:1, cuisine:1});
db.restaurants.find({}, { _id: 0, restaurant_id:1, name:1, borough:1, 'address.zipcode':1}); //address
db.restaurants.find({borough:'Bronx'});
db.restaurants.find({borough:'Bronx'}).limit(5);
db.restaurants.find({borough:'Bronx'}).skip(5).limit(5);
db.restaurants.find({'grades.score': { $gt: 90, } });
db.restaurants.find({'grades.score': { $gt: 80, $lt:100 } });
db.restaurants.find( { 'address.coord.0': {$lt:-95.754168} });
db.restaurants.find({ $and: [ {'cuisine': { $ne: 'American ' }}, {'grades.score': { $gt: 70, }}, {'address.coord.0': {$lt:-65.754168}} ] });
db.restaurants.find( { 'cuisine': { $ne: 'American ' }, 'grades.score': { $gt: 70, }, 'address.coord.0': {$lt:-65.754168} }).pretty();
db.restaurants.find( { 'cuisine': { $ne: 'American ' }, 'grades.grade': 'A', 'borough': { $ne: 'Brooklyn' } }).sort( { 'cuisine': -1} );
db.restaurants.find({ 'name': {$regex: /^Wil/}}, {restaurant_id:1, name:1, borough:1, cuisine:1});
db.restaurants.find({ 'name': {$regex: /ces$/}}, {restaurant_id:1, name:1, borough:1, cuisine:1});
db.restaurants.find({ 'name': {$regex: /.*Reg.*/}}, {restaurant_id:1, name:1, borough:1, cuisine:1});
db.restaurants.find({ borough:'Bronx', $or: [{'cuisine': 'American '}, {'cuisine':'Chinese'}] });
db.restaurants.find( { $or: [{'borough': 'Staten Island'}, {'borough': 'Bronx'}, {'borough': 'Brooklyn'}, {'borough': 'Queens'}] }, {_id: 0, restaurant_id:1, name:1, borough:1, cuisine:1} );
db.restaurants.find( { 'borough': { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }, {_id: 0, restaurant_id:1, name:1, borough:1, cuisine:1} );
db.restaurants.find( { 'grades.score': { $not: {$gt: 10}}}, {_id: 0, restaurant_id:1, name:1, borough:1, cuisine:1});
db.restaurants.find( { $or: [{ $and: [{'cuisine':'Seafood'}, {'cuisine': { $nin: ['American ', 'Chinese']}}] }, {'cuisine': /^Wil/}] }, {cuisine:1, })  // not sure
db.restaurants.find( {'grades': {$elemMatch: {'date': ISODate("2014-08-11T00:00:00Z"), 'score': 11, 'grade':'A'}}}, {restaurant_id:1, name:1, grades:1});
db.restaurants.find( {'grades.1': { 'date': ISODate('2014-08-11T00:00:00Z'), 'grade':'A', 'score': 9 }}, {restaurant_id:1, name:1, grades:1});
db.restaurants.find ({'address.coord.1': {$gt: 42, $lt: 52}},{restaurant_id:1, name:1, 'address.coord':1, });
db.restaurants.find({}).sort({'name':1, '_id':1}); //not sure
db.restaurants.find({}).sort({'name':-1, '_id':-1}); 

db.restaurants.find({'address.street': { $exists: true}});
db.restaurants.find({ 'address.coord': { $type: 1 } });
db.restaurants.find( { 'grades.score': { $mod: [7, 0] } }, { 'restaurant_id':1, 'name':1, 'grades.score':1} );

db.restaurants.find({ 'name': {$regex: /^Mad/}}, {_id: 0, name:1, borough:1, 'address.coord':1, cuisine:1});
