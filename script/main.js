function modelChange() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var modelViewer = document.querySelector("model-viewer#viewer")
    const base = "assets/" + selectedValue;
    // alert("base: " + base);
    const usdzPath = base.replace(/\.[^\.]+$/, '.usdz');
    // alert("usdzPath: " + usdzPath);
    modelViewer.setAttribute('src', base);
    modelViewer.setAttribute('ios-src', usdzPath);
}

function activateAR_click() {
    var modelViewer = document.querySelector('model-viewer#viewer');
    modelViewer.activateAR();
}

const modelViewer = document.querySelector('model-viewer#viewer');

modelViewer.addEventListener('load', () => {
    const [material] = modelViewer.model.materials;
    material.setDoubleSided(true);
})