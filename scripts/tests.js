/*eslint no-undef: "error"*/

QUnit.test('hello test', function(assert) {
    assert.ok(1 == '1', 'Passed!');
});

//Convert the code in Figure 8.10 into QUnit tests for DataStore.
//When a function returns a value, use appropriate assert methods to check its result.
var ds = new App.DataStore();
ds.add('m@bond.com', 'tea');
ds.add('james@bond.com', 'eshpressho');
//ds.getAll();
ds.remove('james@bond.com');
//ds.getAll();
QUnit.test('testFigure_8.10', function(assert) {
    assert.equal(ds.get('m@bond.com'), 'tea');
    assert.equal(ds.get('james@bond.com'), undefined);
});


//What problem do you run into when you attempt to convert the code in Figure 8.32
//into QUnit tests for Truck?  Document the problem in tests.js,
//and define additional methods in truck.js to allow Truck to be tested appropriately

//Problem: return too many thing, can not check
//Problem: Result: 	undefined
//add
myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
//myTruck.printOrders2();
myTruck.deliverOrder('dr@no.com');
myTruck.deliverOrder('m@bond.com');
//myTruck.printOrders2();
QUnit.test('testFigure_8.32', function(assert) {
    assert.equal(myTruck.printOrders2(), undefined);
});
