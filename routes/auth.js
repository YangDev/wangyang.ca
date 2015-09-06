
var mongoose =require('mongoose');
var connectionString = "mongodb://root:root@ds041603.mongolab.com:41603/users";

mongoose.connect(connectionString);
var UserSchema = new mongoose.Schema({
	useremail:{type: String, required: true, unique: true},
	userpass:{type: String, required: true}
});

var User = mongoose.model('User', UserSchema);

exports.auth = function(req, res) {
	req.session.auth = true;
	res.status(200).send('<p>login</p>');
	console.log(req.body);
};

exports.isAuth = function(req, res) {
	if (req.session.auth) {
		res.status(200).send('<p>already loggin</p>');
	} else {
		res.status(200).send('<p>not loggin</p>');
	}
	//res.sendStatus(200);
};

exports.signUp = function(req, res) {
	if (req.body.email == "" || req.body.pass1 =="") {
		res.status(403).send("Sorry, 邮箱/密码不能为空");
		return;
	}
	var user = new User({
		'useremail': req.body.email,
		'userpass': req.body.pass1
	});
	//console.log();
	if (req.body.pass1 !== req.body.pass2) {
		res.status(403).send("Sorry, 密码不一致");
		return;
	}
	user.save(function(err, result) {
		if (!err) {
			req.session.auth = true;
			req.session.useremail = result.email;
			res.status(200).send({"email": result.email});
		} else {
			if (err.err.indexOf("E11000") != -1) {  // duplicate username error
            	res.status(403).send("Sorry, username "+user.email+" is already taken");
    		} else {  // any other DB error
            	res.status(500).send("Unable to create account at this time; please try again later "
       			+ err.message);
    		}
		}
	});
	//res.status(200).send('<p>some html</p>');
	console.log(req.body);
	//check if useremail is already registered

};