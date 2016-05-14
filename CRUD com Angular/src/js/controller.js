	angular.module("planteumaarvore", []);
angular.module("planteumaarvore").controller("planteumaarvore", function ($scope) {
	$scope.app = "planteumaarvore";
	$scope.clientes = [];
	$scope.adicionarCliente = function (cliente) {
		$scope.clientes.push(angular.copy(cliente));
		delete $scope.cliente;
	};
	$scope.apagarClientes = function (clientes) {
		$scope.clientes = clientes.filter(function (cliente) {
			if (!cliente.selecionado) return cliente;
		});
	};
	$scope.isClienteSelecionado = function (clientes) {
		return clientes.some(function (cliente) {
			return cliente.selecionado;
		});
	};
});