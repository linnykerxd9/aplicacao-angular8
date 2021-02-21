# Minha Primeira aplicação em angular.

Seja bem vindo a minha primeira aplicação em angular, aplicação feita no curso 'Introdução' ao angular 8 da Digital Innovation One.



## Instruções para uso:

- Starte o server  usando o comando 'node serve.js' no cmd

- Depois suba a aplicação com o comando ng serve

- Vá para o google e entre no link 'localhost:4200'

- Espero que goste da minha aplicação :happy:

  

## Nota sobre o servidor :

não foi eu que desenvolveu o servidor pois era um curso/aplicação voltado para front-ent por isso o professor disponibilizou um servidor já pronto e eu só mudei algumas coisas que eu queria fazer diferente



## Nota de problemas:

caso você tenha  um problema de rotas como eu tive, que consiste  na rota default  >> (path: '', redirectTo: 'courses', pathMatch: 'full') não estiver funcionando e na raiz da aplicação(localhost:4200) estiver dando erro 404, é só tirar a rota 404 do core.module e colocar ela no app.module como a rota default e após importar o componente tudo funcionará normalmente. 

- exemplo:

  import { Error404Component } from './core/components/error404/error404.component';

  RouterModule.forRoot([

     {

  ​    path: '', redirectTo: 'courses', pathMatch: 'full'

     },

     {

  ​    path: '**',  component: Error404Component

     }

    ])

  #### Espero ter ajudado :happy: .