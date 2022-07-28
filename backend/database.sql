CREATE DATABASE IF NOT EXISTS afu;
USE afu;

CREATE TABLE IF NOT EXISTS `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `member` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255),
  `phone` int,
  `cotisation` INT NOT NULL,
  `newsletter` boolean
);

CREATE TABLE IF NOT EXISTS `news` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `is_published` boolean,
  `photo_id` int
);

CREATE TABLE IF NOT EXISTS `newscontent` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `text` varchar(1500) NOT NULL,
  `language_code` varchar(5) NOT NULL,
  `news_id` int
);

CREATE TABLE IF NOT EXISTS `photo` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `photo_name` varchar(255) NOT NULL,
  `photo_url` varchar(255) NOT NULL,
  `updated_at` DATE,
  `description` VARCHAR(225) NOT NULL
);

CREATE TABLE IF NOT EXISTS `mosaic` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `photo_id` int
);

CREATE TABLE IF NOT EXISTS `language` (
  `code` varchar(5) PRIMARY KEY NOT NULL,
  `name` varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS `content` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `body` text NOT NULL,
  `language_code` varchar(5) NOT NULL,
  `traduction_id` int
);

CREATE TABLE IF NOT EXISTS `traduction` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `ref` varchar(255) NOT NULL,
  `definition` VARCHAR(255), 
  `type` INT
);

ALTER TABLE `mosaic` ADD FOREIGN KEY (`photo_id`) REFERENCES `photo` (`id`);

ALTER TABLE `news` ADD FOREIGN KEY (`photo_id`) REFERENCES `photo` (`id`);

ALTER TABLE `newscontent` ADD FOREIGN KEY (`news_id`) REFERENCES `news` (`id`);

ALTER TABLE `content` ADD FOREIGN KEY (`traduction_id`) REFERENCES `traduction` (`id`);

INSERT INTO traduction (ref, definition, type) VALUES
('home_website_title', 'Titre du site', 0),
('home_website_subtitle', 'Sous-titre du site', 0),
('home_presentation_title_section', 'Titre de la section', 0),
('home_presentation_title', 'Présentation : titre', 0),
('home_presentation_content', 'Présentation : détail', 1),
('home_mission_title','Missions : titre', 0),
('home_mission_content', 'Mission : détail', 1),
('home_values_title','Valeurs : titre', 0),
('home_values_content', 'Valeurs : détail', 1),
('involve_slogan1', 'Slogan 1: texte', 0),
('involve_slogan2', 'Slogan 2 : texte', 0),
('involve_donate_title', 'Donnez : titre', 0),
('involve_donate_content', 'Donnez : texte', 1),
('involve_donate_addendum', 'Donnez : bon à savoir', 1),
('involve_join_title', 'Adhérez : titre', 0),
('involve_join_content', 'Adhérez : texte', 1),
('involve_join_addendum', 'Adhérez : bon à savoir', 1),
('involve_engage_title', 'Participez : titre', 0),
('involve_engage_content', 'Participez : texte', 1),
('involve_joinform_title', 'Formulaire adhésion : titre', 0),
('involve_joinform_label_firstname', 'Formulaire adhésion : prénom', 0),
('involve_joinform_label_lastname', 'Formulaire adhésion : nom', 0),
('involve_joinform_label_email', 'Formulaire adhésion : email', 0),
('involve_joinform_label_phone', 'Formulaire adhésion : téléphone', 0),
('involve_joinform_label_address', 'Formulaire adhésion : adresse', 1),
('involve_joinform_label_contribution', 'Formulaire adhésion : détail', 0),
('involve_joinform_label_contribution', 'Formulaire adhésion : adhérent', 0),
('involve_joinform_label_contribution', 'Formulaire adhésion : adhérent jeune', 0),
('involve_joinform_label_contribution', 'Formulaire adhésion : adhérent bienfaiteur', 0),
('involve_joinform_label_newsletter', 'Formulaire adhésion : sélection de la newsletter', 0),
('involve_joinform_validate_message', 'Formulaire adhésion : message de validation', 0),
('involve_contactform_title', 'Contactez : titre', 0),
('involve_contactform_label_firstname', 'Formulaire de contact : prénom', 0),
('involve_contactform_label_lastname', 'Formulaire de contact : nom', 0),
('involve_contactform_label_email', 'Formulaire de contact : email', 0),
('involve_contactform_label_subject', 'Formulaire de contact : objet', 0),
('involve_contactform_label_message', 'Formulaire de contact : message', 1),
('involve_contactform_validate_message', 'Formulaire de contact : message de validation', 0),
('other_newsletter_title', 'Souscription newsletter : titre', 0),
('other_newsletter_placeholder', 'Souscription newsletter : email', 0),
('other_newsletter_validate_message', 'Souscription newsletter : message de validation', 0),
('other_confidential_title', 'Politique de confidentialité : titre', 0),
('other_confidential_content', 'Politique de confidentialité : détail', 1),
('other_mentions_title', 'Mentions légales : titre', 0),
('other_mentions_content', 'Mentions légales : détail', 1),
('other_page_name_home', 'Nom de la navigation Accueil', 0),
('other_page_name_involve', 'Nom de la navigation Participer', 0),
('other_button_gift', 'Don : bouton envoi don', 0),
('other_button_join', 'Adhésion : bouton envoi adhésion', 0),
('other_button_contact', 'Contact : bouton envoi message', 0),
('other_button_upload', 'Adhésion : bouton téléchargement formulaire', 0),
('other_button_newsletter', 'Newsletter : bouton abonnement newsletter', 0);

INSERT INTO content (body, language_code, traduction_id) VALUES
("Association Avenir Franco-Ukrainien", "FR", 1),
("Франко-українська асоціація майбутнього", "UK", 1),
("« La vraie générosité envers l'avenir consiste à tout donner au présent. » Albert Camus ", "FR", 2),
("« Справжня щедрість щодо майбутнього полягає в тому, щоб віддавати все теперішньому» Альбер Камю", "UK", 2),
("Qui nous sommes", "FR", 3),
("Хто ми", "UK", 3),
("Présentation", "FR", 4),
("презентація", "UK", 4),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "UK", 5),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "FR", 5),
("Nos missions", "FR", 6),
("Наші місії", "UK", 6),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "UK", 7),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "FR", 7),
("Nos valeurs", "FR", 8),
("Наші цінності", "UK", 8),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "UK", 9),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesuada sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra quam enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "FR", 9);

INSERT INTO content (body, language_code, traduction_id) VALUES 
("Choisissez la paix", "FR", 10),
("вибрати мир", "UK", 10),
("Soutenez l'Ukraine", "FR", 11),
("Підтримайте Україну!", "UK", 11),
("Donnez !", "FR", 12),
("Дайте!", "UK", 12),
("Faire un don c'est nous permettre d'agir, en menant des actions d'aides humanitaires vers les civils ukrainiens victimes de la guerre, et de soutenir les réfugiés en France. Votre don est précieux, nous avons besoin de votre générosité pour intervenir en toute indépendance, afin de soutenir l’Ukraine."
, "FR", 13), 
("Здійснення пожертвування дозволяє нам існувати, проводячи гуманітарні акції для мирних громадян України, які постраждали внаслідок війни, та підтримувати біженців у Франції. Ми цінуємо Вашу щедрість, кожна пожертва є дорогоцінною та дає нам можливість самостійно підтримувати Україну."
, "UK", 13),
("Votre don vous donne droit à une réduction d'impôts de 75% de son montant dans la limite de 1000 euros de dons (plafond 2020). Au-delà, la réduction d’impôt est de 66 % du montant dans la limite de 20 % de vos revenus nets imposables. Nous pouvons vous adresser un reçu fiscal sur demande, pour se faire merci de nous adresser vos coordonnées par mail."
, "FR", 14), 
("Ваша пожертва дає вам право на зниження податку на 75% від його суми до ліміту в 1000 євро пожертв (стеля 2020). Крім того, зменшення податку становить 66% суми в межах 20% вашого чистого оподатковуваного доходу. Для отримання податкової квитанції, надішліть нам свої дані на електронну пошту."
, "UK", 14), 
("Adhérez !", "FR", 15),
("Приєднуйтесь!", "UK", 15),
("Adhérer à Avenir Franco-Ukrainien c'est soutenir l'Ukraine, en lui apportant un peu de votre temps et de vos compétences, c'est également contribuer au développement de l'association par les participations aux manifestations extérieures : marches pour la paix, expositions culturelles, missions de bénévolat."
, "FR", 16), 
("Приєднатися до Avenir Franco-Ukrainien – це підтримувати Україну, вносячи трохи свого часу та своїх навичок, а також сприяти розвитку асоціації, беручи участь у зовнішніх заходах: маршах миру, культурних виставках, волонтерських місіях."
, "UK", 16),
("Le montant de votre cotisation sera fonction de votre statut de membre : adhérents (15€), adhérents jeunes (8€), ou encore adhérents bienfaiteurs, associations, collectivités publiques, et autres personnes morales ou membres honoraires (100€). Merci de votre engagement et à bientôt parmi nous"
, "FR", 17), 
("Корисно знати: сума вашого внеску буде залежати від вашого статусу членства: члени (15 євро), молоді члени (8 євро), або навіть благодійники, асоціації, органи державної влади та інші юридичні особи чи почесні члени (100 євро). Дякуємо за вашу відданість і до скорої зустрічі."
, "UK", 17), 
("Renseignements", "FR", 18),
("Інформація:", "UK", 18),
("Julia Lambert 06.71.73.83.49 (Vertou)
Oleksandra Rouxel 06.32.41.44.56 (Nantes)"
, "FR", 19), 
("Юлія Ламберт 06.71.73.83.49 (Верту)
Олександра Руксель 06.32.41.44.56(Нант)"
, "UK", 19),
("Adhérer", "FR", 20),
("Приєднуйтесь", "UK", 20),
("Prénom","FR", 21),
("Ім'я", "UK", 21),
("Nom", "FR" ,22),
("Прізвище", "UK", 22),
("Email", "FR", 23),
("Електронна пошта", "UK", 23),
("Téléphone", "FR", 24),
("Телефон", "UK", 24),
("Adresse", "FR", 25),
("Адреса", "UK", 25),
("Choisissez votre cotisation", "FR", 26),
("Виберіть свій внесок", "UK", 26),
("Adhérent", "FR", 27),
("Член", "UK", 27),
("Adhérent jeune", "FR", 28),
("Молодий член", "UK", 28),
("Adhérent bienfaiteur", "FR", 29),
("Благодійник", "UK", 29),
("Newsletter", "FR", 30),
("Інформаційний бюлетень", "UK", 30),
("Nous avons bien reçu votre demande d'adhésion", "FR", 31),
("Ми отримали ваш запит на членство", "UK", 31),
("Nous contacter", "FR", 32),
("Зв'яжіться з нами", "UK", 32),
("Prénom","FR", 33),
("Ім'я", "UK", 33),
("Nom", "FR" , 34),
("Прізвище", "UK", 34),
("Email", "FR", 35),
("Електронна пошта", "UK", 35),
("Objet", "FR", 36),
("Об'єкт", "UK", 36),
("Message", "FR", 37),
("повідомлення", "UK", 37),
("Nous avons bien reçu votre message", "FR", 38),
("Ми отримали ваше повідомлення", "UK", 38);

INSERT INTO content (body, language_code, traduction_id) VALUES 
("Mentions Légales", "FR", 44),
("Юридична інформація", "UK", 44),
("L’adresse du site est : https://www. - Contact : Marianne - Nantes - assoavenirukrfr@gmail.com - Hébergeur : WCS", "FR", 45),
("Адреса сайту: https://www. - Контактна особа : Маріанна – Нант – assoavenirukrfr@gmail.com Хост: WCS", "UK", 45),
("Politique de Confidentialité", "FR", 42),
("Політика конфіденційності", "UK", 42),
("Le site n’utilise aucun cookie, ne contient aucune publicité, aucun traceur, aucune statistique. Aucune information n’est collectée sur les visiteurs du site. Les seules informations collectées le sont par l’hébergeur et concernent les fichiers journaux légaux et obligatoires des accès au site. Biensûr, lorsque vous adhérez à l'association, nous collectons les informations que vous nous avez volontairement transmises à cette fin. Ces données ne seront utilisées que dans le cadre stricte de l'association pour gérer l'adhésion mais elles ne seront pas données ou vendues à des entités tierces. En outre, vous disposez d'un droit d'accès et de rectification sur vos données en prenant contact à l'adresse mail suivante : assoavenirukrfr@gmail.com", "FR", 43),
("Сайт не використовує файли cookie, не містить реклами, трасувальників, статистики. Інформація про відвідувачів сайту не збирається. Єдина зібрана інформація збирається хостом істосується законних та обов’язкових файлів журналу доступу до сайту. Звичайно, коли ви приєднуєтеся до асоціації, ми збираємо інформацію, яку ви добровільно надіслали нам для цієї мети. Ці дані використовуватимуться лише в суворих рамках асоціації для керування членством, але вони не будуть передані чи продані третім особам. Крім того, ви маєте право отримати доступ івиправити свої дані, звернувшись за такою електронною адресою: assoavenirukrfr@gmail.com", "UK", 43),
("Accueil", "FR", 46),
("Ласкаво просимо", "UK", 46),
("Participer", "FR", 47),
("брати участь", "UK", 47),
("Faire un don", "FR", 48),
("Зробіть пожертву", "UK", 48),
("Adhérer", "FR", 49),
("Приєднуйтесь", "UK", 49),
("Contacter", "FR", 50 ),
("контакт", "UK", 50),
("Télécharger le formulaire d'adhésion", "FR", 51),
("Завантажте форму членства", "UK", 51),
("Inscrivez-vous à la newsletter", "FR", 39),
("Підпишіться на розсилку", "UK", 39),
("Entrez votre email", "FR", 40),
("Введіть свою електронну пошту", "UK", 40),
("Nous avons bien reçu votre demande d'abonnement à notre newsletter", "FR", 41),
("Ми отримали ваш запит на підписку на нашу розсилку.", "UK", 41);


INSERT INTO traduction (ref, definition, type) VALUES
('home_website_title', 'Titre du site', 0),
('home_website_subtitle', 'Sous-titre du site', 0),
('home_presentation_title_section', 'Titre de la section', 0),
('home_presentation_title', 'Présentation : titre', 0),
('home_presentation_content', 'Présentation : détail', 1),
('home_mission_title','Missions : titre', 0),
('home_mission_content', 'Mission : détail', 1),
('home_values_title','Valeurs : titre', 0),
('home_values_content', 'Valeurs : détail', 1),
('involve_slogan1', 'Slogan 1: texte', 0),
('involve_slogan2', 'Slogan 2 : texte', 0),
('involve_donate_title', 'Donnez : titre', 0),
('involve_donate_content', 'Donnez : texte', 1),
('involve_donate_addendum', 'Donnez : bon à savoir', 1),
('involve_join_title', 'Adhérez : titre', 0),
('involve_join_content', 'Adhérez : texte', 1),
('involve_join_addendum', 'Adhérez : bon à savoir', 1),
('involve_engage_title', 'Participez : titre', 0),
('involve_engage_content', 'Participez : texte', 1),
('involve_joinform_title', 'Formulaire adhésion : titre', 0),
('involve_joinform_label_firstname', 'Formulaire adhésion : prénom', 0),
('involve_joinform_label_lastname', 'Formulaire adhésion : nom', 0),
('involve_joinform_label_email', 'Formulaire adhésion : email', 0),
('involve_joinform_label_phone', 'Formulaire adhésion : téléphone', 0),
('involve_joinform_label_address', 'Formulaire adhésion : adresse', 1),
('involve_joinform_label_contribution', 'Formulaire adhésion : détail', 0),
('involve_joinform_label_contribution', 'Formulaire adhésion : adhérent', 0),
('involve_joinform_label_contribution', 'Formulaire adhésion : adhérent jeune', 0),
('involve_joinform_label_contribution', 'Formulaire adhésion : adhérent bienfaiteur', 0),
('involve_joinform_label_newsletter', 'Formulaire adhésion : sélection de la newsletter', 0),
('involve_joinform_validate_message', 'Formulaire adhésion : message de validation', 0),
('involve_contactform_title', 'Contactez : titre', 0),
('involve_contactform_label_firstname', 'Formulaire de contact : prénom', 0),
('involve_contactform_label_lastname', 'Formulaire de contact : nom', 0),
('involve_contactform_label_email', 'Formulaire de contact : email', 0),
('involve_contactform_label_subject', 'Formulaire de contact : objet', 0),
('involve_contactform_label_message', 'Formulaire de contact : message', 1),
('involve_contactform_validate_message', 'Formulaire de contact : message de validation', 0),
('other_newsletter_title', 'Souscription newsletter : titre', 0),
('other_newsletter_placeholder', 'Souscription newsletter : email', 0),
('other_newsletter_validate_message', 'Souscription newsletter : message de validation', 0),
('other_confidential_title', 'Politique de confidentialité : titre', 0),
('other_confidential_content', 'Politique de confidentialité : détail', 1),
('other_mentions_title', 'Mentions légales : titre', 0),
('other_mentions_content', 'Mentions légales : détail', 1),
('other_page_name_home', 'Nom de la navigation Accueil', 0),
('other_page_name_involve', 'Nom de la navigation Participer', 0),
('other_button_gift', 'Don : bouton envoi don', 0),
('other_button_join', 'Adhésion : bouton envoi adhésion', 0),
('other_button_contact', 'Contact : bouton envoi message', 0),
('other_button_upload', 'Adhésion : bouton téléchargement formulaire', 0),
('other_button_newsletter', 'Newsletter : bouton abonnement newsletter', 0);


INSERT INTO photo (photo_name, photo_url, updated_at, description) VALUES
("mosaic1", "/assets/images/1.jpg1658999782702.jpg", "2022-07-28", "Chargement du camion avec un drapeau ukranien"),
("mosaic2", "/assets/images/2.jpg1658999792885.jpg", "2022-07-28", "Camion de l'association"),
("mosaic3", "/assets/images/3.png1658999804430.png", "2022-07-28", "Chargement du camion"),
("mosaic4", "/assets/images/4.png1658999815240.png", "2022-07-28", "Camion3"),
("mosaic5", "/assets/images/5.png1658999830794.png", "2022-07-28", "L'équipe avec un camion chargé"),
("mosaic6", "/assets/images/6.jpg1659000859595.jpg", "2022-07-28", "Ukranien figurines");

