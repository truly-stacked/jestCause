create database hang;
--
USE hang;



-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(25) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `profile_url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'events'
--
-- ---

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `where` VARCHAR(100) NOT NULL,
  `when` TIME NOT NULL,
  `description` VARCHAR(500) NULL,
  `host_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'user_events'
--
-- ---

DROP TABLE IF EXISTS `user_events`;

CREATE TABLE `user_events` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `host_id` INTEGER NOT NULL,
  `event_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `events` ADD FOREIGN KEY (host_id) REFERENCES `users` (`id`);
ALTER TABLE `user_events` ADD FOREIGN KEY (host_id) REFERENCES `users` (`id`);
ALTER TABLE `user_events` ADD FOREIGN KEY (event_id) REFERENCES `events` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user_events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`name`,`email`,`password`,`profile_url`) VALUES
-- ('','','','','');
-- INSERT INTO `events` (`id`,`where`,`when`,`description`,`host_id`) VALUES
-- ('','','','','');
-- INSERT INTO `user_events` (`id`,`host_id`,`event_id`) VALUES
-- ('','','');