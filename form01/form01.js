
		function BaoLoi(){
		var tdn=f.TDN.value;
		var mk=f.MK.value;
		//document.write.getElementsByName("TDN").value
		//document.write.getElementsByName("MK").value
		if(tdn==''){
		alert("Tên đăng nhập không được bỏ trống");
		return false;
		}
		
		if(mk==''){
		alert("Mật khẩu bỏ trống kìa pà ");
		return false;
		}
		
		alert("Chào mừng pà "+tdn);
		return true;
		}
	