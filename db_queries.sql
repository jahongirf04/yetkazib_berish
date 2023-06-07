create database ovqat_yetkazish

use ovqat_yetkazish

create table mijozlar (
    id int auto_increment primary key,
    name varchar(64),
    balance float,
    phone varchar(32),
    address varchar(64)
);

create table yetkazuvchilar (
    id int auto_increment primary key,
    name varchar(64)
);

create table ovqatlar(
    id int auto_increment primary key,
    name varchar(64)
);

create table restoranlar(
    id int auto_increment primary key,
    name varchar(64)
);

create table restoran_ovqatlar(
    id int auto_increment primary key,
    ovqat_id int,
    restoran_id int,
    quantitiy int,
    price float
);

create table buyurtmalar (
    id int auto_increment primary key,
    mijoz_id int,
    yetkazuvchi_id int,
    yetkazilgan_vaqt varchar(64),
    buyurtma int
);

