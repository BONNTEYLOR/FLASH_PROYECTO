drop database flash;
create database flash;
use flash;
CREATE TABLE `permissions` (
  `id_permisions` char(36) NOT NULL PRIMARY KEY,
  `name_permissions` varchar(50) DEFAULT NULL,
  `state_permissions` varchar(8) DEFAULT NULL

);
INSERT INTO `permissions` (`id_permisions`, `name_permissions`, `state_permissions`) VALUES
('7f49f107-a947-11ed-bf1a-a4bb6d3ed99c', 'Create employee', 'Activo'),
('7f49fdcd-a947-11ed-bf1a-a4bb6d3ed99c', 'Delete employee', 'Inactivo');


CREATE TABLE `administrator` (
  `id_admin` char(36) NOT NULL PRIMARY KEY,
  `name_admin` varchar(50) DEFAULT NULL,
  `email_admin` varchar(50) DEFAULT NULL,
  `phone_number_admin` bigint(20) DEFAULT NULL,
  `img_admin` text DEFAULT NULL,
  `id_img_admin` text DEFAULT NULL,
  -- el cambo de rocover va mantener null, hasta que el admin solicite recuperar la contraseña
  `code_recover_password` int(6) DEFAULT NULL,
  `password_admin` text DEFAULT NULL,
  `account_authentication_admin` tinyint(1) DEFAULT NULL,
  `state_admin` varchar(8) DEFAULT NULL,
  `id_permi_admin` char(36) NOT NULL,
  CONSTRAINT `id_permi_admin` FOREIGN KEY (`id_permi_admin`) REFERENCES `permissions` (`id_permisions`)

);
INSERT INTO `administrator` (`id_admin`, `name_admin`, `email_admin`, `phone_number_admin`, `img_admin`, `id_img_admin`, `code_recover_password`, `password_admin`, `account_authentication_admin`, `state_admin`, `id_permi_admin`) VALUES
('9ce9c148-a947-11ed-bf1a-a4bb6d3ed99c', 'Tatiana Barrera', 'tatiana@gmail.com', 3007013640, NULL, NULL, 3640, 'quehace.25', NULL, 'Activo', '7f49f107-a947-11ed-bf1a-a4bb6d3ed99c');



CREATE TABLE `customer` (
  `id_customer` char(36) NOT NULL PRIMARY KEY,
  `name_customer` varchar(50) DEFAULT NULL,
  --  cambiar admin por customer
  `phone_number_admin` bigint(20) DEFAULT NULL,
  `email_customer` varchar(50) DEFAULT NULL,
  `address_customer` varchar(50) DEFAULT NULL,
  `pasword_customer` text DEFAULT NULL

);
INSERT INTO `customer` (`id_customer`, `name_customer`, `phone_number_admin`, `email_customer`, `address_customer`, `pasword_customer`) VALUES
('b94f4ef4-a955-11ed-bf1a-a4bb6d3ed99c', 'Juan', 3201458789, 'juan@gmail.com', 'Mora # 12', 'holaquehace'),
('b94f5c5f-a955-11ed-bf1a-a4bb6d3ed99c', 'Cristian', 3215487471, 'cristian@gmail.com', 'Lannitos Guarala', 'privilegios.l');



