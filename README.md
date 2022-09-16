# Desafio NGINX com NODE.js usando Docker-compose

Use nginx as reverse proxy to call page in node app, this app add new default name in table people in mysql. Use Docker-compose to create all.

Aplicação node com banco de dados mysql e nginx como proxy reverso, utilizando docker e docker-compose, referente ao desafio da formaçã Full Cycle Developer.

Objeto é subir uma aplicação com NODE.js, que deve fazer o seguinte:
- Exibir a mensagem: Full Cycle Rocks!
- Adicionar um nome fixo a tabela people do mysql.
- Listar todos os nomes presentes na tabela people.

O acesso deve ser realizado na porta localhost:8080 e o nginx deve redirecionar para a porta da aplicação.
