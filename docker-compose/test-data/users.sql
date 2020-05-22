CREATE USER user WITH PASSWORD 'user';
drop table User if exists;
drop sequence if exists USER_SEQ;
create sequence USER_SEQ start with 1 increment by 20;
create table User (
        id bigint not null,
        name varchar(255) not null,
        email varchar(255) not null,
        registerDate date not null,
        ratingNum int,
        ratingDenum int,
        primary key (id)
);
GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public to user;
GRANT SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public to user;
TRUNCATE TABLE INSTRUMENT;
INSERT INTO User (id, name, email, registerDate, ratingNum, ratingDenum) values ( INSTRUMENT_SEQ.nextval, 'Bob', 'bob.samplomb@gmail.com', PARSEDATETIME('17-09-2017','yyyy-dd-mm','en'), 45, 77 );
INSERT INTO User (id, name, email, registerDate, ratingNum, ratingDenum) values ( INSTRUMENT_SEQ.nextval, 'Bob', 'invalid@mailLOL', PARSEDATETIME('03-04-2019','yyyy-dd-mm','en'), 99, 121 );
