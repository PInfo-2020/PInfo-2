drop table if exists Ingredient  ;
drop sequence if exists INGR_SEQ;
create sequence INGR_SEQ start with 1 increment by 1;
create table Ingredient (
        id bigint not null,
        productName varchar(100),
        productType varchar(60) not null,
        calories int not null,
        units varchar(60) not null,
        primary key (id)
);
GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public to ingr;
GRANT SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public to ingr;
TRUNCATE TABLE Ingredient;
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (nextval('INGR_SEQ'), 'Abricot, cru',	'Fruits',	48,	'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (nextval('INGR_SEQ'), 'Abricot, sec',	'Fruits/Fruits secs', 	275, 'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (nextval('INGR_SEQ'), 'Agneau, côtelette',	'Viande et abats/Agneau, mouton', 179, 'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (nextval('INGR_SEQ'), 'Agneau, gigot',	'Viande et abats/Agneau, mouton',155,'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (nextval('INGR_SEQ'), 'Ail','Légumes/Légumes frais',	137,	'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (nextval('INGR_SEQ'), 'Airelle rouge, crue', 'Fruits/Fruits frais', 40,	'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (nextval('INGR_SEQ'), 'Amande', 'Noix, graines et produits oléagineux', 2450, 'par 100 g de portion comestible');
INSERT INTO Ingredient (id, productName, productType, calories, units)  values (nextval('INGR_SEQ'), 'Amarante',	'Cereales',1580, 'par 100 g de portion comestible');