CREATE TABLE `employee` (
  `id_employee` char(36) NOT NULL PRIMARY KEY,
  `name_employee` varchar(50) DEFAULT NULL,
  `email_employee` varchar(50) DEFAULT NULL,
  `phone_number_employee` bigint(20) DEFAULT NULL,
  `password_employed` text DEFAULT NULL,
  `state_employee` varchar(8) DEFAULT NULL,
  -- toca agregar el local
  `Store_employee` varchar(30) DEFAULT NULL,

  -- llave foranea local
  `id_store` char(36)
  -- agrego la llave foranea
  CONSTRAINT `employee_store` FOREIGN KEY (`id_store`) REFERENCES `store` (`id_store`)
  -- llave forane permisos
  `id_permi_emp` char(36) NOT NULL,
  -- se agrega la llave foranea
  CONSTRAINT `id_permi_emp` FOREIGN KEY (`id_permi_emp`) REFERENCES `permissions` (`id_permisions`)


  -- se borra ese id del admin
  -- `id_admin_emp` char(36) NOT NULL,
  -- tambien se borra la llave foranea
  -- CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`id_admin_emp`) REFERENCES `administrator` (`id_admin`)

);
INSERT INTO `employee` (`id_employee`, `name_employee`, `email_employee`, `phone_number_employee`, `password_employed`, `state_employee`, `id_admin_emp`) VALUES
('7c73c27c-a954-11ed-bf1a-a4bb6d3ed99c', 'Zharick ', 'zharick@gmail.com', 3115817475, 'dahiana.2004', 'Inactivo', '9ce9c148-a947-11ed-bf1a-a4bb6d3ed99c'),
('7c73d161-a954-11ed-bf1a-a4bb6d3ed99c', 'pedro care nalga', 'feo@gmail.com', 3012102542, 'iLikeZharick', 'Activo', '9ce9c148-a947-11ed-bf1a-a4bb6d3ed99c');



CREATE TABLE `store` (
  `id_store` char(36) NOT NULL PRIMARY KEY,
  `name_store` varchar(50) DEFAULT NULL,
  `location_store` varchar(50) DEFAULT NULL,
  `description_store` varchar(100) DEFAULT NULL,
  `id_emp_str` char(36) DEFAULT NULL,
  CONSTRAINT `store_employee` FOREIGN KEY (`id_emp_str`) REFERENCES `employee` (`id_employee`)

);
INSERT INTO `store` (`id_store`, `name_store`, `location_store`, `description_store`, `id_emp_str`) VALUES
('c29aa581-a954-11ed-bf1a-a4bb6d3ed99c', 'Salval', 'Calle 13', 'Los almacenes éxito se caracterizan por ser de gran superficie, en donde se ofrecen todo tipo de pro', '7c73d161-a954-11ed-bf1a-a4bb6d3ed99c'),
('c29ab306-a954-11ed-bf1a-a4bb6d3ed99c', 'Lion', 'Calle23 Carrera 30', 'Tienda cercana con espíritu, ambiente y sabor colombiano, que ofrece productos de calidad a precios ', NULL);



CREATE TABLE `category` (
  `id_category` char(36) NOT NULL PRIMARY KEY,
  `name_category` varchar(50) DEFAULT NULL,
  -- agrego la descripcion de la categoria
  `description_category` varchar(100) DEFAULT NULL,
  `id_categ_stor` char(36) NOT NULL,
  CONSTRAINT `id_category_store` FOREIGN KEY (`id_categ_stor`) REFERENCES `store` (`id_store`)

);
INSERT INTO `category` (`id_category`, `name_category`, `id_categ_stor`) VALUES
('ed74b478-a954-11ed-bf1a-a4bb6d3ed99c', 'Belleza', 'c29ab306-a954-11ed-bf1a-a4bb6d3ed99c'),
('ed74c171-a954-11ed-bf1a-a4bb6d3ed99c', 'Aseo', 'c29ab306-a954-11ed-bf1a-a4bb6d3ed99c');



