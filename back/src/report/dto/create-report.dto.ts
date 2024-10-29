export class CreateReportDto {
  t0_header: {
    header_name: string;
    header_address: string;
    header_mobile: string;
    header_email: string;
    container_code: string[];
    report_date: string;
    cliente_senores: string;
    cliente_empresa: string;
    cliente_deposito: string;
    cliente_postal: string;
    operador_area: string;
    operador_responsables1: string;
    operador_responsables2: string;
    report_mv: string;
    containers_reporte: string;
    containers_leyenda: string;
    containers_code: string[];
    containers_descripcion: string;
    containers_destino: string;
    report_description: string;
    report_note: string;
  };
  t1_details_shipment: {
    vessel: string;
    voyage: string;
    mbl_code: string;
    pol: string;
    shipper: string;
    pod: string;
    consignee: string;
    qty_of_pkgs: number;
    goods: string;
    gross_weight: string;
  };
  T2_relevant_times: {
    date: string;
    container_code: string;
    qty_of_pkgs: number;
    start: string;
    complete: string;
    time_used_to_survey: string;
  }[];
  t3_securing_seals: {
    container_code: string;
    type: string;
    wwas_safety_seals: string;
    argentinean_customs_seal: string;
    others: string;
  }[];
  t4_unstuffing_container: {
    notes: string[];
    images: { path: string; description: string }[];
    foot_note: string;
  };
  t5_pre_existing_damage: {
    notes: string[];
    damages: {
      title: string;
      b_l_no: string;
      consignee: string;
      marks: string;
      qty_of_pkgs: number;
      goods: string;
      remarks: string;
      images: { path: string; description: string }[];
    }[];
  };
  t6_the_weather: {
    notes: string[];
    temperature: number;
    humidity: number;
  };
  t7_footer: {
    notes: string[];
  };
}
