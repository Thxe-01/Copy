document.getElementById("BMI").addEventListener("submit",function(event){
  event.preventDefault();
  const w = 
parseFloat(document.getElementById("Weight").value);
  const h = 
parseFloat(document.getElementById("Height").value)/100;
  
  const bmi = (w/(h**2)).toFixed(2);
  
  document.getElementById("total").innerHTML = `Your Bmi is ${bmi}`;
  //ข้อความที่ต้องการแทรกค่าตัวแปรลงไปด้ววต้องใช้เครื่องหมาย `` แล้วต้องใส่ตัวแปรลงใน ${ตัวแปร}

if(bmi<18.50){
  document.getElementById("results").innerHTML="ต่ำกว่าเกณฑ์"}
else if (bmi<22.91){
  document.getElementById("results").innerHTML="ปกติสมส่วน"}
else if (bmi<24.91){
  document.getElementById("results").innerHTML="น้ำหนักเกิน"}
else if (bmi<29.91){
  document.getElementById("results").innerHTML="อ้วนระดับ1"}
else if (bmi>29.90){
  document.getElementById("results").innerHTML="อ้วนระดับ2"}
else {
  document.getElementById("results").innerHTML="ใส่ข้อมูลด้วยครับ🙏"}
  
});