-- ========== table 6 > t6_containers_entity ==========
CREATE TABLE t6_containers_entity (
    id INT PRIMARY KEY,
    container_code VARCHAR(255),
    description VARCHAR(255)
);

-- ========== table 9 > t9_description_entity ==========
CREATE TABLE t9_description_entity (
    id INT PRIMARY KEY,
    description TEXT
);

-- ========== table 1 > t1_details_shipment_entity ==========
CREATE TABLE t1_details_shipment_entity (
    id INT PRIMARY KEY,
    vessel VARCHAR(255),
    voyage VARCHAR(255),
    mbl_code VARCHAR(255),
    pol VARCHAR(255),
    shipper VARCHAR(255),
    pod VARCHAR(255),
    consignee VARCHAR(255),
    qty_of_pkgs INT,
    goods VARCHAR(255),
    gross_weight VARCHAR(255)
);

-- ========== table 7 > t7_images_pathimg_entity ==========
CREATE TABLE t7_images_pathimg_entity (
    id INT PRIMARY KEY,
    pathimg VARCHAR(255),
    description TEXT
);

-- ========== table 8 > t8_images_group_entity ==========
CREATE TABLE t8_images_group_entity (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    images_pathimg_id INT, -- CLAVE FORÁNEA
    FOREIGN KEY (images_pathimg_id) REFERENCES t7_images_pathimg_entity (id)
);

-- ========== table 10 > t10_descriptions_group_entity ==========
CREATE TABLE t10_descriptions_group_entity (
    id INT PRIMARY KEY,
    description_id INT, -- CLAVE FORÁNEA que apunta a t9_description_entity.id
    title VARCHAR(255),
    FOREIGN KEY (description_id) REFERENCES t9_description_entity (id) ON DELETE CASCADE
);

-- ========== table 4 > t4_unstuffing_container_entity ==========
CREATE TABLE t4_unstuffing_container_entity (
    id INT PRIMARY KEY,
    description_id INT, -- CLAVE FORÁNEA que apunta a t9_description_entity.id
    details_shipment_id INT, -- CLAVE FORÁNEA
    FOREIGN KEY (description_id) REFERENCES t9_description_entity (id) ON DELETE CASCADE,
    FOREIGN KEY (details_shipment_id) REFERENCES t1_details_shipment_entity (id)
);

-- ========== table 5 > t5_pre_existing_damage_entity ==========
CREATE TABLE t5_pre_existing_damage_entity (
    id INT PRIMARY KEY,
    b_l_no VARCHAR(255),
    consignee VARCHAR(255),
    marks VARCHAR(255),
    qty_of_pkgs INT,
    goods VARCHAR(255),
    remarks TEXT,
    damage_description_id INT, -- CLAVE FORÁNEA
    details_shipment_id INT, -- CLAVE FORÁNEA
    FOREIGN KEY (damage_description_id) REFERENCES t9_description_entity (id),
    FOREIGN KEY (details_shipment_id) REFERENCES t1_details_shipment_entity (id)
);

-- ========== table 0 > t0_report_entity ==========
CREATE TABLE t0_report_entity (
    id INT PRIMARY KEY,
    header_name VARCHAR(255),
    header_address VARCHAR(255),
    header_mobile VARCHAR(255),
    header_email VARCHAR(255),
    -- date
    report_date DATE,
    -- cliente
    cliente_senores VARCHAR(255),
    cliente_empresa VARCHAR(255),
    cliente_deposito VARCHAR(255),
    cliente_postal VARCHAR(255),
    -- operador
    operador_area VARCHAR(255),
    operador_responsables1 VARCHAR(255),
    operador_responsables2 VARCHAR(255),
    -- report_mv
    report_mv VARCHAR(255),
    -- containers
    containers_reporte VARCHAR(255),
    containers_leyenda VARCHAR(255),
    container_id INT, -- CLAVE FORÁNEA
    containers_descripcion VARCHAR(255),
    containers_destino VARCHAR(255),
    -- footer
    report_description TEXT,
    report_note TEXT,
    details_shipment_id INT, -- CLAVE FORÁNEA
    -- 
    FOREIGN KEY (container_id) REFERENCES t6_containers_entity (id),
    FOREIGN KEY (details_shipment_id) REFERENCES t1_details_shipment_entity (id)
);

-- ========== table 2 > t2_relevant_times_entity ==========
CREATE TABLE t2_relevant_times_entity (
    id INT PRIMARY KEY,
    date DATE,
    container_id INT, -- CLAVE FORÁNEA
    qty_of_pkgs INT,
    start TIME,
    complete TIME,
    time_used_to_survey TIME,
    details_shipment_id INT, -- CLAVE FORÁNEA
    FOREIGN KEY (container_id) REFERENCES t6_containers_entity (id),
    FOREIGN KEY (details_shipment_id) REFERENCES t1_details_shipment_entity (id)
);

-- ========== table 3 > t3_securing_seals_entity ==========
CREATE TABLE t3_securing_seals_entity (
    id INT PRIMARY KEY,
    container_id INT, -- CLAVE FORÁNEA
    type VARCHAR(255),
    wwas_safety_seals VARCHAR(255),
    argentinean_customs_seal VARCHAR(255),
    others VARCHAR(255),
    details_shipment_id INT, -- CLAVE FORÁNEA
    FOREIGN KEY (container_id) REFERENCES t6_containers_entity (id),
    FOREIGN KEY (details_shipment_id) REFERENCES t1_details_shipment_entity (id)
);