CREATE TABLE `product` (
  `id_product` char(36) NOT NULL PRIMARY KEY,
  `name_product` varchar(50) DEFAULT NULL,
  `description_product` varchar(100) DEFAULT NULL,
  `availability_product` varchar(15) DEFAULT NULL,
  `amount_product` bigint(20) DEFAULT NULL,
  `id_product_category` char(36) NOT NULL,
  CONSTRAINT `id_product_category` FOREIGN KEY (`id_product_category`) REFERENCES `category` (`id_category`)

);
INSERT INTO `product` (`id_product`, `name_product`, `description_product`, `availability_product`, `amount_product`, `id_product_category`) VALUES
('22959be1-a955-11ed-bf1a-a4bb6d3ed99c', 'Esmalte', 'Barniz vítreo que por medio de la fusión se adhiere a la porcelana, loza, metales y otras sustancias', NULL, 25, 'ed74b478-a954-11ed-bf1a-a4bb6d3ed99c'),
('2295a92e-a955-11ed-bf1a-a4bb6d3ed99c', 'Jugo', 'Los jugos extraen el jugo de frutas o verduras frescas. El líquido contiene la mayoría de las vitami', NULL, 25, 'ed74b478-a954-11ed-bf1a-a4bb6d3ed99c');



CREATE TABLE `offer` (
  `id_offer` char(36) NOT NULL PRIMARY KEY,
  `name_offer` varchar(50) DEFAULT NULL,
  `description_offer` varchar(100) DEFAULT NULL,
  `amount_offer` bigint(20) DEFAULT NULL,
  `availability_product` varchar(15) DEFAULT NULL,
  `id_product_offer` varchar(36) NOT NULL,
  CONSTRAINT `id_product_offer` FOREIGN KEY (`id_product_offer`) REFERENCES `product` (`id_product`)

);
INSERT INTO `offer` (`id_offer`, `name_offer`, `description_offer`, `amount_offer`, `availability_product`, `id_product_offer`) VALUES
('5adb2cf0-a955-11ed-bf1a-a4bb6d3ed99c', 'Super promo', 'La promoción es una herramienta del marketing que busca interferir en el comportamiento y las actitu', 455, NULL, '2295a92e-a955-11ed-bf1a-a4bb6d3ed99c'),
('5adb3a85-a955-11ed-bf1a-a4bb6d3ed99c', 'Pague 1 Lleve 2', 'La promoción es una herramienta del marketing que busca interferir en el comportamiento y las actitu', 144, '121', '2295a92e-a955-11ed-bf1a-a4bb6d3ed99c');



CREATE TABLE `buys` (
  `id_buys` char(36) NOT NULL PRIMARY KEY,
  `id_cus_offer` char(36) DEFAULT NULL,
  `id_product_offer` char(36) DEFAULT NULL,
  `id_empl_offer` char(36) DEFAULT NULL,
  `id_str_offer` char(36) DEFAULT NULL,
  `id_customer` char(36) DEFAULT NULL,
  CONSTRAINT `id_customer_buys` FOREIGN KEY (`id_cus_offer`) REFERENCES `offer` (`id_offer`),
  CONSTRAINT `id_employee_buys` FOREIGN KEY (`id_empl_offer`) REFERENCES `employee` (`id_employee`),
  CONSTRAINT `id_product_buys` FOREIGN KEY (`id_product_offer`) REFERENCES `product` (`id_product`),
  CONSTRAINT `id_store_buys` FOREIGN KEY (`id_str_offer`) REFERENCES `store` (`id_store`),
  CONSTRAINT `id_customerr` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id_customer`)

);
INSERT INTO `buys` (`id_buys`, `id_cus_offer`, `id_product_offer`, `id_empl_offer`, `id_str_offer`) VALUES
('7a04052c-a955-11ed-bf1a-a4bb6d3ed99c', '5adb2cf0-a955-11ed-bf1a-a4bb6d3ed99c', '2295a92e-a955-11ed-bf1a-a4bb6d3ed99c', '7c73d161-a954-11ed-bf1a-a4bb6d3ed99c', 'c29ab306-a954-11ed-bf1a-a4bb6d3ed99c'),
('7a0411fa-a955-11ed-bf1a-a4bb6d3ed99c', '5adb3a85-a955-11ed-bf1a-a4bb6d3ed99c', '2295a92e-a955-11ed-bf1a-a4bb6d3ed99c', '7c73c27c-a954-11ed-bf1a-a4bb6d3ed99c', 'c29ab306-a954-11ed-bf1a-a4bb6d3ed99c');

