function creat(){
    let namePr = document.getElementById('name').value 
    let price = document.getElementById('price').value
    let phone = document.getElementById('phone').value
    let datestart = document.getElementById('datestart').value
    let datestop = document.getElementById('datestop').value
    
    document.getElementById('text').value=("รายการสินค้า\n"+"ชื่อสินค้า:"+namePr+"\nราคาสินค้า:"+price+"\nวันที่เริ่มใช้:"+datestart+"\nวันหมดอายุ:"+datestop+"\n-----------------"+"\nเบอร์โทร:"+phone+"\n·˚ ༘₊· ͟͟͞͞꒰➳กดแล้วรบกวนแจ้งด้วยน้า˚ ༘♡ ⋆｡˚")

}
function copytext() {
    let copy = document.getElementById("text");
    
    copy.select();
    copy.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(copy.value);
}