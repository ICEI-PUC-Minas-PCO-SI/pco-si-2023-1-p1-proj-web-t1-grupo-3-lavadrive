function time() {
    let today = new Date();
    today.setMinutes(today.getMinutes() + 50);
    let h = today.getHours().toString().padStart(2, '0');
    let m = today.getMinutes().toString().padStart(2, '0');
    let s = today.getSeconds().toString().padStart(2, '0');
    document.getElementById('texto').innerHTML = `${h}:${m}:${s}`;
}

function timeatual() {
    let today = new Date();
    today.setMinutes(today.getMinutes());
    let h = today.getHours().toString().padStart(2, '0');
    let m = today.getMinutes().toString().padStart(2, '0');
    let s = today.getSeconds().toString().padStart(2, '0');
    document.getElementById('text').innerHTML = `${h}:${m}:${s}`;
}