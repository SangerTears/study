
var foo = 1
var fooReference = {
    base: EnvironmentRecord,
    name: 'foo',
    strict: false
}

var foo = {
    bar: function (){
        return this        
    }
};
foo.bar()
var BarReference = {
    base: foo,
    propertyName: 'bar',
    strict: false
}

