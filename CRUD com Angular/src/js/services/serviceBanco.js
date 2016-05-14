angular.module("planteumaarvore").factory("manipulaBanco", function ($http) {
	var _getLista = function () {
		return $http.get("pegar.php");
	};

	var _saveCliente = function (cliente) {
		return $http.post("inserir.php", cliente);
	};

	return {
		getLista: _getLista,
		saveCliente: _saveCliente
	};
});