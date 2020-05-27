--CREATE USER ingr WITH PASSWORD 'ingr';
drop table if exists Ingredient;
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
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Abricot, cru',	'Fruits/Fruits frais',	48,	'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Abricot, sec',	'Fruits/Fruits secs', 	275, 'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Agneau, côtelette',	'Viande et abats/Agneau, mouton', 179, 'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Agneau, gigot',	'Viande et abats/Agneau, mouton',155,'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Ail, cru','Légumes/Légumes frais',	137,	'par 100 g de portion comestible');
