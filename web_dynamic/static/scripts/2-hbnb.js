document.ready(function () {
	const amenities = {};
	$("li input[type=checkbox]").change(function () {
		const amenityId = $(this).data('id');
		const amenityName = $(this).data('name');

		if (this.checked) {
			amenities[amenityName] = amenityId;
		} else {
			delete amenities[amenityName];
		}
		$(".amenities h4").text(Object.values(amenities).join(", "));
	});

	//getting status of API
	$.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
		if (data.status === "OK") {
			$("div#api_status").addClass("available");
		} else {
			$("div#api_status").removeClass("available");
		}
	});
});
