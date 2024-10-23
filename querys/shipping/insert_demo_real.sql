-- ================= Insert data =================

-- ========== table 6 > t6_containers_entity ==========
INSERT INTO t6_containers_entity (id, container_code, description)
VALUES
(1, 'FSCU5726799', 'FSCU5726799 x 40-ft non-operating reefer container'),
(2, 'AnotherContainerCode', 'Another 40-ft DV container');

-- ========== table 9 > t9_description_entity ==========
INSERT INTO t9_description_entity (id, description)
VALUES
(1, 'this is a description'),
(2, 'Another description'),
(3, 'Yet another description');

-- ========== table 1 > t1_details_shipment_entity ==========
INSERT INTO t1_details_shipment_entity (id, vessel, voyage, mbl_code, pol, shipper, pod, consignee, qty_of_pkgs, goods, gross_weight)
VALUES
(1, 'XIN CHANG SHA', '402S', 'ONEYHAME90065700', 'Hamburg, Germany', 'SACO Shipping GmbH', 'Buenos Aires, Argentina', 'SACO Shipping S.A.', 94, 'Consolidated cargo', '38,068.90 kg.');

-- ========== table 7 > t7_images_pathimg_entity ==========
INSERT INTO t7_images_pathimg_entity (id, pathimg, description)
VALUES
(1, '/upload/images1.jpg', 'description of images'),
(2, '/upload/images2.jpg', 'another description of images'),
(3, '/upload/images3.jpg', 'yet another description of images');

-- ========== table 8 > t8_images_group_entity ==========
INSERT INTO t8_images_group_entity (id, title, description, images_pathimg_id)
VALUES
(1, 'images of containers', 'description of container 123', 1),
(2, 'other images', 'other container description', 2),
(3, 'more images', 'more container description', 3);

-- ========== table 10 > t10_descriptions_group_entity ==========
INSERT INTO t10_descriptions_group_entity (id, description_id, title)
VALUES
(1, 1, 'title demo 1'),
(2, 2, 'title demo 2'),
(3, 3, 'title demo 3');

-- ========== table 0 > t0_report_entity ==========
INSERT INTO t0_report_entity (id, header_name, header_address, header_mobile, header_email, report_date, cliente_senores, cliente_empresa, cliente_deposito, cliente_postal, operador_area, operador_responsables1, operador_responsables2, report_mv, containers_reporte, containers_leyenda, container_id, containers_descripcion, containers_destino, report_description, report_note, details_shipment_id)
VALUES
(1, 'FLAVIO A. PREZIOSA', 'Habana 2874 - 1419 - Buenos Aires - Argentina', 'M +54 911 6677 2741', 'flaviopreziosa@gmail.com / flaviopreziosa@fibertel.com.ar', '2024-09-30', 'Messrs', 'SACO Shipping GmbH', 'Wollkammereistr 1', 'D-21107 Hamburg', 'Export & Import operations', 'Arne Schulte / Lars Reil', 'Gisel Gimenez / Florencia Bavaro', 'm.v. XIN CHANG SHA COMPLETAR', '¨IMPORT CONTAINERS UNSTUFFING REPORT¨', 'GROUPAGE CONTAINERS', 1, '1 x 40-ft non-operating reefer container & 1 x 40-ft DV container stuffed with consolidated cargo', 'Buenos Aires - Argentina', 'In compliance with the instructions given by Messrs. ¨SACO Shipping GmbH¨ - Hamburg, the acting cargo surveyor of this bureau attended at the customs bonded warehouse (CFS) ¨Gemez S.A.¨, Buenos Aires - Argentina, on 25th September 2024 with the purpose of monitoring the whole stripping operation of the ISO (45G1 & 45R1) multi-modal shipping containers.', 'given the great amount of pictures taken during this survey, few of them are shown just for illustrative purposes.', 1);

-- ========== table 2 > t2_relevant_times_entity ==========
INSERT INTO t2_relevant_times_entity (id, date, container_id, qty_of_pkgs, start, complete, time_used_to_survey, details_shipment_id)
VALUES
(1, '2024-09-25', 1, 59, NULL, NULL, NULL, 1);

-- ========== table 3 > t3_securing_seals_entity ==========
INSERT INTO t3_securing_seals_entity (id, container_id, type, wwas_safety_seals, argentinean_customs_seal, others, details_shipment_id)
VALUES
(1, 1, 'RF', '01-0265193', 'None', 'None', 1);

-- ========== table 4 > t4_unstuffing_container_entity ==========
INSERT INTO t4_unstuffing_container_entity (id, description_id, details_shipment_id)
VALUES
(1, 1, 1);

-- ========== table 5 > t5_pre_existing_damage_entity ==========
INSERT INTO t5_pre_existing_damage_entity (id, b_l_no, consignee, marks, qty_of_pkgs, goods, remarks, damage_description_id, details_shipment_id)
VALUES
(1, 'BUE238550', 'BIO ABA SA', '29119880', 2, 'Peptones', '1 pallet shrink-wrap film stretch torn off + torn paper bags', 1, 1);
