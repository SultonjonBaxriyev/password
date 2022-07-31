const inpuT = document.getElementById('inpuT')
function changeInputType(){
    if(inpuT.getAttribute('type')===('password')) {
        inpuT.setAttribute('type','text')
    }else {
        inpuT.setAttribute('type','password')
    }
}