//模拟jQuery

function Proxy = { //2:在创建$(jquery函数)的函数 需要一个代理对象

}

function $(selector){ //首先创建一个$函数，返回一个对象
	return new Proxy(selector);
}

Proxy.prototype = $.fn = {
	addClass:function(){
		console.log("所有jquery的代理对象的API都在这里：addClass");
	},
	removeClass:function(){
		console.log("所有jquery的代理对象的API都在这里：removeClass");
	}
}

//但是怎么让$的实例对象扩展方法呢，就要给代理对象的原型添加扩展，所以：
//Proxy.prototype = $.fn; //可以写成上面的那样

var $shili = $(document.body);
$shili.addClass();     //拥有此方法
$shili.removeClass();  //拥有此方法

//若要添加方法的话  在原型里面添加，所有创建的实例就会拥有此方法
//只要看到new关键字 一定是在堆里面开辟了一块空间


