CREATE DATABASE test_database;


USE test_database;


create table SINHVIEN (
	
	MSSV CHAR(6) NOT NULL,
	TENSV nvarchar(50) NOT NULL,
	SDT  varchar(10),	-- không có NOT NULL -- Không cần để trống
    CLASS char(10) not null,
    ADDRESS nvarchar(50) not null,
    constraint pk_SINHVIEN primary key(MSSV)
)

create Table MONHOC (
	ID INT NOT NULL,
    MAMONHOC CHAR(10) NOT NULL,
    TENMONHOC CHAR(20) NOT NULL,
)
insert into SINHVIEN(MSSV, TENSV, SDT, CLASS, ADDRESS)
-- MSSV là Tên COLUMN -- CHAR(6) là Kiểu dữ liệu -- NOT NULL: là kiểu dữ liệu này có để trống? 
-- CHAR - VARCHAR: KIỂU CHUỖI cho phép nhập không có dấu
-- NVARCHAR: Kiểu CHUỖI cho phép nhập dữ liệu có dấu
 
-- ------------ TẠO PRIMARY KEY ----------------- 
-- constraint <tên bảng> primary key(<Tên Column>)




