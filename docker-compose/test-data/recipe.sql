
drop table if exists Recipe;
drop sequence if exists RECIPE_SEQ;
create sequence RECIPE_SEQ start with 1 increment by 50;
create table Recipe (
        id bigint not null,
        name varchar(255) not null,
        authorID bigint not null,
        image varchar(255),
        description varchar(500),
        prepText varchar(2000),
        prepTime integer not null,
        servings integer not null,
        grade numeric(4,2),
        primary key (id)
);

drop table if exists RecipeIngredient;
drop sequence if exists INGRED_SEQ;
create sequence INGRED_SEQ start with 1 increment by 50;
create table RecipeIngredient (
    id bigint not null,
    Recipe_ID bigint,
    name varchar(255) not null,
    image varchar(255) not null,
    quantity integer,
    unit numeric(4,2),
    primary key (id)
);

alter table RecipeIngredient
    add constraint FK_Recipe_RecipeId
    foreign key (Recipe_ID)
    references Recipe;

    GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public to rcp;
    GRANT SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public to rcp;