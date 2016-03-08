function GerarListener() {
	
	var obj = {};
	var list = [];
	var i;
	var c = 0;
	
	obj.addListener = function(listener){
		list.push(listener);
	};
	
	obj.exec = function (){
		c++;
		for(i=0;i<list.length;i++){
			var retorno = list[i];
			retorno(c);
		}
		
	};
	
	obj.returnc = function(){
		return c;
	}
	
	return obj;
	}
var contObserver1 = GerarListener();
var contObserver2 = GerarListener();
var listener = function(c){
	console.log('c: '+c);
};
contObserver1.addListener(listener);
console.log("Observer 1:");

contObserver1.exec();
contObserver1.exec();

contObserver2.addListener(listener);
console.log("Observer 2:");

contObserver2.exec();
contObserver2.exec();

