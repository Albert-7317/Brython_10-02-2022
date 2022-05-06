import BrythonRunner from "H:\Code\Brython\brython-runner\lib\brython-runner.jsr"

console.log('running');

function update(){
    var code = document.getElementById('code').value;
    console.log(code);
    
    const runner = new BrythonRunner({
        onInit() {
            console.log('Runner web worker is ready!');
        },
    });
}



var button = document.getElementById('click').addEventListener("click", update);
///js gives me a headache///