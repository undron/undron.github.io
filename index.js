document.body.addEventListener('click', (e) => {
    let at_d = document.createElement("div");
    let size = 3;
    at_d.style.position = "fixed";
    document.body.append(at_d);
    at_d.style.width = size + "px";
    at_d.style.height = size + "px";
    at_d.style.marginTop = -size/2 + "px";
    at_d.style.marginLeft = -size/2 + "px";
    at_d.style.backgroundColor = '#f0f';
    at_d.style.zIndex = '-100000';
    at_d.style.left = e.clientX + 'px';
    at_d.style.top = e.clientY + 'px';
});