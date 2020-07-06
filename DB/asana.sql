-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2020 a las 16:47:48
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `asana`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admins`
--

CREATE TABLE `admins` (
  `id_admin` int(2) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `id_role` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admins`
--

INSERT INTO `admins` (`id_admin`, `name`, `lastname`, `email`, `id_role`) VALUES
(1, 'Dustin', 'Hoffmann', 'dustinhoffmann@gmail.com', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `companies`
--

CREATE TABLE `companies` (
  `id_company` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `cuil` varchar(13) NOT NULL,
  `phone_number` int(20) UNSIGNED NOT NULL,
  `address` varchar(70) NOT NULL,
  `email` varchar(50) NOT NULL,
  `id_role` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `companies`
--

INSERT INTO `companies` (`id_company`, `name`, `cuil`, `phone_number`, `address`, `email`, `id_role`) VALUES
(3, 'Morzicorp', '27959307798', 33566544, 'Av. Del Libertador 2030, CABA', 'morzicorp@gmail.com', 2),
(5, 'ACME', '57574899293', 474738329, 'Stuart St. 445, NY', 'acme@gmail.com', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `credentials`
--

CREATE TABLE `credentials` (
  `id_credential` int(10) UNSIGNED NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `id_role` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `credentials`
--

INSERT INTO `credentials` (`id_credential`, `email`, `password`, `id_role`) VALUES
(2, 'morzicorp@gmail.com', 'morzi', 2),
(71, 'dustinhoffmann@gmail.com', 'dustin', 3),
(76, 'acme@gmail.com', 'acme', 2),
(98, 'gandalfthegrey@gmail.com', 'The Grey38394309', 1),
(99, 'frodobaggins@gmail.com', 'Baggins449495849', 1),
(100, 'sanwise@gmail.com', 'Gamyi48484449', 1),
(101, 'bilbobaggins@gmail.com', 'Baggins48494383', 1),
(102, 'aragorn@gmail.com', 'Arathorn484848499', 1),
(103, 'legolas@gmail.com', 'Greenleaf4844848', 1),
(104, 'arwen@gmail.com', 'Undomiel58585765', 1),
(105, 'hermione@gmail.com', 'Granger3838338', 1),
(106, 'harry@gmail.com', 'Potter484843838', 1),
(107, 'ron@gmail.com', 'Weasley8338838', 1),
(108, 'lupin@gmail.com', 'Lupin38484848', 1),
(109, 'albus@gmail.com', 'Dumbledore44844848', 1),
(110, 'dolores@gmail.com', 'Umbridge4848483', 1),
(111, 'neville@gmail.com', 'Longbottom44848439', 1),
(112, 'dkdkd', 'ddodo4949499', 1),
(113, 'dfojsha', 'djdjdj4844848675', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `document_types`
--

CREATE TABLE `document_types` (
  `id_document_type` int(1) NOT NULL,
  `document_type` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `document_types`
--

INSERT INTO `document_types` (`id_document_type`, `document_type`) VALUES
(1, 'DNI'),
(2, 'PAS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluations`
--

CREATE TABLE `evaluations` (
  `id_evaluation` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `id_company` int(50) NOT NULL,
  `id_status` int(2) NOT NULL,
  `date` varchar(10) NOT NULL,
  `time` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `evaluations`
--

INSERT INTO `evaluations` (`id_evaluation`, `id_user`, `id_company`, `id_status`, `date`, `time`) VALUES
(83, 180, 5, 1, '2020-7-5', '20:27:10'),
(84, 181, 5, 1, '2020-7-5', '20:28:17'),
(85, 182, 5, 1, '2020-7-5', '20:29:13'),
(86, 183, 5, 1, '2020-7-5', '20:30:54'),
(87, 184, 5, 1, '2020-7-5', '20:33:9'),
(88, 185, 5, 1, '2020-7-5', '20:35:42'),
(89, 186, 5, 1, '2020-7-5', '20:37:46'),
(90, 187, 5, 1, '2020-7-5', '20:44:16'),
(91, 188, 5, 1, '2020-7-5', '20:44:55'),
(92, 189, 5, 1, '2020-7-5', '20:45:44'),
(93, 190, 5, 1, '2020-7-5', '20:46:19'),
(94, 191, 5, 1, '2020-7-5', '20:47:0'),
(95, 192, 5, 1, '2020-7-5', '20:47:53'),
(96, 193, 5, 1, '2020-7-5', '20:48:50'),
(97, 194, 5, 1, '2020-7-6', '11:8:37'),
(98, 180, 5, 1, '2020-7-6', '11:8:43'),
(99, 195, 5, 1, '2020-7-6', '11:26:50'),
(100, 180, 5, 1, '2020-7-6', '11:28:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_role` int(10) UNSIGNED NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_role`, `role`) VALUES
(1, 'user'),
(2, 'company'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id_status` int(1) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id_status`, `status`) VALUES
(1, 'Programado'),
(2, 'Listo'),
(3, 'Cancelado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tests`
--

CREATE TABLE `tests` (
  `id_test` int(11) NOT NULL,
  `name` varchar(70) NOT NULL,
  `estimated_time_min` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tests`
--

INSERT INTO `tests` (`id_test`, `name`, `estimated_time_min`) VALUES
(1, 'Curso Intensivo de Yoga', '10'),
(2, 'Baño con Leche de Almendras', '15'),
(3, 'Masaje Japonés', '10'),
(4, 'Técnicas de Meditación', '15'),
(5, 'Degustación Vegana', '40'),
(6, 'Curso Básico de Relajación', '30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tests_evaluations`
--

CREATE TABLE `tests_evaluations` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_test` int(11) NOT NULL,
  `id_evaluation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tests_evaluations`
--

INSERT INTO `tests_evaluations` (`id`, `id_test`, `id_evaluation`) VALUES
(141, 3, 82),
(142, 1, 83),
(143, 2, 83),
(144, 3, 83),
(145, 6, 84),
(146, 5, 84),
(147, 4, 84),
(148, 5, 85),
(149, 4, 85),
(150, 3, 85),
(151, 2, 85),
(152, 1, 85),
(153, 6, 85),
(154, 3, 86),
(155, 2, 86),
(156, 2, 87),
(157, 1, 87),
(158, 4, 88),
(159, 5, 88),
(160, 6, 88),
(161, 2, 89),
(162, 4, 89),
(163, 3, 89),
(164, 4, 90),
(165, 3, 90),
(166, 2, 90),
(167, 1, 91),
(168, 2, 91),
(169, 4, 92),
(170, 3, 92),
(171, 2, 92),
(172, 4, 93),
(173, 3, 93),
(174, 2, 93),
(175, 2, 94),
(176, 1, 94),
(177, 3, 94),
(178, 6, 95),
(179, 1, 95),
(180, 4, 95),
(181, 3, 96),
(182, 4, 96),
(183, 5, 96),
(184, 2, 97),
(185, 6, 98),
(186, 2, 99),
(187, 2, 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `id_document_type` int(1) NOT NULL,
  `document` int(9) UNSIGNED NOT NULL,
  `id_company` int(11) NOT NULL,
  `position` varchar(50) NOT NULL,
  `phone_number` int(20) UNSIGNED NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `name`, `lastname`, `id_document_type`, `document`, `id_company`, `position`, `phone_number`, `email`, `address`, `password`) VALUES
(180, 'Gandalf', 'The Grey', 1, 38394309, 5, 'Mago', 339934893, 'gandalfthegrey@gmail.com', 'Nowhere 332, HS', 'The Grey38394309'),
(181, 'Frodo ', 'Baggins', 1, 449495849, 5, 'Ring Bearer', 484493938, 'frodobaggins@gmail.com', 'The Shire', 'Baggins449495849'),
(182, 'Samwise', 'Gamyi', 1, 48484449, 5, 'Ring Bearer Keeper', 4585893, 'sanwise@gmail.com', 'The Shire', 'Gamyi48484449'),
(183, 'Bilbo', 'Baggins', 1, 48494383, 5, 'Burglar', 57574848, 'bilbobaggins@gmail.com', 'The Shire', 'Baggins48494383'),
(184, 'Aragorn', 'Arathorn', 2, 484848499, 5, 'King', 484489339, 'aragorn@gmail.com', 'Gondor', 'Arathorn484848499'),
(185, 'Legolas ', 'Greenleaf', 2, 4844848, 5, 'Protector', 4294967295, 'legolas@gmail.com', 'Rivendel', 'Greenleaf4844848'),
(186, 'Arwen', 'Undomiel', 1, 58585765, 5, 'Warrior', 49484484, 'arwen@gmail.com', 'Rivendel', 'Undomiel58585765'),
(187, 'Hermione', 'Granger', 1, 3838338, 5, 'Witch', 4294967295, 'hermione@gmail.com', 'Hogwarts', 'Granger3838338'),
(188, 'Harry', 'Potter', 1, 484843838, 5, 'Wizard', 444848, 'harry@gmail.com', 'Hogwarts', 'Potter484843838'),
(189, 'Ron', 'Weasley', 1, 8338838, 5, 'Wizard', 83838338, 'ron@gmail.com', 'Hogwarts', 'Weasley8338838'),
(190, 'Remus', 'Lupin', 1, 38484848, 5, 'Wizard', 484484848, 'lupin@gmail.com', 'Hogwarts', 'Lupin38484848'),
(191, 'Albus', 'Dumbledore', 2, 44844848, 5, 'Headmaster', 4294967295, 'albus@gmail.com', 'Hogwarts', 'Dumbledore44844848'),
(192, 'Dolores', 'Umbridge', 1, 4848483, 5, 'Demon', 4848483, 'dolores@gmail.com', 'Hogwarts', 'Umbridge4848483'),
(193, 'Neville', 'Longbottom', 1, 44848439, 5, 'Wizard', 494494949, 'neville@gmail.com', 'Hogwarts', 'Longbottom44848439'),
(194, 'dododo', 'ddodo', 1, 4949499, 5, 'dkdkdk', 9499, 'dkdkd', 'dkdk', 'ddodo4949499'),
(195, 'capitan', 'djdjdj', 1, 4294967295, 5, 'djddj', 4949449, 'dfojsha', 'dighrnedj', 'djdjdj4844848675');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indices de la tabla `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id_company`);

--
-- Indices de la tabla `credentials`
--
ALTER TABLE `credentials`
  ADD PRIMARY KEY (`id_credential`);

--
-- Indices de la tabla `document_types`
--
ALTER TABLE `document_types`
  ADD PRIMARY KEY (`id_document_type`);

--
-- Indices de la tabla `evaluations`
--
ALTER TABLE `evaluations`
  ADD PRIMARY KEY (`id_evaluation`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id_status`);

--
-- Indices de la tabla `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id_test`);

--
-- Indices de la tabla `tests_evaluations`
--
ALTER TABLE `tests_evaluations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admins`
--
ALTER TABLE `admins`
  MODIFY `id_admin` int(2) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `companies`
--
ALTER TABLE `companies`
  MODIFY `id_company` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `credentials`
--
ALTER TABLE `credentials`
  MODIFY `id_credential` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT de la tabla `evaluations`
--
ALTER TABLE `evaluations`
  MODIFY `id_evaluation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `tests`
--
ALTER TABLE `tests`
  MODIFY `id_test` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tests_evaluations`
--
ALTER TABLE `tests_evaluations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=196;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
