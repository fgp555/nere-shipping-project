-- ========== table 0 > t0_report ==========
INSERT INTO report (id, header_name, header_address, header_mobile, header_email, report_date, cliente_senores, cliente_empresa, cliente_deposito, cliente_postal, operador_area, operador_responsables1, operador_responsables2, report_mv, containers_reporte, containers_leyenda, container_id, containers_descripcion, containers_destino, report_description, report_note, details_shipment_id)
VALUES
(1, 'John Doe', '123 Street', '123-456-7890', 'john.doe@example.com', '2024-10-22', 'Senor X', 'Empresa Y', 'Deposito Z', '12345', 'Area A', 'Responsible 1', 'Responsible 2', 'MV 123', 'Report 1', 'Leyenda 1', 1, 'Description 1', 'Destino 1', 'Description of the report', 'Note 1', 1);

-- ========== table 1 > t1_details_shipment ==========
INSERT INTO details_shipment (id, vessel, voyage, mbl_code, pol, shipper, pod, consignee, qty_of_pkgs, goods, gross_weight)
VALUES
(1, 'Vessel 1', 'Voyage 1', 'MBL123', 'POL1', 'Shipper 1', 'POD1', 'Consignee 1', 10, 'Goods 1', '1000kg');

-- ========== table 2 > t2_relevant_times ==========
INSERT INTO relevant_times (id, date, container_id, qty_of_pkgs, start, complete, time_used_to_survey, details_shipment_id)
VALUES
(1, '2024-10-22', 1, 10, '08:00:00', '10:00:00', '02:00:00', 1);

-- ========== table 3 > t3_securing_seals ==========
INSERT INTO securing_seals (id, container_id, type, wwas_safety_seals, argentinean_customs_seal, others, details_shipment_id)
VALUES
(1, 1, 'Type 1', 'Seal 1', 'Customs Seal 1', 'Others 1', 1);

-- ========== table 4 > t4_unstuffing_container ==========
INSERT INTO unstuffing_container (id, description_id, details_shipment_id)
VALUES
(1, 1, 1);

-- ========== table 5 > t5_pre_existing_damage ==========
INSERT INTO pre_existing_damage (id, b_l_no, consignee, marks, qty_of_pkgs, goods, remarks, damage_description_id, details_shipment_id)
VALUES
(1, 'BL123', 'Consignee 1', 'Marks 1', 10, 'Goods 1', 'Remarks about damage', 1, 1);

-- ========== table 6 > t6_containers ==========
INSERT INTO containers (id, container_code, description)
VALUES
(1, 'Container1', 'Description of Container 1');

-- ========== table 7 > t7_images_pathimg ==========
INSERT INTO images_pathimg (id, pathimg, description)
VALUES
(1, '/path/to/image1.jpg', 'Description of Image 1');

-- ========== table 8 > t8_images_group ==========
INSERT INTO images_group (id, title, description, images_pathimg_id)
VALUES
(1, 'Image Group 1', 'Description of Image Group 1', 1);

-- ========== table 9 > t9_description ==========
INSERT INTO description (id, description)
VALUES
(1, 'Description text here');

-- ========== table 10 > t10_descriptions_group ==========
INSERT INTO descriptions_group (id, description_id, title)
VALUES
(1, 1, 'Descriptions Group Title 1');
