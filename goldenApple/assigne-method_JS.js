/**
 * Created by bomin on 16. 9. 27.
 */
var objectAssignMethod = function (){
    var obj1 = {key1 : 'value1'};
    var obj2 = {key2 : 'value2'};
    var obj3 = {key3 : 'value3'};

    var assignedObject = Object.assign(obj1, obj2);

    console.log(assignedObject); // assignedObject = {key1: 'value1', key2: 'value2', key3: 'value3'};
    console.log(obj1); // obj1 = {key1: 'value1', key2: 'value2', key3: 'value3'};
    console.log(obj2); // obj2 = {key2: 'value2'};
    console.log(obj3); // obj3 = {key3: 'value3'};

    assignedObject.key1 = 'changed'; // shallow copied.
    console.log(assignedObject); // assignedObject = {key1: 'changed', key2: 'value2', key3: 'value3'};
    console.log(obj1); // obj1 = {key1: 'changed', key2: 'value2', key3: 'value3'};
};

objectAssignMethod();

var assignMethodExample = function () {
    var o1 = { a: 1, b: 1, c: 1 };
    var o2 = { b: 2, c: 2 };
    var o3 = { c: 3 };

    var obj = Object.assign({}, o1, o2, o3); // In this example. the '{}' in the assign({}, ...) is first object.
    console.log(obj); // { a: 1, b: 2, c: 3 }
}