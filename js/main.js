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
	$("#placasCost").val("$" + formatMoney(components.placas * quantity));
	$("#molasCost").val("$" + formatMoney(components.molas * quantity));
	$("#gatilhosCost").val("$" + formatMoney(components.gatilhos * quantity));
});

function formatMoney(number, decPlaces, decSep, thouSep) {
	(decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces), (decSep = typeof decSep === "undefined" ? "." : decSep);
	thouSep = typeof thouSep === "undefined" ? "," : thouSep;
	var sign = number < 0 ? "-" : "";
	var i = String(parseInt((number = Math.abs(Number(number) || 0).toFixed(decPlaces))));
	var j = (j = i.length) > 3 ? j % 3 : 0;

	return (
		sign +
		(j ? i.substr(0, j) + thouSep : "") +
		i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
		(decPlaces
			? decSep +
			  Math.abs(number - i)
					.toFixed(decPlaces)
					.slice(2)
			: "")
	);
}
