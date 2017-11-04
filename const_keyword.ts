/*
    const có các tính chất:
    + Phải khai báo và gán trị cùng lúc
    + Không gán trị lại dc nữa.
    + Không hỗ trợ hoisting.
    + Cho phép thay đổi trị của attribute của object.
    
    ví dụ:
    const number; => sẽ bị lỗi do không gán trị
    ----------
    const number = 10;
    number = 11; => sẽ lỗi dòng này do gán lại trị của const
*/