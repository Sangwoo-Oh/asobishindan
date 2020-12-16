export interface ResponseModel {
  /*
    code: number;
    message: string;
    data: {
        pref: string;
        city: string;
        town: string;
        address: string;
        fullAddress: string;
    };
  */
  id: number;
  label: string;
  epi_label_ph: string;
  epi_flag_ph: number;
  epi_label_cl: string;
  epi_flag_cl: number;
  epi_label_sc: string;
  epi_flag_sc: number;
  epi_label_bz: string;
  epi_flag_bz: number;
  epi_label_ac: string;
  epi_flag_ac: number;
}
