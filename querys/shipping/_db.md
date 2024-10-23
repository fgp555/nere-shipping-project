```bash

# ========== table 0 > 0_report ==========
id: 1
header_name: "FLAVIO A. PREZIOSA"
header_address: "Habana 2874 - 1419 - Buenos Aires - Argentina"
header_mobile: "M +54 911 6677 2741"
header_email: "E flaviopreziosa@gmail.com / flaviopreziosa@fibertel.com.ar"

report_date: "Buenos Aires, 30th September 2024"

cliente_senores: "Messrs"
cliente_empresa: "SACO Shipping GmbH"
cliente_deposito: "Wollkammereistr 1"
cliente_postal: "D-21107 Hamburg"

operador_area: "Export & Import operations"
operador_responsables1: "Arne Schulte / Lars Reil"
operador_responsables2: "Gisel Gimenez / Florencia Bavaro"

report_mv: "m.v. XIN CHANG SHA COMPLETAR"

containers_reporte: "¨IMPORT CONTAINERS UNSTUFFING REPORT¨"
containers_leyenda: "GROUPAGE CONTAINERS"
container_code: [1,2] # (relacion con containers > container_code)
containers_descripcion: "1 x 40-ft non-operating reefer container & 1 x 40-ft DV container stuffed with consolidated cargo"
containers_destino: "Buenos Aires - Argentina"

report_description: "In compliance with the instructions given by Messrs. ¨SACO Shipping GmbH¨ - Hamburg, the acting cargo surveyor of this bureau attended at the customs bonded warehouse (CFS) ¨Gemez S.A.¨, Buenos Aires - Argentina, on 25th September 2024 with the purpose of monitoring the whole stripping operation of the ISO (45G1 & 45R1) multi-modal shipping containers."

report_note: "given the great amount of pictures taken during this survey, few of them are shown just for illustrative purposes."

details_shipment_mbl: 1 # (relation with 1_details_shipment > MBL)

# ========== table 1 > 1_details_shipment ==========
id: 1
vessel: "XIN CHANG SHA"
voyage: "402S"
mbl_code: "ONEYHAME90065700"
pol: "Hamburg, Germany"
shipper: "SACO Shipping GmbH"
pod: "Buenos Aires, Argentina"
consignee: "SACO Shipping S.A."
qty_of_pkgs: 94
goods: "Consolidated cargo"
gross_weight: "38,068.90 kg."

# ========== table 2 > 2_relevant_times ==========
id: 1
date: "25-sep-24"
container_code: 1 # (relation with containers > container_code)
qty_of_pkgs: 59
start: null
complete: null
time_used_to_survey: null
details_shipment_mbl: 1 # (relation with 1_details_shipment > MBL)

# ========== table 3 > 3_securing_seals ==========
id: 1
container_code: 1 # (relation with containers > container_code)
type: "RF"
wwas_safety_seals: "01-0265193"
argentinean_customs_seal: "None"
others: "None"
details_shipment_mbl: 1 # (relation with 1_details_shipment > MBL)

# ========== table 4 > 4_unstuffing_container ==========
id: 1
description: "As soon as the doors of the containers were unsealed/opened, the cargo was observed secured and visually in overall sound condition"
images: [1,2,3]
details_shipment_mbl: 1 # (relation with 1_details_shipment > MBL)

# ========== table 5 > 5pre_existing_damage ==========
id: 1
b_l_no: "BUE238550"
consignee: "BIO ABA SA"
marks: "29119880"
qty_of_pkgs: 2
goods: "Peptones"
remarks: "1 pallet shrink-wrap film stretch torn off + torn paper bags"

damage_description: 1 # (relation container_code > description)
details_shipment_mbl: 1 # (relation with 1_details_shipment > MBL)

# ========== table 6 > containers ==========
id: 1
container_code: "FSCU5726799"
descripton: "FSCU5726799 x 40-ft non-operating reefer container"

# ========== table 7 > images_pathImg ==========
id: 1
pathimg: "/upload/images1.jpg"
description: "description of images"

# ========== table 8 > images_group ==========
id: 1
images_pathimg: [1,2,3] # (relation with images_pathImg > pathImg)
title?: "images of containers"
description: "description of container 123"

# ========== table 9 > description ==========
id: 1
description: "this is a description"

# ========== table 10 > descriptions_group ==========
id: 1
descriptions: [1,2,3]  # (relation with description > id)
title: "title demo 1"
