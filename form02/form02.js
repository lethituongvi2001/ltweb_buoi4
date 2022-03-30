	function BaoLoi(){
		var ht=f.HT.value;
		var dc=f.DC.value;
		var em=f.EM.value;
		var dt=f.DT.value;
		
		var emRegExp=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		//var dtRegExp
		
		
		//document.write.getElementsByName("TDN").value
		//document.write.getElementsByName("MK").value
		if(ht==''){
		alert("Tên đăng nhập không được bỏ trống");
		return false;
		}
		
		if(dc==''){
		alert("Địa chỉ bỏ trống kìa pà ");
		return false;
		}
		
		if(!emRegExp.test(email))
    		{
        	alert('Email không hợp lệ');
        	return false
    		}
		
		if(dt==''){
		alert("Điện thoại không được bỏ trống ");
		return false;
		}
		alert("Chào mừng pà nha!!");
		return true;
		}
