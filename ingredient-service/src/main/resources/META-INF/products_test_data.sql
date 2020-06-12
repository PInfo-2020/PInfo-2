drop table Ingredient if exists ;
drop sequence INGR_SEQ if exists;
create sequence INGR_SEQ start with 1 increment by 1;
create table Ingredient (
        id bigint not null,
        productName varchar(100),
        productType varchar(60) not null,
        calories int not null,
        units varchar(60) not null,
        primary key (id)
);

INSERT INTO Ingredient (id, productName, productType, calories, units)  values (INGR_SEQ.nextval, 'Abricot, cru',	'Fruits',	48,	'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (INGR_SEQ.nextval, 'Abricot, sec',	'Fruits/Fruits secs', 	275, 'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (INGR_SEQ.nextval, 'Agneau, côtelette',	'Viande et abats/Agneau, mouton', 179, 'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (INGR_SEQ.nextval, 'Agneau, gigot',	'Viande et abats/Agneau, mouton',155,'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (INGR_SEQ.nextval, 'Ail','Légumes/Légumes frais',	137,	'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (INGR_SEQ.nextval, 'Airelle rouge, crue', 'Fruits/Fruits frais', 40,	'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (INGR_SEQ.nextval, 'Amande', 'Noix, graines et produits oléagineux', 2450, 'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (INGR_SEQ.nextval, 'Amarante',	'Cereales',1580, 'par 100 g de portion comestible');

