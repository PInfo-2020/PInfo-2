drop table User if exists;
drop sequence if exists USER_SEQ;
create sequence USER_SEQ start with 1 increment by 50;
create table User (
        id bigint not null,
        name varchar(255) not null,
        email varchar(255) not null,
        registerDate date not null,
        ratingNum int,
        ratingDenum int,
        primary key (id)
);
INSERT INTO User (id, name, email, registerDate, ratingNum, ratingDenum) values ( INSTRUMENT_SEQ.nextval, 'Bob', 'bob.samplomb@gmail.com', PARSEDATETIME('17-09-2017','yyyy-dd-mm','en'), 45, 77 );
INSERT INTO User (id, name, email, registerDate, ratingNum, ratingDenum) values ( INSTRUMENT_SEQ.nextval, 'Bob', 'invalid@mailLOL', PARSEDATETIME('03-04-2019','yyyy-dd-mm','en'), 99, 121 );
