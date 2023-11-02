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
});
