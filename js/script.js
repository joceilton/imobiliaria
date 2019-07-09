$(function () {

    console.log($("#topo .navbar").height());

	function redimensionar () {

		$("#slider").css("margin-top", $("#topo .navbar").height() + 15 + "px");

	}

	redimensionar();

	$(window).resize(function() {

		redimensionar();

	});

	//$("#slider select").niceSelect();

});