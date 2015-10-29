var codetalkers = [];

function resetNames() {
	codetalkers = ['Alice', 'Kadi', 'Shoshana', 'Catherine', 'Christine', 'Deyka', 'Katherine', 'Sofia', 'Rachel', 'Lubna'];
}

function namePicker() {
	var namePick = codetalkers.splice(Math.floor(Math.random() * codetalkers.length),1);
	if (codetalkers.length > 0) {
		document.getElementById('chosen_one').innerHTML = (namePick);
	}
	else {
		resetNames();
	}
}

function detectSpecialKeys(e) {
	var evtobj = window.event? event : e
	if (evtobj.keyCode == 32)
		namePicker();
}

document.onclick = namePicker();
