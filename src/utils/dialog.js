export function openDialog(eid) {
	const target = document.getElementById(eid);
	target.showModal();
}

export function closeDialog(eid) {
	const target = document.getElementById(eid);
	target.close();
}
