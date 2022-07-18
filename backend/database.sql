CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL
);

CREATE TABLE `member` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255),
  `phone` int,
  `cotisation` INT NOT NULL,
  `newsletter` boolean
);

CREATE TABLE `news` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `is_published` boolean,
  `photo_id` int
);

CREATE TABLE `newscontent` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `text` varchar(1500) NOT NULL,
  `language_code` varchar(5) NOT NULL,
  `news_id` int
);

CREATE TABLE `photo` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `photo_name` varchar(255) NOT NULL,
  `photo_url` varchar(255) NOT NULL,
  `updated_at` DATE,
  `description` VARCHAR(225) NOT NULL
);

CREATE TABLE `mosaic` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `photo_id` int
);

CREATE TABLE `language` (
  `code` varchar(5) PRIMARY KEY NOT NULL,
  `name` varchar(50) NOT NULL
);

CREATE TABLE `content` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `body` text NOT NULL,
  `language_code` varchar(5) NOT NULL,
  `traduction_id` int
);

CREATE TABLE `traduction` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `ref` varchar(255) NOT NULL,
  `definition` VARCHAR(255), 
  `type` INT
);

ALTER TABLE `mosaic` ADD FOREIGN KEY (`photo_id`) REFERENCES `photo` (`id`);

ALTER TABLE `news` ADD FOREIGN KEY (`photo_id`) REFERENCES `photo` (`id`);

ALTER TABLE `newscontent` ADD FOREIGN KEY (`news_id`) REFERENCES `news` (`id`);

ALTER TABLE `content` ADD FOREIGN KEY (`language_code`) REFERENCES `language` (`code`);

ALTER TABLE `content` ADD FOREIGN KEY (`traduction_id`) REFERENCES `traduction` (`id`);

ALTER TABLE `newscontent` ADD FOREIGN KEY (`language_code`) REFERENCES `language` (`code`);

INSERT INTO content (body, language_code, traduction_id) VALUES
("Ceci est un titre", "FR", 1),
("Це титул", "UK", 1),
("Ceci est une citation", "FR", 2),
("Це цитата", "UK", 2),
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
("Ceci est un slogan 1", "FR", 10),
("це гасло 1", "UK", 10),
("Ceci est un slogan 2", "FR", 11),
("це гасло 2", "UK", 11),
("Ceci est un titre", "FR", 12),
("Це титул", "UK", 12),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "FR", 13), 
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "UK", 13),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "FR", 14), 
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "UK", 14), 
("Ceci est un titre", "FR", 15),
("Це титул", "UK", 15),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "FR", 16), 
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "UK", 16),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "FR", 17), 
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "UK", 17), 
("Ceci est un titre", "FR", 18),
("Це титул", "UK", 18),
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
, "FR", 19), 
("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sollicitudin massa. Praesent in malesUKda sem. Sed accumsan neque arcu. Mauris vehicula ex et felis gravida blandit. Duis faucibus, magna nec accumsan molestie, mi urna elementum dolor, quis pharetra qUKm enim non justo. In commodo suscipit elit vel sagittis. Quisque non viverra ante. Sed blandit lorem et eros bibendum hendrerit. Donec dignissim mauris ligula, vitae fermentum risus posuere auctor."
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
("Télécharger", "FR", 51),
("Завантажити", "UK", 51),
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
