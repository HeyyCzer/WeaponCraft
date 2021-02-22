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

	$("#pecasCost").val("");
	$("#placasCost").val("");
	$("#molasCost").val("");
	$("#gatilhosCost").val("");

	$("#custoTotal").text("R$ 0,00")
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
	$("#placasCost").val(formatMoney(components.placas * weapons[value].placas * quantity));
	$("#molasCost").val(formatMoney(components.molas * weapons[value].molas * quantity));
	$("#gatilhosCost").val(formatMoney(components.gatilhos * weapons[value].gatilhos * quantity));

	$("#custoTotal").text(formatMoney((components.gatilhos * weapons[value].gatilhos) + (components.molas * weapons[value].molas) + (components.placas * weapons[value].placas) * quantity));
});

function formatMoney(number) {
	return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}
