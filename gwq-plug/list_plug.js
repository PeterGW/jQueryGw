(function(root,factory,plugName){

	root[plugName] = factory(root.jQuery,plugName);

})(window,function($,plugName){

	var $ul = $("<ul></ul>");

	var _def_ = {
		data : [],
		type : 0,
		isTrue : false,
		callback : function(){console.log("默认函数")}
	}

	var _prop_ ={
		init : function(){
			console.log("添加一个方法，给到this"); //$.extend()这个方法
			for (var i = 0; i < this.data.length; i++) {
			 	$ul.append($("<li>"+this.data[i]+"</li>"));
			}
			this.append($ul);
		}
	}

	/*$.extend = function(traget){
		for(var i=1;i<arguments.length;i++){  //i=1 是因为第一个参数是traget
			console.log(arguments[i]);
			for (var porp in arguments[i]) {
				traget[porp] = arguments[i][porp];
			}
		}
	}*/

	//动态输入插件名字 以【】的形势传 options参数
	$.fn[plugName] = function(options){

		$.extend(this,_def_,options,_prop_);//后面的都给到this

		this.init(); //可以掉的到
	};

	return function(obj){

		var tragetDom = document.getElementById(obj.dom);

		$(tragetDom)[plugName].call($(tragetDom),obj);
	}

},"gwchart");

