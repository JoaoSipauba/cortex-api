<p align="center">

<a href="https://nodejs.org/en/">
 <img alt="Node js" title="node js" src="https://img.shields.io/static/v1?label=node%20js&message=javascript%20runtime%20environment&color=3B7F59&labelColor=282a36&style=flat&logo=node.js&logoColor=white" />
</a>

<img alt="GitHub repo size" title="GitHub repo size" src="https://img.shields.io/github/repo-size/JoaoSipauba/cortex-api?color=3B7F59&labelColor=282a36&logo=GitHub&logoColor=white" />

<a href="https://github.com/AntonioNarcilio/eco/blob/master/LICENSE">
 <img src="https://img.shields.io/github/license/JoaoSipauba/cortex-api?label=license&color=3B7F59&labelColor=282a36" alt="license"/>
</a>

<img alt="GitHub last commit" title="GitHub last commit" src="https://img.shields.io/github/last-commit/JoaoSipauba/cortex-api?&color=3B7F59&labelColor=282a36" />

<img alt="GitHub language coun" title="GitHub language coun" src="https://img.shields.io/github/languages/count/JoaoSipauba/cortex-api?&color=3B7F59&labelColor=282a36" />

<img alt="GitHub top language" title="GitHub top language" src="https://img.shields.io/github/languages/top/JoaoSipauba/cortex-api?&color=3B7F59&labelColor=282a36" />


</p>

### ⬇️ **Utilizando projeto localmente**

> ⚠ **Atenção**: Antes de seguir o passo a passo abaixo lembre-se de instalar o [node-js](https://nodejs.org/en/)

>No diretório desejado execute no terminal o comando abaixo 👇

~~~bash
git clone https://github.com/JoaoSipauba/cortex-api
~~~

> Depois entre no diretório do projeto
~~~bash
cd cortex-api
~~~

> Agora iremos fazer o download das depêndencias do projeto
~~~bash
npm install
~~~

> Execute o comando para executar o projeto em modo de desenvolvimento
~~~bash
npm dev
~~~

> Prontinho 🎊 a API já estará disponível em
`http://localhost:3333` (opcional)

### **Fluxo do reconhecimento facial**

- O primeiro passo é realizar um post na rota /group para criar um grupo de pessoas (já existe um grupo 'prisioners_02')
- Após a criação do grupo de pessoas, você deve fazer um post na rota /person para criar uma nova pessoa no grupo
- Agora você deve adicionar uma imagem com um post em /person/face para que a IA reconheça a pessoa
- Em seguida realize um post /group/train para que a IA faça seu treinamento
- Agora você deve mandar uma imagem para /identify para que a API faça o reconhecimento e retorne seus dados caso você exista na base