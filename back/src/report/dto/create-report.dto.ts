export class CreateReportDto {
    t0_header: {
      header_name: string;
      header_address: string;
      header_mobile: string;
      header_email: string;
      container_code: string[];
    };
    t1_details_shipment: {
      vessel: string;
      voyage: string;
      mbl_code: string;
      pol: string;
    };
    T2_relevant_times: {
      date: string;
      container_code: string;
      qty_of_pkgs: number;
    }[];
    t3_securing_seals: {
      container_code: string;
      type: string;
      wwas_safety_seals: string;
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
  