#!/bin/bash
echo "Iniciando o mysql pelo docker!!"
docker-compose up -d
echo "Iniciando o frontend em dev!!"
npm i -g pm2
ls
cd products-front
pm2 start "npm run dev" --name "Products front"
ls
cd ..
echo "Iniciando o backend em dev!!"
cd products-crud
pm2 start "npm run start:dev" --name "Products front"
cd ..
echo "Seja feliz!! Api do backend no endereço http://localhost:3000/api e frontend rodando em http://localhost:4000"
echo "Para desligar o mysql use docker-compose down"
echo "Para desligar o back e o front use pm2 delete all"