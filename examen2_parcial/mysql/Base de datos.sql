create database logApp;
use logApp;

create table logs(
	IdLog integer primary key auto_increment,
	postitionX float,
    positionY float,
    fecha date
);

select *from logs;