<script type="text/javascript">

function validacion(){
		swal({
			  title: "Estas Seguro que deseas comenzar el examen?",
			  text: "El examen tiene un tiempo de 3 horas ",
			  type: "info",
			  showCancelButton: true,
			  confirmButtonColor: "#91B0EF",
			  confirmButtonText: "Si, deseo comenzar ahora",
			  closeOnConfirm: false
			},
			function(){
				document.getElementById("formu1").submit();
			});



}
</script>