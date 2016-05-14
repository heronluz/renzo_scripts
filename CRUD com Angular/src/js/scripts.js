var clientes = [];
var count = 0;

function cliente(nome,email,telefone,senha,id){
	this.nome = nome;
	this.email = email;
	this.telefone = telefone;
	this.senha = senha;
	this.id = id;
}

function carregaTabela(){
  $.ajax({
        url : "pegar.php",
        dataType : "json",
        success : function(data){
            for(var i=0; i < data.length; i++){
              $("#tabela > tbody").append("<tr id='h"+(data[i].id )+"'><td>"+data[i].nome+"</td><td>"+data[i].email +"</td><td>"+data[i].telefone+"</td><td><a onclick='deletar("+(data[i].id)+")'><span class='glyphicon glyphicon-trash'></span></a></td><td><a onclick='editar("+(data[i].id)+")'><span class='glyphicon glyphicon-pencil'></span></a></td>");

            }
            $('.deletar').on('click', function(){
              del($(this).attr('data-index'));
            });
        }
    });
}

 $(document).ready(function(){
	 
	 carregaTabela();
	
        $("#cadastro").submit(function(){
			var user_nome = document.getElementById("txtnome").value;
			var user_email = document.getElementById("txtemail").value;
			var user_telefone = document.getElementById("txttelefone").value;
			var user_senha = document.getElementById("txtsenha").value;
			
			var erro = true;
			if (cliente_nome.trim()==""){
				$("#txtnome").addClass("erro");
				$('.msgerro').show();
				erro = false;
			}
			else {
				$("#txtnome").removeClass("erro");
				$('.msgerro').hide();
			}
			
			if (cliente_email.trim()==""){
				$("#txtemail").addClass("erro");
				$('.msgerro').show();
				erro = false;
			}
			else {
				$("#txtemail").removeClass("erro");
				$('.msgerro').hide();
			}
			
			if (cliente_telefone.trim()==""){
				$("#txttelefone").addClass("erro");
				$('.msgerro').show();
				erro = false;
			}
			else {
				$("#txttelefone").removeClass("erro");
				$('.msgerro').hide();
			}
			
			if (cliente_senha.trim()== ""){
				$("#txtsenha").addClass("erro");
				$('.msgerro').show();
				erro = false;
			}
			else {
				$("#txtsenha").removeClass("erro");
				$('.msgerro').hide();
			}			
			
			if (erro){
				$("#gif").show();
				clientes.push(new cliente(cliente_nome,cliente_email,cliente_telefone,cliente_senha,clientes.lenght));
				/*$("#tabela > tbody").append("<tr id = 'u"+(users.lenght-1)+"'><td>"+user_nome+"</td> <td>"+user_email+"</td> <td>"+user_telefone+"</td> <td><a onclick='deletar("+(users.lenght-1)+")'><span class='glyphicon glyphicon-trash'></span></a></td> </tr>");
				//document.getElementById("#txtnome").val(""); */

				$.post( "inserir.php", { nome: cliente_nome, email: cliente_email, telefone: cliente_telefone, senha: cliente_senha})
				.done(function( data ) {
				alert( "Cadastro realizado com sucesso!");
				carregaTabela();
				$("#gif").hide();
				});
				$("#cadastro").trigger("reset");
				
				return false
			}
			return false; 
        });        
    });
	

function deletar(id){
	$.post( "deletar.php", { id:id })
        .done(function( data ) {
          alert( "Cadastro deletado com sucesso!");
        });
	$("#h"+id).remove();
}
	
