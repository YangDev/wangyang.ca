var matrixTest = function(){
	console.log("test:dotProduct");
	Mat.dotProduct([1,2],[3,4]) === 11 ? console.log("pass"):console.log("error: line 2");
	Mat.dotProduct([1],[3]) === 3 ? console.log("pass"):console.log("error: line 3");
	Mat.dotProduct([1,2,3],[3,4,5]) === 26 ? console.log("pass"):console.log("error: line 4");
	Mat.vectorAdd([1,2],[3,4]).equals([4,6]) ? console.log("pass"):console.log("error: line 6");
	Mat.vectorAdd([1],[3]).equals([4]) ? console.log("pass"):console.log("error: line 7");
	Mat.vectorAdd([1,2,3],[3,4,5]).equals([4,6,8]) ? console.log("pass"):console.log("error: line 8");
	Mat.vectorSub([1,2],[3,4]).equals([-2,-2]) ? console.log("pass"):console.log("error: line 9");
	Mat.vectorSub([1],[3]).equals([-2]) ? console.log("pass"):console.log("error: line 10");
	Mat.vectorSub([1,2,3],[3,4,5]).equals([-2,-2,-2]) ? console.log("pass"):console.log("error: line 11");
	Mat.add([[1]],[[1]]).equals([[2]]) ? console.log("pass"):console.log("error: line 12");
	Mat.add([[1,2]],[[1,2]]).equals([[2,4]]) ? console.log("pass"):console.log("error: line 13");
	Mat.add([[1,2],[3,4]],[[1,2],[5,6]]).equals([[2,4],[8,10]]) ? console.log("pass"):console.log("error: line 14");
	Mat.sub([[1]],[[1]]).equals([[0]]) ? console.log("pass"):console.log("error: line 15");
	Mat.sub([[1,2]],[[1,2]]).equals([[0,0]]) ? console.log("pass"):console.log("error: line 16");
	Mat.sub([[1,2],[3,4]],[[1,2],[5,6]]).equals([[0,0],[-2,-2]]) ? console.log("pass"):console.log("error: line 17");
	Mat.product([[1]],[[1]]).equals([[1]]) ? console.log("pass"):console.log("error: line 18");
	Mat.product([[1],[2]],[[1,2]]).equals([[5]]) ? console.log("pass"):console.log("error: line 19");
	Mat.product([[1],[2]],[[1,2],[1,2]]).equals([[5],[5]]) ? console.log("pass"):console.log("error: line 20");
	Mat.product([[1,1],[2,2]],[[1,2],[1,2]]).equals([[5,5],[5,5]]) ? console.log("pass"):console.log("error: line 21");
	Mat.product([[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]],[[1,2,3,4,5]]).equals([[1,2,3,4,5]]) ? console.log("pass 22"):console.log("error: line 22");

};

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}; 