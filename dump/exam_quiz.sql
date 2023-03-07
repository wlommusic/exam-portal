-- MariaDB dump 10.19  Distrib 10.10.3-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: exam
-- ------------------------------------------------------
-- Server version	10.10.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quiz` (
  `q_id` bigint(20) NOT NULL,
  `active` bit(1) NOT NULL,
  `description` text DEFAULT NULL,
  `max_marks` varchar(255) DEFAULT NULL,
  `no_of_questions` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category_c_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`q_id`),
  KEY `FK1gnsxy7kb57ypv1yq1ybyym5j` (`category_c_id`),
  CONSTRAINT `FK1gnsxy7kb57ypv1yq1ybyym5j` FOREIGN KEY (`category_c_id`) REFERENCES `category` (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES
(45,'','A quiz related to core java.','100','10','Core java Quiz',42),
(46,'','A quiz related to Python basics.','100','10','Python basics Quiz',42),
(52,'','A quiz for java oops concepts.','100','10','Java OOPS Quiz',42),
(62,'','Anime is a style of Japanese animated film that often contains scenes that are intended for adults.','100','2','Anime',44),
(76,'','a mock interview for google','100','2','google Interview',42);
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-07 13:16:01
