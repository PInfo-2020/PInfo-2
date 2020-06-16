--CREATE USER usr WITH PASSWORD 'usr';
drop table if exists Recipe;
drop sequence if exists RECIPE_SEQ;
create sequence RECIPE_SEQ start with 1 increment by 50;
create table Recipe (
        id bigint not null,
        name varchar(255) not null,
        primary key (id)
);
GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public to rcp;
GRANT SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public to rcp;
TRUNCATE TABLE Recipe;
