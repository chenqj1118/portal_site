var fs = require('fs');
exports.isexist = function(params){//判断账号是否存在
	var result = {success: false, message: ""};
	if(params.mobile){//判断传入的用户名与密码
		var persons = "";
		var hasthis = 0;
		try{
			var data = fs.readFileSync("./test-static/personInfo.json"); //必须使用同步api:readFileSync
				persons = JSON.parse(data.toString());//二进制数据--》字符串--》json对象
				persons.data.forEach(function(person,index){
					if(person.mobile == params.mobile){
						hasthis = 1;
					}
				})
				
			if(!hasthis){//不含该对象则返回提示
				result = {success: false,message: "数据文件中不存在该账号！"};
			}else{
				result = {success: true,message: "存在该对象"};
				console.log('----------查询成功-------------');
			}
		}catch(err){
			console.error(err);
			result = {success: false,message: "读取数据文件失败！"};
		}
	}else{
		result = {success: false,message: "用户账号不正确！请检查"};
	}
	return result;
};
exports.changePassword = function(params1){//修改密码
	var result = {};
	if(params1.mobile && params1.password){//判断传入的用户名与密码
		var persons = "";
		var hasthis = 0;
		try{
			var data = fs.readFileSync("./test-static/personInfo.json"); 
				persons = JSON.parse(data.toString());//二进制数据--》字符串--》json对象
				persons.data.forEach(function(person,index){
					if(person.mobile == params1.mobile){
						person.password = params1.password;
						hasthis = 1;
					}
				})
				
			try{
				if(!hasthis){//不含该对象则返回提示
					result = {success: false,message: "数据文件中不存在该账号！"};
				}else{
					console.log(persons.data);
					var str = JSON.stringify(persons);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
					fs.writeFileSync("./test-static/personInfo.json",str);//修改也必须使用同步api
					result = {success: true,message: "修改密码成功"};
					console.log('----------修改成功-------------');
				}
			}catch(err){
				console.log(err);
				result = {success: false,message: "修改密码失败！"};
			}
		}catch(err){
			console.error(err);
			result = {success: false,message: "读取数据文件失败！"};
		}
	}else{
		result = {success: false,message: "传入数据不正确！请检查"};
	}
	return result;
};