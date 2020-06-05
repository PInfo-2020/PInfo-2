--CREATE USER ingr WITH PASSWORD 'ingr';
drop table if exists Ingredient  ;
create table Ingredient (
        productName varchar(100),
        productType varchar(60) not null,
        calories int not null,
        units varchar(60) not null,
        primary key (productName)
);
GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public to ingr;
GRANT SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public to ingr;
TRUNCATE TABLE Ingredient;
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Abricot, cru',	'Fruits',	48,	'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Abricot, sec',	'Fruits/Fruits secs', 	275, 'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Agneau, côtelette',	'Viande et abats/Agneau, mouton', 179, 'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Agneau, gigot',	'Viande et abats/Agneau, mouton',155,'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Ail','Légumes/Légumes frais',	137,	'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Airelle rouge, crue', 'Fruits/Fruits frais', 40,	'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Amande', 'Noix, graines et produits oléagineux', 2450, 'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Amarante',	'Cereales',1580, 'par 100 g de portion comestible');

