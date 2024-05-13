drop table if exists sous_taches;
drop table if exists taches;
drop table if exists utilisateur;

create table utilisateur(
    id serial primary key,
    nom varchar(30),
    prenom varchar(30),
    courriel varchar(255),
    cle_api varchar(36),
    password varchar(100)
);

CREATE TABLE taches (
    id serial primary key,
    utilisateur_id INTEGER,
    titre varchar(100),
    description varchar(500),
    date_debut date,
    date_echeance date,
    complete smallint,

    foreign key (utilisateur_id) references utilisateur(id)
);

create table sous_taches(
    id serial primary key,
    tache_id integer,
    titre varchar(100),
    complete smallint,

    foreign key (tache_id) references taches(id)
);

INSERT INTO utilisateur (nom, prenom, courriel, cle_api, password)
VALUES ('Beliveau', 'Emile', 'emile.beliveau@carrefour.ca', 'a007de31-5390-4422-bfb2-3ac12b4f1528', '$2b$10$DU2E/y7eXE085dFA8yNMRuskRRgaPCgi4rjgLpGbYm5sS3d9lIalO');

