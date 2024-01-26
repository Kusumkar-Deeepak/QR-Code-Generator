const btn = document.querySelector('.qr-btn');
const code = document.querySelector('.qr-code');
const input = document.querySelector('.qr-input');
const toast = document.querySelector('#qrToast');

btn.addEventListener('click', generate);

function generate() {
	const data = input.value;
	const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
	code.src = URL;

	toastDiv();
}

function toastDiv() {
	toast.className = "show";
	setTimeout(function() {
		toast.className = toast.className.replace("show", "");
	}, 5000);
}
