var $gw = gwJquery = (function(root){

	var $ = function(selector){
		//console.log(root.document.querySelectorAll(selector).constructor);
		return root.document.querySelectorAll(selector);
	}
	$.extend = function(traget){
		for (var i = 1; i < arguments.length;  i++) {
			for (var p in arguments[i]) {
				traget[p] = arguments[i][p];
			}
		}
		return traget;
	}
	var _proto_ = {//此处扩展方法
		each :function(callback){
			for (var i = 0;i < this.length; i++) {
				//console.log(this[i]);
				callback && callback.call(this[i],i,this[i]);
			}
			return this;
		},
		addClass :function(clsname){
			this.each(function(index,obj){
				obj.className += " " + clsname;
			})
			return this;
		},
		removeClass :function(clsname){
			this.each(function(index,obj){
				obj.className = obj.className.split(clsname)[0];
			})
			return this;
		}
	}
	$.fn = $.extend(NodeList.prototype,_proto_);
	
	return $;

})(window);