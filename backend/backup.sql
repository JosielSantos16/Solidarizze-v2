--
-- PostgreSQL database dump
--

-- Dumped from database version 14.17 (Ubuntu 14.17-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.17 (Ubuntu 14.17-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: campaigns; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.campaigns (
    title character varying(255) NOT NULL,
    description text NOT NULL,
    goal_amount numeric(10,2) NOT NULL,
    end_date timestamp with time zone NOT NULL,
    photo character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    path character varying(255),
    category_id integer,
    is_private boolean DEFAULT false NOT NULL,
    user_id uuid,
    current_amount numeric DEFAULT 0 NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    deleted_at timestamp without time zone
);


ALTER TABLE public.campaigns OWNER TO postgres;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: donations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.donations (
    id uuid NOT NULL,
    amount numeric(10,2) NOT NULL,
    donation_date timestamp with time zone NOT NULL,
    campaign_id uuid NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.donations OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    cpf character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20250218175205-create-users.js
20250301134402-create-campanhas.js
20250318012440-create-campaign-column.js
20250326222228-create-category.js
20250326234527-create-category-column.js
20250403180820-add-is_private-to-campaigns.js
20250405180117-alter-campaign-id-to-uuid.js
20250405192452-add-id.js
20250405201709-add-id_uyser.js
20250405201811-add-user-id-to-campaigns-again.js
20250405202725-add-user-id-to-campaigns.js
20250413183155-create-donations-table.js
20250413191109-add-current-amount-to-campaigns.js
20250413192406-fix-campaigns-uuid.js
\.


--
-- Data for Name: campaigns; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.campaigns (title, description, goal_amount, end_date, photo, created_at, updated_at, path, category_id, is_private, user_id, current_amount, id, deleted_at) FROM stdin;
Apoio a mães solo	Queremos oferecer cursos profissionalizantes e kits de higiene para mães solo em situação de vulnerabilidade. Sua doação ajudará a transformar vidas.	15000.00	2025-12-30 21:00:00-03	fad9a117-2333-4057-8170-7814db1338bb.png	2025-03-18 14:19:30.684-03	2025-03-18 14:19:30.684-03	fad9a117-2333-4057-8170-7814db1338bb.png	4	f	\N	0	7df4b6b7-d76c-48e0-a107-ce694238aa77	\N
Livros para a biblioteca comunitária	Queremos ampliar o acervo da biblioteca comunitária com livros novos e diversificados. Sua doação ajudará a comprar livros e mobiliário para o espaço.	8000.00	2025-12-30 21:00:00-03	955d0f22-335e-431c-ae72-ff6d0794550e.png	2025-03-18 14:15:55.867-03	2025-04-15 14:30:03.49-03	955d0f22-335e-431c-ae72-ff6d0794550e.png	5	f	\N	10	2529afb4-13ef-479d-abdb-35d2555f1831	\N
Apoie o sonho de Maria na faculdade	Maria é uma jovem talentosa que conquistou uma vaga em uma universidade pública, mas precisa de ajuda para custear transporte, materiais didáticos e alimentação durante o curso.	10000.00	2025-12-30 21:00:00-03	fd2fb06d-3c9f-43f4-b433-761ac491261d.jpg	2025-03-18 14:14:13.488-03	2025-04-14 14:58:46.596-03	fd2fb06d-3c9f-43f4-b433-761ac491261d.jpg	5	f	\N	10010	d4a03f87-400a-40fe-a380-0ac08c044623	\N
Ajuda para o asilo São Francisco	O asilo São Francisco precisa de recursos para melhorar a infraestrutura, comprar medicamentos e oferecer uma melhor qualidade de vida para os idosos.	25000.00	2025-12-30 21:00:00-03	e6e77fdb-3317-49f2-8d1b-b7d4f4e8d6e8.png	2025-03-18 14:15:26.012-03	2025-04-14 16:43:59.756-03	e6e77fdb-3317-49f2-8d1b-b7d4f4e8d6e8.png	10	f	\N	10	e83016e3-0ba2-4d81-96ef-57909de9beb4	\N
Projeto de horta comunitária	Queremos criar uma horta comunitária para fornecer alimentos saudáveis e gratuitos para famílias carentes. Sua doação ajudará a comprar sementes, ferramentas e materiais de irrigação.	12000.00	2025-12-30 21:00:00-03	1117a309-3648-4247-b42b-99ebbb8fe2e8.png	2025-03-18 14:14:50.078-03	2025-04-14 16:44:38.17-03	1117a309-3648-4247-b42b-99ebbb8fe2e8.png	8	f	\N	100	2badf3cf-4dbf-46a9-b12d-464bbadb6a7f	\N
Reforma da quadra da comunidade	A quadra esportiva da comunidade está em péssimas condições e precisa de reforma urgente. Sua doação ajudará a revitalizar o espaço para que crianças e jovens possam praticar esportes com segurança.	15000.00	2025-12-30 21:00:00-03	6f8dbf0a-a45f-4230-8401-ca1775c31e7b.jpg	2025-03-18 14:13:37.687-03	2025-04-17 13:19:12.207-03	6f8dbf0a-a45f-4230-8401-ca1775c31e7b.jpg	9	f	\N	281	ddc8f624-316a-449a-973c-5bb3d58401d4	\N
Apoio a artistas locais	Ajude a financiar um projeto cultural que apoia artistas locais a produzirem e exporem suas obras. Sua doação ajudará a cobrir custos de materiais, espaço e divulgação.	18000.00	2025-12-30 21:00:00-03	78032adf-33b4-4647-abb8-6732909b9c64.png	2025-03-18 14:16:25.587-03	2025-04-15 21:48:31.304-03	78032adf-33b4-4647-abb8-6732909b9c64.png	3	f	\N	10	c1c4ceea-ad47-4a52-bd28-c5b4f174218b	\N
Festival de música beneficente	Vamos realizar um festival de música para arrecadar fundos para projetos sociais na região. Sua doação ajudará a cobrir os custos de produção e infraestrutura do evento.	22000.00	2025-12-30 21:00:00-03	685a366a-a4a9-4490-b22b-61f5cbe98dc6.png	2025-03-18 14:17:55.439-03	2025-04-16 15:15:41.176-03	685a366a-a4a9-4490-b22b-61f5cbe98dc6.png	3	f	\N	100	5d24f4af-53e1-4693-949d-c39d34cfdf58	\N
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, created_at, updated_at) FROM stdin;
1	Causa animal	2025-03-26 21:44:52.023-03	2025-03-26 21:44:52.023-03
2	Desastres naturais	2025-03-26 21:45:13.625-03	2025-03-26 21:45:13.625-03
3	Arte e Cultura	2025-03-26 21:45:25.92-03	2025-03-26 21:45:25.92-03
4	Assistência social	2025-03-26 21:45:40.367-03	2025-03-26 21:45:40.367-03
5	Educação	2025-03-26 21:45:52.796-03	2025-03-26 21:45:52.796-03
6	Esportes	2025-03-26 21:46:10.311-03	2025-03-26 21:46:10.311-03
7	Inclusão	2025-03-26 21:46:29.059-03	2025-03-26 21:46:29.059-03
8	Meio ambiente	2025-03-26 21:46:40.179-03	2025-03-26 21:46:40.179-03
9	Construção	2025-03-26 21:46:52.848-03	2025-03-26 21:46:52.848-03
10	Saúde	2025-03-26 21:47:25.999-03	2025-03-26 21:47:25.999-03
11	Tecnologia	2025-03-26 21:47:41.235-03	2025-03-26 21:47:41.235-03
\.


--
-- Data for Name: donations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.donations (id, amount, donation_date, campaign_id, user_id, created_at, updated_at) FROM stdin;
58bbfee6-3f69-4f0f-ac77-8efc086894d1	10.00	2025-04-14 14:56:05.458-03	ddc8f624-316a-449a-973c-5bb3d58401d4	f62bee76-a1fd-409e-aa44-61daa55d04d7	2025-04-14 14:56:05.459-03	2025-04-14 14:56:05.459-03
0d4819e4-c91e-456a-b542-7fc2fb5d774a	110.00	2025-04-14 14:56:22.652-03	ddc8f624-316a-449a-973c-5bb3d58401d4	f62bee76-a1fd-409e-aa44-61daa55d04d7	2025-04-14 14:56:22.652-03	2025-04-14 14:56:22.652-03
646985cc-933c-4a6c-b5d5-01e766c323a6	10.00	2025-04-14 14:58:37.352-03	d4a03f87-400a-40fe-a380-0ac08c044623	f62bee76-a1fd-409e-aa44-61daa55d04d7	2025-04-14 14:58:37.352-03	2025-04-14 14:58:37.352-03
a4a7e1ea-8b2e-4219-85c1-b517de8bc2f5	10000.00	2025-04-14 14:58:46.593-03	d4a03f87-400a-40fe-a380-0ac08c044623	f62bee76-a1fd-409e-aa44-61daa55d04d7	2025-04-14 14:58:46.593-03	2025-04-14 14:58:46.593-03
c72ab531-412f-4b39-93bd-631bea0f0d92	10.00	2025-04-14 16:43:59.742-03	e83016e3-0ba2-4d81-96ef-57909de9beb4	17c8073f-586d-4f79-bea8-5d9b5d94b4a4	2025-04-14 16:43:59.743-03	2025-04-14 16:43:59.743-03
ccf0dfe7-d6e1-4991-891c-e6ca30ef1460	100.00	2025-04-14 16:44:38.167-03	2badf3cf-4dbf-46a9-b12d-464bbadb6a7f	17c8073f-586d-4f79-bea8-5d9b5d94b4a4	2025-04-14 16:44:38.168-03	2025-04-14 16:44:38.168-03
41e58b46-9e12-41cf-96cd-176e09da8855	10.00	2025-04-15 14:30:03.475-03	2529afb4-13ef-479d-abdb-35d2555f1831	17c8073f-586d-4f79-bea8-5d9b5d94b4a4	2025-04-15 14:30:03.476-03	2025-04-15 14:30:03.476-03
f593fc08-a1b1-42d6-82c8-a47fd0537095	10.00	2025-04-15 21:48:31.297-03	c1c4ceea-ad47-4a52-bd28-c5b4f174218b	f62bee76-a1fd-409e-aa44-61daa55d04d7	2025-04-15 21:48:31.298-03	2025-04-15 21:48:31.298-03
56c23e67-fd11-4a8e-a80a-ae8464849be2	100.00	2025-04-16 15:15:41.165-03	5d24f4af-53e1-4693-949d-c39d34cfdf58	f62bee76-a1fd-409e-aa44-61daa55d04d7	2025-04-16 15:15:41.165-03	2025-04-16 15:15:41.165-03
93395d64-e874-4742-846c-8c3c7292c466	160.00	2025-04-16 17:36:17.172-03	ddc8f624-316a-449a-973c-5bb3d58401d4	f62bee76-a1fd-409e-aa44-61daa55d04d7	2025-04-16 17:36:17.172-03	2025-04-16 17:36:17.172-03
9cac25da-10e8-4d28-bd56-45fbbb768685	1.00	2025-04-17 13:19:12.197-03	ddc8f624-316a-449a-973c-5bb3d58401d4	f62bee76-a1fd-409e-aa44-61daa55d04d7	2025-04-17 13:19:12.197-03	2025-04-17 13:19:12.197-03
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, cpf, email, password_hash, created_at, updated_at) FROM stdin;
f62bee76-a1fd-409e-aa44-61daa55d04d7	Fulano	45221808021	fulano@gmail.com	$2b$10$.pGWFQJmJTEZf79qxlg9guBQKrjn5sYMy70upy0.cRlBtXreaeJoS	2025-04-01 17:14:36.198-03	2025-04-01 17:14:36.198-03
80ec1d24-3a34-4b13-a819-14add55cc274	Ciclano	12345678900	ciclano@gmail.com	$2b$10$q/xh3ufk4/0Li2VJaAbj/eOu1oOpUiemXp12mYYm5QoSY8iZqY.nC	2025-04-02 14:28:19.678-03	2025-04-02 14:28:19.678-03
debafc08-1846-4eb0-910d-eb29a24d4d9b	Teste	66234111009	Testesilva@gmail.com	$2b$10$Mk/ZwUQHnokQgR79PrS0suLYUu6fNadMUbsgEOv01/9e9wHkS8FwS	2025-04-03 10:17:04.211-03	2025-04-03 10:17:04.211-03
092a553b-60df-4187-886d-950ee18dedb0	Usuario	75889563050	Usuario@gmail.com	$2b$10$ttCfoVi897rkK/vlvvVyKOILiuWDWEpjWnm/Lbm/iec.tVIjplS4m	2025-04-05 15:34:08.478-03	2025-04-05 15:34:08.478-03
17c8073f-586d-4f79-bea8-5d9b5d94b4a4	User	23240861070	user@gmail.com	$2b$10$ndQcrb29s.oUlDQ7WleJvutvkz6PazabaNG4pKykMLDZLeGUmX.RW	2025-04-14 15:16:35.162-03	2025-04-14 15:16:35.162-03
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 11, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: campaigns campaigns_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.campaigns
    ADD CONSTRAINT campaigns_pkey PRIMARY KEY (id);


--
-- Name: categories categories_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: donations donations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.donations
    ADD CONSTRAINT donations_pkey PRIMARY KEY (id);


--
-- Name: users users_cpf_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_cpf_key UNIQUE (cpf);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: donations_campaign_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX donations_campaign_id ON public.donations USING btree (campaign_id);


--
-- Name: donations_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX donations_user_id ON public.donations USING btree (user_id);


--
-- Name: campaigns campaigns_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.campaigns
    ADD CONSTRAINT campaigns_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: campaigns campaigns_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.campaigns
    ADD CONSTRAINT campaigns_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: donations donations_campaign_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.donations
    ADD CONSTRAINT donations_campaign_id_fkey FOREIGN KEY (campaign_id) REFERENCES public.campaigns(id);


--
-- Name: donations donations_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.donations
    ADD CONSTRAINT donations_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

