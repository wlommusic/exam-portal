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
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `ques_id` bigint(20) NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `content` varchar(5000) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `option1` varchar(255) DEFAULT NULL,
  `option2` varchar(255) DEFAULT NULL,
  `option3` varchar(255) DEFAULT NULL,
  `option4` varchar(255) DEFAULT NULL,
  `quiz_q_id` bigint(20) DEFAULT NULL,
  `given_answer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ques_id`),
  KEY `FKdj49uqc76yhmrmrdu3tsdatet` (`quiz_q_id`),
  CONSTRAINT `FKdj49uqc76yhmrmrdu3tsdatet` FOREIGN KEY (`quiz_q_id`) REFERENCES `quiz` (`q_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES
(47,'a programming language','what is java?','java.png','a drug','a programming language','a myth','a legend',45,NULL),
(63,'interface','What is HttpSession?',NULL,'interface','class','enum','package',45,NULL),
(66,'1995','when was java created',NULL,'1995','2002','1997','2018',45,NULL),
(68,'32 & 64','What is the size of float and double in java?\n',NULL,'32 & 64','32 & 32','64 & 64','64 & 32',45,NULL),
(75,'a programming language','<h2>what is Python</h2>',NULL,'a programming language','a reptile','a snake','something idk',46,NULL),
(77,'Guido van Rossum','<p>who invented python</p>',NULL,'Guido van Rossum','harsh bansal','yash jain','shubham seth',46,NULL),
(78,'1','<p>What is output for −</p><p>raining\'. find(\'z\') ?</p>',NULL,'Type error','Not found','\" \"','1',46,NULL),
(79,'re','<p>Name the python module which supports regular expressions.</p>',NULL,'regex','re','pyre','pyregex',46,NULL),
(80,' Logical error','<p>Name the error that doesn’t cause program to stop/end, but the output is not the desired result or is incorrect</p>',NULL,'Syntax error',' Runtime error',' Logical error','All of the above',46,NULL),
(81,'0','<p>What is output of following code −</p><blockquote><p>def func(x, ans):\n &nbsp;</p><p>&nbsp; &nbsp; &nbsp;if(x==0):\n &nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;return 0\n &nbsp;&nbsp;</p><p>&nbsp; &nbsp; &nbsp; else: \n &nbsp; &nbsp; &nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;return func(x-1, x+ans) \n</p><p>print(func(2,0))</p></blockquote>',NULL,'0','1','2','3',46,NULL),
(82,'Decode','<p>Which method is used to convert raw byte data to a string?</p>',NULL,'Encode','Decode','Convert','tostring',46,NULL),
(83,'Columnspan and rowspan','<p>Suppose you are using a grid manager then which option is best suitable to place a component in multiple rows and columns?</p>',NULL,'Columnspan and rowspan','Only row','Only column','Only rowspan',46,NULL),
(84,'All the above','<p>Python is an?</p>',NULL,' interpreted, high-level, general-purpose programming language','object-oriented programming language','procedural, functional, structured, and reflective programming language','All the above',46,NULL),
(85,'All the above','<p>Python filename extensions is/are</p>',NULL,'.py','.pyi','.pyc and .pyd','All the above',46,NULL),
(86,'Full metal aclchemist brotherhood','<p>which of the following is the best anime of all time</p>',NULL,'Attack on titans','Full metal aclchemist brotherhood','Pokemon','One punch man',62,NULL);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
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
