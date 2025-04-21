# Solidarizze

[📹 Vídeo](#apresentação-em-vídeo) | [📝 Sobre](#sobre) | [🚀 Tecnologias Utilizadas](#tecnologias-utilizadas) | [📄 Páginas](#páginas-frontend) | [📄 Rotas](#rotas-backend) | [📥 Clonando o Projeto](#clonando-o-projeto) | [📞 Contato](#contato)

---

## 📝 Sobre

A aplicação consiste em um projeto FullStack de uma plataforma web voltada para doações de campanhas solidárias.

- **Doador**:  Criar conta (ou entrar, se já tiver), Visualiza campanhas ativas, Realiza doações, Não acessa funcionalidades de administrador

- **Administrador**: Visualiza as ações de um doador, Cria editar e remove campanhas, Controla status de cada campanha

---


---

## 🚀 Tecnologias Utilizadas

Abaixo as principais tecnologias utilizadas no desenvolvimento do projeto:

<table>
  <tr>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" width="50px" /><br/>
      <sub><b>Yarn</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50px" /><br/>
      <sub><b>Node.js</b></sub>
    </td>
    <td align="center">
      <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" width="50px"/><br/>
      <sub><b>Express.js</b></sub>
    </td>
    <td align="center">
      <img src="https://sequelize.org/img/logo.svg" width="50px"/><br/>
      <sub><b>Sequelize ORM</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png" width="50px"/><br/>
      <sub><b>JWT</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="50px"/><br/>
      <sub><b>PostgreSQL</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50px"/><br/>
      <sub><b>React</b></sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/20658825?s=200&v=4" width="50px"/><br/>
      <sub><b>Styled Components</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50px"/><br/>
      <sub><b>JavaScript</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50px"/><br/>
      <sub><b>CSS3</b></sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50px"/><br/>
      <sub><b>HTML5</b></sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/37719687?s=200&v=4" width="50px"/><br/>
      <sub><b>React Toastify</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://axios-http.com/assets/logo.svg" width="50px"/><br/>
      <sub><b>Axios</b></sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/88573548?s=200&v=4" width="50px"/><br/>
      <sub><b>React Elastic Carousel</b></sub>
    </td>
  </tr>
</table>

---

## 🔧 Backend – Endpoints e Lógica

### 🧑‍💻 Usuários & Autenticação

- **POST `/users`**  
  - **O que faz:** Valida `name`, `cpf`, `email` e `password` (Yup), impede e‑mails duplicados e cria um usuário com UUID.  
  - **Retorna:** Objeto do usuário criado (201).

- **POST `/sessions`**  
  - **O que faz:** Valida `email` e `password` (Yup), verifica credenciais e gera JWT.  
  - **Retorna:** Dados do usuário + `token` JWT.

---

### 📂 Categorias

- **GET `/categories`**  
  - **O que faz:** Retorna todas as categorias cadastradas.  

- **POST `/categories`**  
  - **O que faz:** Valida `name` (Yup), impede nomes duplicados, cria nova categoria.  
  - **Retorna:** `{ id, name }` da categoria criada.

---

### 🎯 Campanhas

- **GET `/campaigns/public`**  
  - **O que faz:** Lista somente campanhas publicadas (`is_private = false`).

- **GET `/campaigns`**  
  - **O que faz:** Lista campanhas públicas e as privadas do usuário autenticado.

- **GET `/campaigns/:id`**  
  - **O que faz:** Busca campanha por `id`.  
    - Se privada, só permite acesso ao criador.

> 🔐 **(A partir daqui exige `authMiddleware`)**

- **POST `/campaigns`**  
  - **O que faz:** Recebe `title`, `description`, `goal_amount`, `end_date`, `category_id`, `is_private` e imagem (`file` via multer), valida com Yup, cria campanha (privada por padrão).  
  - **Retorna:** Objeto da campanha (201).

- **PUT `/campaigns/:id/public`**  
  - **O que faz:** Só o dono pode marcar `is_private = false` (publicar).

- **GET `/campaigns/private/list`**  
  - **O que faz:** Lista todas as campanhas (públicas e privadas) do usuário.

- **PUT `/campaigns/:id`**  
  - **O que faz:** Atualiza campos e imagem opcional, só pelo criador.

- **DELETE `/campaigns/:id`**  
  - **O que faz:** Remove campanha, só pelo criador.

---

### 🎁 Doações

- **POST `/campaigns/:id/donate`**  
  - **O que faz:**  
    1. Valida `amount` (Yup, >0, mínimo R$0,01).  
    2. Verifica autenticação, existência da campanha e se `end_date` não expirou.  
    3. Cria doação e atualiza `current_amount` da campanha.  
  - **Retorna:**  
    ```json
    {
      "donation": { "id", "amount", "donation_date" },
      "campaign": { "current_amount", "goal_amount" },
      "message": "Doação realizada com sucesso!"
    }
    ```

- **GET `/campaigns/:id/donations`**  
  - **O que faz:** Lista doações da campanha, mais recentes primeiro, incluindo `{ donor: { id, name } }`.

---

> ⚠️ **Validações e tratamento de erros** em todas as rotas (Yup, checagem de permissões, status HTTP adequados).  


## 📄 Páginas (Frontend)

- **`/` (Home)**  
  Página inicial da plataforma. Usuários conhecem a proposta do Doa+ e visualizam campanhas em destaque. Público.

- **`/cadastro` (Cadastro)**  
  Criar conta informando dados básicos. Apenas não autenticados.

- **`/login` (Login)**  
  Entrar com credenciais. Apenas não autenticados.

- **`/explorar` (Explorar Campanhas)**  
  Navegar por todas as campanhas cadastradas, filtrar e buscar por categorias. Público.

- **`/detalhes-campanhas/:id` (Detalhes da Campanha)**  
  Exibe descrição, meta, valor arrecadado, responsável e outras informações. Público.

- **`/detalhes-campanhas/doar/:id` (Doar para Campanha)**  
  Escolher valor e efetuar doação. Inclui verificação de dados. Público.

- **`/detalhes-campanha/:id` (Detalhes Internos da Campanha)**  
  Acesso privado para dono da campanha ou admin. Visualiza doadores e progresso detalhado.

- **`/campanha` (Criar Campanha)**  
  Criar nova campanha. Contém validações de formulário e upload de imagens com preview. Privado.

- **`/admin/vaquinhas` (Painel Admin)**  
  Administradores visualizam todas as campanhas, acompanham status e acessam dados gerenciais. Exclusivo para admins.

- **`/admin/editar-campanha/:id` (Editar Campanha)**  
  Editar título, descrição, valor meta e status de campanha específica. Exclusivo para admins.

> 📌 Todas as páginas possuem validações de formulário, tratamento de erros e verificações de permissão baseadas no tipo de usuário (logado, não logado, administrador).

---

## 🔐 Lógica de Rotas Privadas

- `/cadastro` e `/login` disponíveis apenas para **não autenticados**.  
- Exceto por `/`, `/explorar` e `/detalhes-campanhas`, todas as outras páginas exigem **usuário logado**.  
- Rotas iniciadas em `/admin/` são exclusivas para **administradores**.
