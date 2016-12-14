//模拟jQuery

function Proxy = { //2:在创建$(jquery函数)的函数 需要一个代理对象

}

function $(selector){ //首先创建一个$函数，返回一个对象
	return new Proxy(selector);
}

Proxy.prototype = $.fn = {
	addClass:function(){
		console.log("所有jquery的代理对象的API都在这里：addClass");
		return this;
	},
	removeClass:function(){
		console.log("所有jquery的代理对象的API都在这里：removeClass");
		return this;
	}
}

//但是怎么让$的实例对象扩展方法呢，就要给代理对象的原型添加扩展，所以：
//Proxy.prototype = $.fn; //可以写成上面的那样

//扩展方法
$.fn.cry = function(){
	console.log("i want crying");
	return this;
}

var $shili = $(document.body);
$shili.addClass();     //拥有此方法
$shili.removeClass();  //拥有此方法
$shili.cry();

//若要添加方法的话  在原型里面添加，所有创建的实例就会拥有此方法
//只要看到new关键字 一定是在堆里面开辟了一块空间
//首字母为大写的函数 是构造器函数 创建函数实在堆里面
//所有的构造器函数 在堆中都有一个自己的原型对象


