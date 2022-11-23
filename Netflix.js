function copytext() {
    let copy = document.getElementById("text");
    
    copy.select();
    copy.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(copy.value);
}
function soc(){
    let name = document.getElementById('namePr').value
    let price = document.getElementById('price').value
    let datestart = document.getElementById('datestart').value
    let datestop = document.getElementById('datestop').value
    let email = document.getElementById('email').value
    let pas = document.getElementById('password').value
    let nameroom = document.getElementById('nameroom').value
    let pasroom = document.getElementById('pasroom').value
    let link = "https://forms.gle/CSap7ps6DFThJkz36"

    document.getElementById('text').value = ("🧂˚◌ 𝗡𝗲𝘁𝗳𝗹𝗶𝘅 𝟰𝗞 31 𝗗𝗮𝘆𝘀 ꊞ🔖💖"+"\nชื่อสินค้า:"+name+"\nราคาสินค้า:"+price+"\nปี/เดือน/วัน"+"\nเริ่มใช้:"+datestart+"\nหมดอายุ:"+datestop+"\n-----------------"+"\nอีเมล:"+email+"\nรหัสผ่าน:"+pas+"\n-----------------"+"\nชื่อห้อง:"+nameroom+"\nรหัสห้อง:"+pasroom+"\n----- ˚🧚🏻‍♀รบกวนอ่านก่อนน้า -----\n˓❗️𓏤 : ห้ามเปลี่ยน password-mail เด็ดขาด\n˓🧂𓏤 : หากขึ้นรหัสผิด อย่าพยายามเข้า\n˓🎬𓏤 : เข้าได้แล้วแคปแจ้งชื่อจอมาด้วยนะครับ ไม่แจ้งกรณีเกิดปัญหาจะไม่เคลมทุกกรณี\n˓⛔️𓏤 : ห้ามเข้ามั่วจอ และดูพร้อมกันเกิน 1 เครื่องฝ่าฝืนปรับ 500฿ และยึดจอคืนทันที\n˓🍒𓏤 : หากเปลี่ยนPINจอ รบกวนแจ้งด้วยนะคะ\n◌ 🍅 ! 𝗘𝗻𝗷𝗼𝘆 𝗳𝗼𝗿 𝘄𝗮𝘁𝗰𝗵𝗶𝗻𝗴 🗯 〰️"+"\nรบกวนกดลิ้งเพื่อทดสอบความพึงพอใจ\n"+link)
    document.getElementById('price').value=""
    document.getElementById('datestart').value=""
    document.getElementById('datestop').value=""
    document.getElementById('email').value=""
    document.getElementById('password').value=""
    document.getElementById('nameroom').value=""
    document.getElementById('pasroom').value=""
}