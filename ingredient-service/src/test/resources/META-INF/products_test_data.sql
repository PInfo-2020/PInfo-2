drop table Product if exists;

create table Product (
        name  varchar(100) not null,
        type varchar(60) not null,
        calories int not null,
        units varchar(30) not null
        primary key (name)
);
TRUNCATE TABLE Product;
INSERT INTO Product (name, type, calories, units)  values ('Abricot, cru',	'Fruits/Fruits frais',	48,	'par 100 g de portion comestible');
INSERT INTO Product (name, type, calories, units)  values ('Abricot, sec',	'Fruits/Fruits secs', 	275, 'par 100 g de portion comestible');
INSERT INTO Product (name, type, calories, units)  values ('Agneau, côtelette',	'Viande et abats/Agneau, mouton', 179, 'par 100 g de portion comestible');
INSERT INTO Product (name, type, calories, units)  values ('Agneau, gigot',	'Viande et abats/Agneau, mouton',155,'par 100 g de portion comestible');
INSERT INTO Product (name, type, calories, units)  values ('Ail, cru','Légumes/Légumes frais',	137,	'par 100 g de portion comestible');

