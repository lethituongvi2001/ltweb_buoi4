function KiemTra() {
    var ht = f.HoTen.value;
    var ngay = f.Ngay.value;
    var thang= f.Thang.value;
    var nam = f.Nam.value;
    var nn= f.NgheNghiep.value;
    var gc =f.GhiChu.value;
    if (ht == '') {
        alert('H? t�n kh�ng du?c b? tr?ng');
        return false;
    }

    if (ngay == ''||thang == ''||nam == '') {
        alert('Ng�y Sinh kh�ng du?c b? tr?ng');
        return false;
    }

    if (nn == '') {
        alert('Ngh? nghi?p kh�ng du?c b? tr?ng');
        return false;
    }

    if (gc == '') {
        alert('Ghi ch� kh�ng du?c b? tr?ng');
        return false;
    }
    
    
    return true;
}