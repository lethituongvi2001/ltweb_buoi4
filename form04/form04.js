function KiemTra() {
    var ht = f.HoTen.value;
    var ngay = f.Ngay.value;
    var thang= f.Thang.value;
    var nam = f.Nam.value;
    var nn= f.NgheNghiep.value;
    var gc =f.GhiChu.value;
    if (ht == '') {
        alert('H? tên không du?c b? tr?ng');
        return false;
    }

    if (ngay == ''||thang == ''||nam == '') {
        alert('Ngày Sinh không du?c b? tr?ng');
        return false;
    }

    if (nn == '') {
        alert('Ngh? nghi?p không du?c b? tr?ng');
        return false;
    }

    if (gc == '') {
        alert('Ghi chú không du?c b? tr?ng');
        return false;
    }
    
    
    return true;
}