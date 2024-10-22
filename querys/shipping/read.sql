-- ========== table 0 > t0_report_entity ==========
SELECT r.id, r.header_name, r.header_address, r.header_mobile, r.header_email, 
       r.report_date, r.cliente_senores, r.cliente_empresa, r.cliente_deposito, r.cliente_postal, 
       r.operador_area, r.operador_responsables1, r.operador_responsables2, 
       r.report_mv, r.containers_reporte, r.containers_leyenda, 
       c.container_code, r.containers_descripcion, r.containers_destino, 
       r.report_description, r.report_note, ds.vessel, ds.voyage
FROM t0_report_entity r
JOIN t6_containers_entity c ON r.container_id = c.id
JOIN t1_details_shipment_entity ds ON r.details_shipment_id = ds.id;

-- ========== table 1 > t1_details_shipment_entity ==========
SELECT id, vessel, voyage, mbl_code, pol, shipper, pod, consignee, qty_of_pkgs, goods, gross_weight
FROM t1_details_shipment_entity;

-- ========== table 2 > t2_relevant_times_entity ==========
SELECT rt.id, rt.date, c.container_code, rt.qty_of_pkgs, rt.start, rt.complete, rt.time_used_to_survey, ds.vessel, ds.voyage
FROM t2_relevant_times_entity rt
JOIN t6_containers_entity c ON rt.container_id = c.id
JOIN t1_details_shipment_entity ds ON rt.details_shipment_id = ds.id;

-- ========== table 3 > t3_securing_seals_entity ==========
SELECT ss.id, c.container_code, ss.type, ss.wwas_safety_seals, ss.argentinean_customs_seal, ss.others, ds.vessel, ds.voyage
FROM t3_securing_seals_entity ss
JOIN t6_containers_entity c ON ss.container_id = c.id
JOIN t1_details_shipment_entity ds ON ss.details_shipment_id = ds.id;

-- ========== table 4 > t4_unstuffing_container_entity ==========
SELECT uc.id, d.description, ds.vessel, ds.voyage
FROM t4_unstuffing_container_entity uc
JOIN t9_description_entity d ON uc.description_id = d.id
JOIN t1_details_shipment_entity ds ON uc.details_shipment_id = ds.id;

-- ========== table 5 > t5_pre_existing_damage_entity ==========
SELECT ped.id, ped.b_l_no, ped.consignee, ped.marks, ped.qty_of_pkgs, ped.goods, ped.remarks, d.description, ds.vessel, ds.voyage
FROM t5_pre_existing_damage_entity ped
JOIN t9_description_entity d ON ped.damage_description_id = d.id
JOIN t1_details_shipment_entity ds ON ped.details_shipment_id = ds.id;

-- ========== table 6 > t6_containers_entity ==========
SELECT id, container_code, description
FROM t6_containers_entity;

-- ========== table 7 > t7_images_pathimg_entity ==========
SELECT id, pathimg, description
FROM t7_images_pathimg_entity;

-- ========== table 8 > t8_images_group_entity ==========
SELECT ig.id, ig.title, ig.description, ip.pathimg
FROM t8_images_group_entity ig
JOIN t7_images_pathimg_entity ip ON ig.images_pathimg_id = ip.id;

-- ========== table 9 > t9_description_entity ==========
SELECT id, description
FROM t9_description_entity;

-- ========== table 10 > t10_descriptions_group_entity ==========
SELECT dg.id, dg.title, d.description
FROM t10_descriptions_group_entity dg
JOIN t9_description_entity d ON dg.description_id = d.id;
