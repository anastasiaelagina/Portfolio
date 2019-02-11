var popup = document.querySelector(".form-block");

var form = document.querySelector(".search-hotel");

var link = document.querySelector(".button-text");

var isPopupVisible = false;

var arrival = popup.querySelector("[name=date-of-arrive]");
var departure = popup.querySelector("[name=date-of-departure]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("arrival");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (isPopupVisible) {
		popup.classList.remove("modal-show");
		isPopupVisible = false;
	} else {
		popup.classList.add("modal-show");
		isPopupVisible = true;
	}

});


form.addEventListener("submit", function (evt) {
	if (!arrival.value || !departure.value) {
		evt.preventDefault();
		form.classList.remove("modal-error");
		form.offsetWidth = popup.offsetWidth;
		form.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("arrival", arrival.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (form.classList.contains("modal-show")) {
			form.classList.remove("modal-show");
			form.classList.remove("modal-error");
		}
	}
});
