--CREATE USER usr WITH PASSWORD 'usr';
drop table if exists AUser;
drop sequence if exists USER_SEQ;
create sequence USER_SEQ start with 1 increment by 50;
create table AUser (
        id bigint not null,
        name varchar(255) not null,
        email varchar(255) not null,
        registerDate date not null,
        ratingNum int not null,
        ratingDenum int not null,
        primary key (id)
);
GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public to usr;
GRANT SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public to usr;
TRUNCATE TABLE AUser;
INSERT INTO AUser (id, name, email, registerDate, ratingNum, ratingDenum) values ( nextval('USER_SEQ'), 'Bob', 'bob.samplomb@gmail.com', TO_DATE('17-09-2017','DD-MM-YYYY'), 45, 77 );
INSERT INTO AUser (id, name, email, registerDate, ratingNum, ratingDenum) values ( nextval('USER_SEQ'), 'Bob', 'invalid@mailLOL', TO_DATE('03-04-2019','DD-MM-YYYY'), 99, 121 );
