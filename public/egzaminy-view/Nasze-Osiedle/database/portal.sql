-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 04, 2024 at 02:21 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dane`
--

CREATE TABLE `dane` (
  `id` int(10) UNSIGNED NOT NULL,
  `rok_urodz` year(4) DEFAULT NULL,
  `przyjaciol` int(10) UNSIGNED DEFAULT NULL,
  `hobby` varchar(20) DEFAULT NULL,
  `zdjecie` varchar(100) DEFAULT NULL,
  `stanowisko` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `dane`
--

INSERT INTO `dane` (`id`, `rok_urodz`, `przyjaciol`, `hobby`, `zdjecie`, `stanowisko`) VALUES
(1, '1995', 10, 'moda', 'o6.jpg', NULL),
(2, '1990', 20, 'film', 'o4.jpg', NULL),
(3, '1990', 20, 'cross', 'o1.jpg', NULL),
(4, '2001', 4, 'finanse', 'o2.jpg', NULL),
(5, '2002', 50, 'muzyka', 'o8.jpg', NULL),
(6, '1994', 10, 'baseball', 'o6.jpg', NULL),
(7, '1990', 20, 'film', 'o5.jpg', NULL),
(8, '1990', 20, 'film', 'o3.jpg', NULL),
(9, '2001', 0, 'psychologia', 'o7.jpg', NULL),
(10, '2002', 50, 'muzyka', 'o2.jpg', NULL),
(11, '1994', 10, 'DIY', 'o6.jpg', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id` int(10) UNSIGNED NOT NULL,
  `login` varchar(50) DEFAULT NULL,
  `haslo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id`, `login`, `haslo`) VALUES
(1, 'Justyna', 'a056c8d05ae9ac6ca180bc991b93b7ffe37563e0'),
(2, 'Ewa', 'c50267b906a652f2142cfab006e215c9f6fdc8a0'),
(3, 'Krzysiek', '637a81ed8e8217bb01c15c67c39b43b0ab4e20f1'),
(4, 'Adam', '8578173555a47d4ea49e697badfda270dee0858f'),
(5, 'Magda', '99ebdbd711b0e1854a6c2e93f759efc2af291fd0'),
(6, 'Werka', '186154712b2d5f6791d85b9a0987b98fa231779c'),
(7, 'Janek', '7823372203bd98aeb10e6f33a6ce7dab12d13423'),
(8, 'Heniek', '425ffc1422dc4f32528bd9fd5af355fdb5c96192'),
(9, 'Ola', '4ae9fa0a8299a828a886c0eb30c930c7cf302a72'),
(10, 'Dawid', 'b3054ff0797ff0b2bbce03ec897fe63e0b6490e0'),
(11, 'Ewelina', '7e240de74fb1ed08fa08d38063f6a6a91462a815');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `dane`
--
ALTER TABLE `dane`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dane`
--
ALTER TABLE `dane`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
