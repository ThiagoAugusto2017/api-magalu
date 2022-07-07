const express = require("express");
const body_parser = require("body-parser");
require('dotenv').config()
const axios = require('axios')
const connection = require("./database/index");
const config =require("config");
//const onBuscaDb = require('../src/helper/onBuscaDb');
const magalu = require('./model/magalu')
const {create,Whatsapp,} =require('venom-bot');
const app = express();
app.use(express.json());

//? Routes
//import router from './routes/router';
//? logger
const Logger=require('../config/logger')
//? middleware
const morganMiddleware =require('./middleware/morganMiddleware');
app.use(morganMiddleware);


create({
        session: 'session-2', //name of session
        multidevice: true // for version not multidevice use false.(default: true)
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });


async function start(client) {
    let i = 1;
    do{

        const  userInicial = await magalu.findOne({
            raw: true,
            where: {
                id: i
            }
        })
        console.log(userInicial.telefone)

        let enviado = userInicial.enviado;
        let nome = userInicial.nome;
        //let telefone = userInicial.telefone;
        let telefone = '553182725945';

        if(enviado != 'NAO'){

            client.sendFile(
                telefone + '@c.us',
                'https://storage.googleapis.com/primearte/luiza_video_oficial.mp4',
                'luiza_video_oficial',
                'Olá '+ nome +'!\nVocê é *muito* importante para a gente! 🥰\nPor isso, a Luiza Helena tem um recado para você!\n\nIsso mesmo, você é *Pré Aprovado* para o nosso Cartão Luiza Ouro!!! 💳'
            )
            .then((result) => {
                console.log('Entrei aqui!');
                client.sendImage(
                    telefone + '@c.us',
                    'https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg',
                    'magalu',
                    nome + ', venha até uma loja magalu e já *faça seu cartão na hora!*\nE você já tem vantagem 🎉🎉\nSeu *Cartão Luiza Ouro não tem anuidade!*\nAgora é só aproveitar e realizar suas compras! 🎁🎁\n\nNesse *sábado, dia 09/07*, venha tomar um delicioso *café da manhã* com a gente! ☕🥖🥧\nAcesse aqui e encontre a loja mais próxima.\nhttps://maga.lu/lojasproximas\n\n_Oferta válida até 00/00 e destinada exclusivamente a clientes Magalu com Cartões já pré-aprovados. Sujeito a análise de crédito. Para saber as condições do financiamento consulte um vendedor Magalu._'
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {

                    var data = JSON.stringify({
                        "text": "Venom ERRO: " + erro.text + ' (' + erro.to + ')'
                    });

                    var configAxios = {
                    method: 'post',
                    url: 'https://api.rock.so/webhook/bot?method=sendMessage',
                    headers: {
                        'Authorization': 'Bearer exwrDMFVe37Mj5LuIKDE9WhsTkYANGB0apkno3y0S0Y',
                        'Content-Type': 'application/json'
                    },
                    data : data
                    };

                    axios(configAxios)
                    .then(function (response) {console.log(JSON.stringify(response.data));})
                    .catch(function (error) {console.log(error);});

                    console.error('Error when sending: ', erro); //return object error
                });

                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {

                var data = JSON.stringify({
                    "text": "Venom ERRO: " + erro.text + ' (' + erro.to + ')'
                    });

                    var configAxios = {
                    method: 'post',
                    url: 'https://api.rock.so/webhook/bot?method=sendMessage',
                    headers: {
                        'Authorization': 'Bearer exwrDMFVe37Mj5LuIKDE9WhsTkYANGB0apkno3y0S0Y',
                        'Content-Type': 'application/json'
                    },
                    data : data
                    };

                    axios(configAxios)
                    .then(function (response) {console.log(JSON.stringify(response.data));})
                    .catch(function (error) {console.log(error);});


                console.error('Error when sending: ', erro); //return object error
            });
        }


        i++

    } while(i < 5)
}

connection
    .sync()
    // .sync({
    //   force: true
   // })
    .then(() => {
        app.listen(process.env.PORT ||process.env.PORT_APP, async () => {
            console.log(`Bot is listening ${process.env.PORT} `)
        })
    }).catch((err) => console.log(err.massagge));