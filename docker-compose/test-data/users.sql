--CREATE USER usr WITH PASSWORD 'usr';
--drop table if exists AUser;
--drop sequence if exists USER_SEQ;
create sequence IF NOT EXISTS USER_SEQ start with 1 increment by 50;
CREATE TABLE IF NOT EXISTS AUser (
    id bigint not null,
    name varchar(255) not null,
    email varchar(255) not null,
    registerDate date not null,
    ratingNum int not null,
    ratingDenum int not null,
    primary key (id)
);

create sequence IF NOT EXISTS FR_ITEM_SEQ start with 1 increment by 50;
CREATE TABLE IF NOT EXISTS FridgeItem (
    id bigint not null,
    user_id bigint,
    ingredient bigint not null,
    quantity float not null,
    unit varchar(40) not null,
    primary key (id),
    FOREIGN KEY (user_id) REFERENCES AUser(id)
);

GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public to usr;
GRANT SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public to usr;
--TRUNCATE TABLE AUser;
--INSERT INTO AUser (id, name, email, registerDate, ratingNum, ratingDenum) values ( nextval('USER_SEQ'), 'Bob', 'bob.samplomb@gmail.com', TO_DATE('17-09-2017','DD-MM-YYYY'), 45, 77 );
--INSERT INTO AUser (id, name, email, registerDate, ratingNum, ratingDenum) values ( nextval('USER_SEQ'), 'Bob', 'invalid@mailLOL', TO_DATE('03-04-2019','DD-MM-YYYY'), 99, 121 );
