-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Ven 11 Mars 2016 à 16:54
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `cvad`
--

-- --------------------------------------------------------

--
-- Structure de la table `cat`
--

CREATE TABLE IF NOT EXISTS `cat` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `title` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `cat`
--

INSERT INTO `cat` (`id`, `name`, `title`) VALUES
(1, 'main', 'Adrien Olivon'),
(2, 'cv', 'CV'),
(3, 'pres', 'Portfolio');

-- --------------------------------------------------------

--
-- Structure de la table `li`
--

CREATE TABLE IF NOT EXISTS `li` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `ic` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `section` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Contenu de la table `li`
--

INSERT INTO `li` (`id`, `ic`, `content`, `section`) VALUES
(1, 'refresh', '<b>BTS SIO</b>\r\nazdazdadaz', 'formation'),
(2, 'refresh', 'La deux', 'formation'),
(3, 'ring', 'qsdqd', 'test'),
(4, 'ring', 'qsqsddqd', 'test'),
(5, 'qsd', 'qdffzef', 'oui'),
(6, 'qsqsdd', 'qdfqsdqfzef', 'oui'),
(7, 'refresh', 'OzduiOzduiOzduiOzdui', 'zad');

-- --------------------------------------------------------

--
-- Structure de la table `section`
--

CREATE TABLE IF NOT EXISTS `section` (
  `id` varchar(30) NOT NULL DEFAULT '',
  `ic` varchar(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `cat` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `section`
--

INSERT INTO `section` (`id`, `ic`, `name`, `cat`) VALUES
('formation', 'education', 'Formation', 2),
('oazdui', 'reazdfresh', 'sdadqsd', 3),
('oui', 'refresh', 'sdqsd', 3),
('test', 'globe', 'Oui', 1),
('zad', 'gloazdbe', 'Ozdui', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
