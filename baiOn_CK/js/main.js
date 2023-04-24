$(document).ready(function(){
    var i=1;
    $("#myBtn").on("click",function(){
        $("#myModal").modal();
    })
    var txtMa= $("#txtMa");
    var tbMa = $("#tbMa");
    

    // kiểm tra mã tour
    function kiemtraMa(){
        var re = /^[A-Z]{3}\-[A-Z]{3}-\d{2}-\d{4}$/;
        if(txtMa.val()==""){
            tbMa.html("*bắt buộc Nhập");
            return false;
        }
        if(!re.test(txtMa.val())){
            tbMa.html("mã tour theo mẫu : XXX-XXX-00-0000");return false;
        }
        tbMa.html("*");
        return true;
    }
    tbMa.blur(kiemtraMa);

    // kiểm tra điểm đến 

    var txtDiemden= $("#txtDiemden");
    var tbdiemden =$("tbdiemden");
    function kiemtraDD(){
        if(txtDiemden.val()==""){
            tbdiemden.html("bắt buộc nhập !");
            return false;
        }
        tbdiemden.html("*");
        return true;
    }
    txtDiemden.blur(kiemtraDD);

    // kiểm tra ngày khởi hành phải sau ngày hiện tại

    var txtngay=$("#txtngay");
    var tbngay=$("#tbngay");
    function kiemtrangayKH(){
        if(txtngay.val()==""){
            tbngay.html("Bắt buộc nhập !");
            return false;
        }
        var day = new Date(txtngay.val());
        var today = new Date();
        today.setDate(today.getDate+30);
        if(day<today){

            tbngay.html("Ngày khởi hành phải sau ngày hiện tại 30 ngày ");
            return false;
        }
        tbngay.html("*");
        return true;
    }
    txtngay.blur(kiemtrangayKH);

    // kiểm tra giá tour

    var txtgia= $("#txtGia");
    var tbgia= $("#tbgia");
    function KiemTraGiaTour(){
        var  gia = txtgia.val();
        if(gia=""){
            tbgia.html("bắt buộc nhập !!");
            return false;
        }
        if(isNaN(gia)){
            tbgia.html("phải nhập số !");
            return false;
        }
        if(eval(gia)<0){
            tbgia.html("Giá là số dương");
            return false;
        }
        tbgia.html("*");
        return true;
    }
    txtgia.blur(KiemTraGiaTour);
    $("#btnsave").click(function(){
        if(!kiemtraMa() || !kiemtraDD() ||!kiemtrangayKH() || !KiemTraGiaTour() ){
            $("#thongbao").html("Điền đủ thông tin dùm !");
            return false;        
        }
        var matour =txtMa.val();
        var dd= txtDiemden.val();
        var nkh = txtngay.val();
        var tg= $("#txtTG").val();
        var gia = txtgia.val();
        var anh= $("#txtAnh").val().substring(12);
        var them= "<tr><td>"+ (i++)+"</td><td>"+matour +"</td><td>" +dd+"</td><td>" + nkh +"</td><td>" + tg+ "</td><td>" + gia +"</td><td>"+ anh +"</td></tr>";
         $("table tbody").append(them);
        $("#nyModal").modal("hide");
        
        return true;
    })
})