
var Mat = {}



//v1: vector, an array
//v2: vector, an array
//return: number
Mat.dotProduct = function (v1, v2) {
	var sum = 0;
	var i;
	for (i = 0; i < v1.length; i++) {
		sum += v1[i] * v2[i];
	}
	//console.log(sum);
	return sum;
};


//v1: vector, an array
//v2: vector, an array
//return: vector, an array
Mat.vectorAdd = function (v1, v2) {
	var temp = [];
	var i;
	for (i = 0; i < v1.length; i++) {
		temp[i] = v1[i] + v2[i];
	}
	//console.log(temp);
	return temp;
};

//v1: vector, an array
//v2: vector, an array
//return: vector, an array
Mat.vectorSub = function (v1, v2) {
	var temp = [];
	var i;
	for (i = 0; i < v1.length; i++) {
		temp[i] = v1[i] - v2[i];
	}
	return temp;
};

//v1: matrix, a 2 dimentional array
//v2: matrix, a 2 dimentional array
//return: matrix, a 2 dimentional array
Mat.add = function (A1, A2) {
	var result = [];
	for (var i = A1.length - 1; i >= 0; i--) {
		result[i] = Mat.vectorAdd(A1[i], A2[i]);
	};
	return result;
}

Mat.sub = function(A1, A2) {
	var result = [];
	for (var i = A1.length - 1; i >= 0; i--) {
		result[i] = Mat.vectorSub(A1[i], A2[i]);
	};
	return result;
};

Mat.product = function(A1, A2) {
	var m = A1[0].length;
	var l = A2.length;
	var n = A1.length
	var result = [];
	var row;
	var i, j, k;
	for (i = 0; i < m; i++) {
		row = A1.row(i);
		//console.log(result, m, l, n);
		for (j = 0; j < n; j++) {
			for (k = 0; k < l; k++) {
				if (result[k] === undefined) {
					result[k] = [];
					result[k][i] = 0;
				}
				if (result[k][i] === undefined) {
					result[k][i] = 0;
				}
				//console.log(row[j], A2[k][j])
				result[k][i] += row[j] * A2[k][j];
				//result[i][j] = 0;
				//console.log(result[k][i]);
			}
		};
		
	};
	//console.log(result);
	return result;
};

Array.prototype.row = function (j) {
	var temp = [];
	for (i = 0; i < this.length; i++){
		temp.push(this[i][j]);
	}
	return temp;
};