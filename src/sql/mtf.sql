SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `mtf` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `mtf`;

DROP TABLE IF EXISTS `mtf_applications`;
CREATE TABLE `mtf_applications` (
  `id` int(10) NOT NULL,
  `code` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(4000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `mtf_applications` (`id`, `code`, `name`, `description`) VALUES
(1, 'MTF', 'Maintain Translation Files', 'Maintain Translations');
DROP VIEW IF EXISTS `mtf_applications_vw`;
CREATE TABLE `mtf_applications_vw` (
`id` int(10)
,`code` varchar(10)
,`name` varchar(255)
,`description` varchar(4000)
);

DROP TABLE IF EXISTS `mtf_labels`;
CREATE TABLE `mtf_labels` (
  `id` int(10) NOT NULL,
  `app_id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `description` varchar(4000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `mtf_labels` (`id`, `app_id`, `label`, `description`) VALUES
(3, 1, 'MTF.TITLE', 'Title of MTF Application'),
(5, 1, 'MTF.MENU.LANGUAGES', 'Menu Item Languages'),
(6, 1, 'MTF.MENU.APPLICATIONS', 'Menu Item Applications'),
(7, 1, 'MTF.MENU.LABELS', 'Menu Item Labels'),
(8, 1, 'MTF.MENU.TRANSLATIONS', 'Menu Item Translations'),
(9, 1, 'MTF.MENU.DOWNLOADS', 'Menu Item Downloads'),
(10, 1, 'MTF.MENU.UPLOADS', 'Menu Item Uploads'),
(11, 1, 'MTF.MENU.ABOUT', 'Menu Item About'),
(12, 1, 'MTF.MAINTAIN', 'Maintain'),
(13, 1, 'MTF.BUTTON.EDIT', 'Button Edit'),
(14, 1, 'MTF.BUTTON.DELETE', 'Button Delete'),
(15, 1, 'MTF.BUTTON.SAVE', 'Button Save'),
(17, 1, 'MTF.BUTTON.CANCEL', 'Button Cancel'),
(18, 1, 'MTF.BUTTON.ADD', 'Button Add'),
(19, 1, 'MTF.BUTTON.SHOWFILTER', 'Button Showfilter'),
(20, 1, 'MTF.BUTTON.DOWNLOAD', 'Button Download'),
(21, 1, 'MTF.BUTTON.HIDEFILTER', 'Hide Filter'),
(22, 1, 'MTF.TH.ID', 'Table Head ID'),
(23, 1, 'MTF.TH.ENGLISH_NAME', 'Table Head English Name'),
(24, 1, 'MTF.TH.NATIVE_NAME', 'Table Head Native Name'),
(25, 1, 'MTF.TH.CODE', 'Table Head Code'),
(26, 1, 'MTF.TH.NAME', 'Table Head Name'),
(27, 1, 'MTF.TH.DESCRIPTION', 'Table Head Description'),
(28, 1, 'MTF.TH.LABEL', 'Table Head Label'),
(29, 1, 'MTF.TH.APPLICATION', 'Table Head Application'),
(30, 1, 'MTF.TH.TRANSLATION', 'Table Head Translation'),
(31, 1, 'MTF.TH.LANGUAGE', 'Table Head Language'),
(32, 1, 'MTF.PAGENOTFOUND.TITLE', 'Title of Page Not Found Page'),
(33, 1, 'MTF.PAGENOTFOUND.TEXT', 'Text for page Page Not Found'),
(34, 1, 'MTF.FILTER.TITLE', 'Filter'),
(35, 1, 'MTF.FILTER.SHOW_ALL', 'Filter option show all'),
(36, 1, 'MTF.FILTER.ON.LABEL', 'Filter option label'),
(37, 1, 'MTF.FILTER.ON.DESCRIPTION', 'Filter option description'),
(38, 1, 'MTF.FILTER.ON.APPLICATION', 'Filter option application'),
(39, 1, 'MTF.FILTER.ON.LANGUAGE', 'Filter option language'),
(40, 1, 'MTF.FILTER.ON.TRANSLATION', 'Filter option translation'),
(41, 1, 'MTF.BUTTON.CLEARFILTER', 'Clear filter options'),
(42, 1, 'MTF.BUTTON.COPY', 'Copy to clipboard'),
(43, 1, 'MTF.SAVED', 'Data saved'),
(44, 1, 'MTF.CONTENT_HERE', 'Placeholder for JSON content');
DROP VIEW IF EXISTS `mtf_labels_vw`;
CREATE TABLE `mtf_labels_vw` (
`id` int(10)
,`app_id` int(11)
,`app_code` varchar(10)
,`app_name` varchar(255)
,`app_description` varchar(4000)
,`label` varchar(255)
,`description` varchar(4000)
);

DROP TABLE IF EXISTS `mtf_languages`;
CREATE TABLE `mtf_languages` (
  `id` int(10) NOT NULL,
  `english_name` varchar(50) NOT NULL,
  `native_name` varchar(50) DEFAULT NULL,
  `iso_639_1` varchar(2) DEFAULT NULL,
  `iso_639_2` varchar(3) DEFAULT NULL,
  `iso_639_3` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `mtf_languages` (`id`, `english_name`, `native_name`, `iso_639_1`, `iso_639_2`, `iso_639_3`) VALUES
(1, 'English', 'English', 'EN', 'ENG', 'ENG'),
(2, 'Dutch', 'Nederlands', 'NL', 'DUT', 'NLD'),
(9, 'German', 'Deutsch', 'DE', 'GER', 'DEU'),
(13, 'French', 'Francois', 'FR', 'FRE', 'FRA');
DROP VIEW IF EXISTS `mtf_languages_vw`;
CREATE TABLE `mtf_languages_vw` (
`id` int(10)
,`english_name` varchar(50)
,`native_name` varchar(50)
,`iso_639_1` varchar(2)
,`iso_639_2` varchar(3)
,`iso_639_3` varchar(3)
);

DROP TABLE IF EXISTS `mtf_translations`;
CREATE TABLE `mtf_translations` (
  `id` int(10) NOT NULL,
  `language_id` int(10) NOT NULL,
  `label_id` int(10) NOT NULL,
  `text` varchar(4000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `mtf_translations` (`id`, `language_id`, `label_id`, `text`) VALUES
(1, 1, 3, 'Maintain Translation Files'),
(3, 2, 6, 'Applicaties'),
(4, 1, 6, 'Applications'),
(5, 9, 6, 'Applikationen'),
(6, 1, 7, 'Labels'),
(7, 2, 7, 'Labels'),
(8, 1, 5, 'Languages'),
(9, 2, 5, 'Talen'),
(10, 9, 5, 'Sprachen'),
(11, 1, 8, 'Translations'),
(12, 2, 8, 'Vertalingen'),
(13, 9, 8, 'Ãœbersetzungen'),
(14, 2, 3, 'Onderhoud vertalingsbestanden'),
(15, 9, 3, 'Ãœbersetzungsdateien pflegen'),
(16, 9, 7, 'Etiketten'),
(17, 1, 11, 'About'),
(18, 2, 11, 'Over'),
(19, 9, 11, 'Ãœber'),
(20, 1, 9, 'Downloads'),
(21, 2, 9, 'Downloads'),
(22, 9, 9, 'Downloads'),
(23, 9, 10, 'Uploads'),
(24, 1, 10, 'Uploads'),
(25, 2, 10, 'Uploads'),
(26, 9, 12, 'Pflegen'),
(27, 1, 12, 'Maintain'),
(28, 2, 12, 'Onderhoud'),
(29, 9, 17, 'Annullieren'),
(30, 1, 17, 'Cancel'),
(31, 2, 17, 'Annuleer'),
(32, 9, 14, 'LÃ¶schen'),
(33, 1, 14, 'Delete'),
(34, 2, 14, 'Verwijder'),
(35, 1, 13, 'Edit'),
(36, 9, 13, 'Bearbeiten'),
(37, 2, 13, 'Pas aan'),
(39, 1, 15, 'Save'),
(40, 2, 15, 'Bewaar'),
(41, 9, 15, 'Speichern'),
(42, 13, 11, 'Over'),
(43, 9, 18, 'HinzufÃ¼gen'),
(44, 1, 18, 'Add'),
(45, 2, 18, 'Voeg toe'),
(46, 9, 19, 'Filter anzeigen'),
(47, 1, 19, 'Show filter'),
(48, 2, 19, 'Toon filter'),
(49, 1, 20, 'Download'),
(50, 1, 21, 'Hide filter'),
(51, 2, 21, 'Verberg filter'),
(52, 1, 22, 'ID'),
(53, 2, 22, 'ID'),
(54, 9, 22, 'ID'),
(55, 1, 23, 'English Name'),
(56, 2, 23, 'Engelse Naam'),
(57, 9, 23, 'Englischer Name'),
(58, 1, 24, 'Native Name'),
(59, 2, 24, 'Inheemse Naam'),
(60, 9, 24, 'Eigenname'),
(61, 1, 25, 'Code'),
(62, 2, 25, 'Code'),
(63, 9, 25, 'Code'),
(64, 9, 27, 'Beschreibung'),
(65, 1, 27, 'Description'),
(66, 2, 27, 'Omschrijving'),
(67, 9, 26, 'Name'),
(68, 1, 26, 'Name'),
(69, 2, 26, 'Naam'),
(70, 1, 29, 'Application'),
(71, 2, 29, 'Applicatie'),
(72, 9, 29, 'Applikation'),
(73, 1, 28, 'Label'),
(74, 2, 28, 'Label'),
(75, 9, 28, 'Etiket'),
(76, 9, 30, 'Ãœbersetzung'),
(77, 1, 30, 'Translation'),
(78, 2, 30, 'Vertaling'),
(79, 9, 31, 'Sprache'),
(80, 1, 31, 'Language'),
(81, 2, 31, 'Taal'),
(82, 1, 34, 'Filter'),
(83, 2, 34, 'Filter'),
(84, 1, 38, 'Application'),
(85, 2, 38, 'Applicatie'),
(86, 1, 37, 'Description'),
(87, 2, 37, 'Omschrijving'),
(88, 1, 36, 'Label'),
(89, 2, 36, 'Label'),
(90, 1, 39, 'Language'),
(91, 2, 39, 'Taal'),
(92, 1, 40, 'Translation'),
(93, 2, 40, 'Vertaling'),
(94, 1, 41, 'Clear filter'),
(95, 2, 41, 'Leeg filter'),
(96, 1, 42, 'Copy to clipboard'),
(97, 2, 42, 'KopiÃ«er naar klembord'),
(98, 2, 20, 'Download'),
(100, 1, 43, 'The translations have been saved succesfully.'),
(101, 2, 43, 'De vertalingen zijn succesvol opgeslagen.'),
(102, 1, 44, 'Enter your JSON content here.'),
(103, 2, 44, 'Voer hier uw JSON data.');
DROP VIEW IF EXISTS `mtf_translations_vw`;
CREATE TABLE `mtf_translations_vw` (
`id` int(11)
,`label_id` int(11)
,`app_id` int(11)
,`app_code` varchar(10)
,`app_name` varchar(255)
,`app_description` text
,`label` varchar(255)
,`lab_description` text
,`language_id` int(11)
,`english_name` varchar(50)
,`native_name` varchar(50)
,`iso_639_1` varchar(2)
,`iso_639_2` varchar(3)
,`iso_639_3` varchar(3)
,`text` text
,`translation` text
);
DROP TABLE IF EXISTS `mtf_applications_vw`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mtf_applications_vw`  AS  select `mtf_applications`.`id` AS `id`,`mtf_applications`.`code` AS `code`,`mtf_applications`.`name` AS `name`,`mtf_applications`.`description` AS `description` from `mtf_applications` order by `mtf_applications`.`code` ;
DROP TABLE IF EXISTS `mtf_labels_vw`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mtf_labels_vw`  AS  select `lab`.`id` AS `id`,`lab`.`app_id` AS `app_id`,`app`.`code` AS `app_code`,`app`.`name` AS `app_name`,`app`.`description` AS `app_description`,`lab`.`label` AS `label`,`lab`.`description` AS `description` from (`mtf_labels` `lab` join `mtf_applications` `app`) where (`lab`.`app_id` = `app`.`id`) order by `app`.`code`,`lab`.`label` ;
DROP TABLE IF EXISTS `mtf_languages_vw`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mtf_languages_vw`  AS  select `mtf_languages`.`id` AS `id`,`mtf_languages`.`english_name` AS `english_name`,`mtf_languages`.`native_name` AS `native_name`,`mtf_languages`.`iso_639_1` AS `iso_639_1`,`mtf_languages`.`iso_639_2` AS `iso_639_2`,`mtf_languages`.`iso_639_3` AS `iso_639_3` from `mtf_languages` order by `mtf_languages`.`iso_639_1` ;
DROP TABLE IF EXISTS `mtf_translations_vw`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mtf_translations_vw`  AS  select `tra`.`id` AS `id`,`tra`.`label_id` AS `label_id`,`lab`.`app_id` AS `app_id`,`app`.`code` AS `app_code`,`app`.`name` AS `app_name`,`app`.`description` AS `app_description`,`lab`.`label` AS `label`,`lab`.`description` AS `lab_description`,`tra`.`language_id` AS `language_id`,`lan`.`english_name` AS `english_name`,`lan`.`native_name` AS `native_name`,`lan`.`iso_639_1` AS `iso_639_1`,`lan`.`iso_639_2` AS `iso_639_2`,`lan`.`iso_639_3` AS `iso_639_3`,`tra`.`text` AS `text`,`tra`.`text` AS `translation` from (((`mtf_translations` `tra` join `mtf_applications` `app`) join `mtf_labels` `lab`) join `mtf_languages` `lan`) where ((`tra`.`language_id` = `lan`.`id`) and (`tra`.`label_id` = `lab`.`id`) and (`lab`.`app_id` = `app`.`id`)) union all select NULL AS `NULL`,`lab`.`id` AS `label_id`,`lab`.`app_id` AS `app_id`,`app`.`code` AS `code`,`app`.`name` AS `name`,`app`.`description` AS `app_description`,`lab`.`label` AS `label`,`lab`.`description` AS `lab_description`,`lan`.`id` AS `language_id`,`lan`.`english_name` AS `english_name`,`lan`.`native_name` AS `native_name`,`lan`.`iso_639_1` AS `iso_639_1`,`lan`.`iso_639_2` AS `iso_639_2`,`lan`.`iso_639_3` AS `iso_639_3`,'' AS `Name_exp_31`,`lab`.`label` AS `Name_exp_32` from ((`mtf_applications` `app` join `mtf_labels` `lab`) join `mtf_languages` `lan`) where ((`lab`.`app_id` = `app`.`id`) and (not(exists(select 1 from `mtf_translations` `tra` where ((`tra`.`language_id` = `lan`.`id`) and (`tra`.`label_id` = `lab`.`id`)))))) order by `app_code`,`label`,`iso_639_1` ;


ALTER TABLE `mtf_applications`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mtf_applications_code_uc` (`code`),
  ADD UNIQUE KEY `mtf_applications_name_uc` (`name`);

ALTER TABLE `mtf_labels`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mtf_label_uc` (`label`),
  ADD KEY `mtf_labels_ibfk_1` (`app_id`);

ALTER TABLE `mtf_languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mtf_english_name_uc` (`english_name`),
  ADD UNIQUE KEY `mtf_native_name_uc` (`native_name`),
  ADD UNIQUE KEY `mtf_iso_639_1_uc` (`iso_639_1`),
  ADD UNIQUE KEY `mtf_iso_639_2_uc` (`iso_639_2`),
  ADD UNIQUE KEY `mtf_iso_639_3_uc` (`iso_639_3`);

ALTER TABLE `mtf_translations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mtf_translations_lang_lab_uc` (`language_id`,`label_id`),
  ADD KEY `mtf_translations_label_fk` (`label_id`);


ALTER TABLE `mtf_applications`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE `mtf_labels`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
ALTER TABLE `mtf_languages`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
ALTER TABLE `mtf_translations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

ALTER TABLE `mtf_labels`
  ADD CONSTRAINT `mtf_labels_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `mtf_applications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `mtf_translations`
  ADD CONSTRAINT `mtf_translations_label_fk` FOREIGN KEY (`label_id`) REFERENCES `mtf_labels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mtf_translations_language_fk` FOREIGN KEY (`language_id`) REFERENCES `mtf_languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
