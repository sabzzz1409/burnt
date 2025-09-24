-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2025 at 04:59 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `based`
--

-- --------------------------------------------------------

--
-- Table structure for table `iotable`
--

CREATE TABLE `iotable` (
  `ioTable_id` int(11) NOT NULL,
  `data-text` varchar(255) DEFAULT NULL,
  `data-range` varchar(255) DEFAULT NULL,
  `data-color` varchar(255) DEFAULT NULL,
  `data-temporal` varchar(255) DEFAULT NULL,
  `data-radio` varchar(255) DEFAULT NULL,
  `data-checkbox` varchar(255) DEFAULT NULL,
  `data-select` varchar(255) DEFAULT NULL,
  `data-file` varchar(255) DEFAULT NULL,
  `ioTable_d_in` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `iotable`
--

INSERT INTO `iotable` (`ioTable_id`, `data-text`, `data-range`, `data-color`, `data-temporal`, `data-radio`, `data-checkbox`, `data-select`, `data-file`, `ioTable_d_in`) VALUES
(1, 'test 1', '39', '#ea8906', '4442-03-04T02:22', 'a', '1', 'B', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `iotable`
--
ALTER TABLE `iotable`
  ADD PRIMARY KEY (`ioTable_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `iotable`
--
ALTER TABLE `iotable`
  MODIFY `ioTable_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
