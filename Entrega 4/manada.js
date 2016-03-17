function Animal(){
}

Animal.prototype = {
	fazerBarulho: function(){
		return this.barulho;
	}
};

function Cachorro() {
	Animal.call(this);
	this.barulho = "Au";
}

Cachorro.prototype = new Animal();

function Gato(){
	Animal.call(this);
	this.barulho = "Miau";
}

Gato.prototype = new Animal();;

function Manada(){
	this.list = [];
}

Manada.prototype = {
		adicionar: function(animal){
			this.list.push(animal);
		}
}

function manadaVirgula(){
	Manada.call(this);
}

var virgula = new Manada();

virgula.barulhos = function(){
				var barulho = "";
				for (i= 0; i < this.list.length; i++) {
					if(i == this.list.length-1)
						barulho+=this.list[i].fazerBarulho();
					else
						barulho+=this.list[i].fazerBarulho()+",";
				};
				return barulho;
			};

manadaVirgula.prototype = virgula;


function manadaSustenido(){
	Manada.call(this);
}

var sustenidoPrototype = new Manada();

sustenidoPrototype.barulhos = function(){
				var barulho = "";
				for (i= 0; i < this.list.length; i++) {
					if(i == this.list.length-1)
						barulho+=this.list[i].fazerBarulho()+"# "+this.list[i].fazerBarulho();
					else
						barulho+=this.list[i].fazerBarulho()+"# "+this.list[i].fazerBarulho()+"# ";
				};
				return barulho;
		};

manadaSustenido.prototype = sustenidoPrototype;


		var manadaVirgula = new manadaVirgula();
		var manadaSustenidaDupla = new manadaSustenido();
		var animais = [new Cachorro(), new Gato()];
		animais.forEach(function (animal) {
		manadaVirgula.adicionar(animal);
		manadaSustenidaDupla.adicionar(animal);
		});
		console.log(manadaVirgula.barulhos());
		console.log(manadaSustenidaDupla.barulhos());

