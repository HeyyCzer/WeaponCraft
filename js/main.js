$(".recipe").hide();


$("#armas").change(function () {
	$(".recipe").show();
	$("#nullValue").remove();
	$("#selectOne").remove();
	$("#quantity").val("");

	let value = $(this).val();
	$("#imagemArma").attr("src", `imgs/${value}.png`);

	$("#pecas").val("");
	$("#placas").val("");
	$("#molas").val("")
	$("#gatilhos").val("");
});

$("#quantity").change(function () {
	let value = $("#armas").val();
	if (value == "null") {
		return;
	}

	let quantity = $("#quantity").val();

	$("#pecas").val(weapons[value].pecas * quantity);
	$("#placas").val(weapons[value].placas * quantity);
	$("#molas").val(weapons[value].molas * quantity)
	$("#gatilhos").val(weapons[value].gatilhos * quantity);
});