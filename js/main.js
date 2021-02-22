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
	$("#molas").val("");
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
	$("#molas").val(weapons[value].molas * quantity);
	$("#gatilhos").val(weapons[value].gatilhos * quantity);

	$("#pecasCost").val("NENHUM - FARM");
	$("#placasCost").val(formatMoney(components.placas * quantity));
	$("#molasCost").val(formatMoney(components.molas * quantity));
	$("#gatilhosCost").val(formatMoney(components.gatilhos * quantity));

	$("#custoTotal").text(formatMoney((components.gatilhos + components.molas + components.placas) * quantity))
});

function formatMoney(number) {
	return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}
