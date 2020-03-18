document.getElementById("inpot").addEventListener('click',ttccrr)

function ttccrr(){
// const target1 = document.getElementById("target1");
// const target2 = document.getElementById("target2");
// const target3 = document.getElementById("target3");
const div = document.getElementById("targt");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div") ;
const div4 = document.createElement("div");
div1.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
div2.className = "tile" ;
div3.className = "wrapper" 

div4.innerHTML = `<div class="header">اسم العميل</div>
<div class="dates">
    <div class="start"> <strong>تاريخ التسليم</strong> يوم الاثنين</div>
    <div class="ends"><strong>تاريخ الطلب</strong> 18/3/2020</div>
</div>
<div class="stats">
    <div><strong>العدد</strong> 5</div>
    <div><strong>نوع القماش</strong> شتوي</div>
    <div><strong>الطول</strong> 170</div>
    <div><strong>الكتف</strong> 45</div>
    <div><strong>طول الكم</strong> 40</div>
    <div><strong>وسع الصدر</strong> 40</div>
    <div><strong>الرقبة</strong> 20</div>
    <div><strong>وسع اليدين</strong> 15</div>
    <div><strong>حالة الطلب</strong> مكتمل</div>
</div>

<div class="stats">
    <div><strong class="blllok" >الباقي</strong> 3098</div>
    <div><strong>العربون</strong> 562</div>
    <div><strong>المبلغ</strong> 182</div>
</div>
<div class="header">ملاحظات اضافية</div>
<div class="header">رقم الجوال</div>

<div class="footer">
    <a href="#" class="Cbtn Cbtn-primary">جاهز</a>
    <a href="#" class="Cbtn Cbtn-danger">تم التسليم</a>
</div>`;


div.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
div3.appendChild(div4);





};

