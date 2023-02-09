Drop schema if exists `pokemon`;
Create schema pokemon;
use pokemon;
create table Equipa(id int primary key auto_increment, nome varchar(25));
create table Treinador (id int primary key auto_increment, nome varchar(25), id_equipa int);
create table Tipo (id int primary key auto_increment, nome varchar(15));
create table Pokemon (id int primary key auto_increment, nome varchar(20), primeiro_tipo varchar(15) not null, segundo_tipo varchar(15), id_equipa int);

insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Charizard", "Fire", "Flying", 1);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Bulbasaur", "Grass", "Poison", 1);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Squirtle", "Water", "None", 1);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Pikachu", "Electric", "None", 1);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Ninetales", "Fire", "None", 1);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Zubat", "Poison", "Flying", 1);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Psyduck", "Water", "None", 2);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Arcanine", "Fire", "None", 2);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Kadabra", "Psychic", "None", 2);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Geodude", "Rock", "Ground", 2);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Rhydon", "Ground", "Rock", 2);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Gyarados", "Water", "Flying", 2);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Ditto", "Normal", "None", 3);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Vaporean", "Water", "None", 3);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Snorlax", "Normal", "Normal", 3);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Mewtwo", "Psychic", "None", 3);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Totodile", "Water", "None", 3);
insert into `Pokemon` (nome, primeiro_tipo, segundo_tipo, id_equipa) values ("Machop", "Fighting", "None", 3);


insert into `Treinador` (nome, id_equipa) values ("David Brito",1);
insert into `Treinador` (nome, id_equipa) values ("Tiago Pereira",2);
insert into `Treinador` (nome, id_equipa) values ("Gonçalo Ramos",3);

insert into `Tipo` (nome) values ("Normal");
insert into `Tipo` (nome) values ("Fire");
insert into `Tipo` (nome) values ("Water");
insert into `Tipo` (nome) values ("Grass");
insert into `Tipo` (nome) values ("Electric");
insert into `Tipo` (nome) values ("Ice");
insert into `Tipo` (nome) values ("Fighting");
insert into `Tipo` (nome) values ("Poison");
insert into `Tipo` (nome) values ("Ground");
insert into `Tipo` (nome) values ("Flying");
insert into `Tipo` (nome) values ("Psychic");
insert into `Tipo` (nome) values ("Bug");
insert into `Tipo` (nome) values ("Rock");
insert into `Tipo` (nome) values ("Ghost");
insert into `Tipo` (nome) values ("Dark");
insert into `Tipo` (nome) values ("Dragon");
insert into `Tipo` (nome) values ("Steel");
insert into `Tipo` (nome) values ("Fairy");


insert into `Equipa` (nome) values ("Equipa 1");
insert into `Equipa` (nome) values ("Equipa 2");
insert into `Equipa` (nome) values ("Equipa 3");

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'

