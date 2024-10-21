```bash

# ========== table 0 > 0_report ==========
id: 1
header_name: FLAVIO A. PREZIOSA
header_address: Habana 2874 - 1419 - Buenos Aires - Argentina
header_mobile: M +54 911 6677 2741
header_email: E flaviopreziosa@gmail.com / flaviopreziosa@fibertel.com.ar

report_date: Buenos Aires, 30th September 2024

cliente_Senores: Messrs
cliente_empresa: SACO Shipping GmbH
cliente_deposito: Wollkammereistr 1
cliente_postal: D-21107 Hamburg

operador_area: Export & Import operations
operador_responsables1: Arne Schulte / Lars Reil
operador_responsables2: Gisel Gimenez / Florencia Bavaro

report_mv: m.v. “XIN CHANG SHA COMPLETAR”

containers_reporte: ¨IMPORT CONTAINERS UNSTUFFING REPORT¨
containers_leyenda: GROUPAGE CONTAINERS
container_code: [1,2] (relacion con containers > container_code)
containers_descripcion: 1 x 40-ft non-operating reefer container & 1 x 40-ft DV container stuffed with consolidated cargo
containers_destino: Buenos Aires - Argentina

report_description: In compliance with the instructions given by Messrs. ¨SACO Shipping GmbH¨ - Hamburg, the acting cargo surveyor of this bureau attended at the customs bonded warehouse (CFS) ¨Gemez S.A.¨, Buenos Aires - Argentina, on 25th September 2024 with the purpose of monitoring the whole stripping operation of the ISO (45G1 & 45R1) multi-modal shipping containers.

report_note: given the great amount of pictures taken during this survey, few of them are shown just for illustrative purposes.

details_shipment_MBL: 1 (relation with 1_details_shipment > MBL)

# ========== table 1 > 1_details_shipment ==========
id: 1
Vessel: XIN CHANG SHA
Voyage: 402S
MBL_code: ONEYHAME90065700
POL: Hamburg, Germany
Shipper: SACO Shipping GmbH
POD: Buenos Aires, Argentina
Consignee: SACO Shipping S.A.
Qty_of_pkgs: 94
Goods: Consolidated cargo
Gross weight: 38,068.90 kg.

# ========== table 2 > 2_relevant_times ==========
id: 1
Date: 25-sep-24
Containers_num: FSCU5726799
Qty_of_pkgs: 59
Start: null
Complete: null
Time_used_to_survey: null
details_shipment_MBL: 1 (relation with 1_details_shipment > MBL)

# ========== table 3 > 3_securing_seals ==========
id: 1
Containers_num: FSCU5726799
Type: RF
WWAs_safety_seals: 01-0265193
Argentinean_customs_seal: None
Others: None
details_shipment_MBL: 1 (relation with 1_details_shipment > MBL)

# ========== table 4 > 4_unstuffing_container ==========
id: 1
description: As soon as the doors of the containers were unsealed/opened, the cargo was observed secured and visually in overall sound condition;
images: [1,2,3]
details_shipment_MBL: 1 (relation with 1_details_shipment > MBL)

# ========== table 5 > 5pre_existing_damage ==========
id: 1
B_L_No: BUE238550
Consignee: BIO ABA SA
Marks: 29119880
Qty_of_pkgs: 2
Goods: Peptones
Remarks: 1 pallet shrink-wrap film stretch torn off + torn paper bags

damage_description: 1 (relation: container_code > description)
details_shipment_MBL: 1 (relation with 1_details_shipment > MBL)

