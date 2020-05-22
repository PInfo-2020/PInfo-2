drop table Ingredient if exists;

create table Ingredient (
        productName  varchar(100) not null,
        productType varchar(60) not null,
        calories integer not null,
        units varchar(60) not null,
        primary key (productName)
);
TRUNCATE TABLE Ingredient;
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Abricot, cru',	'Fruits/Fruits frais',	48,	'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Abricot, sec',	'Fruits/Fruits secs', 	275, 'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Agneau, côtelette',	'Viande et abats/Agneau, mouton', 179, 'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Agneau, gigot',	'Viande et abats/Agneau, mouton',155,'par 100 g de portion comestible');
INSERT INTO Ingredient (productName, productType, calories, units)  values ('Ail, cru','Légumes/Légumes frais',	137,	'par 100 g de portion comestible');
