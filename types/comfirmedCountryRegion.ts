interface comfirmedCountryRegion {
  /* @example Maharashtra */
  provinceState?: null | string;
  /*
   *   @description Unique country name. This is the primary domain.
   *   @example South Africa */
  countryRegion: string;
  /*  @example 1628788890000 */
  lastUpdate?: number;
  /*
   *   @alias latitude
   *   @example India */
  lat: number;
  /*
   *   @alias longitude
   *   @example India */
  long: number;
  /*  @example 2554240 */
  confirmed?: number;
  /*  @example 75774 */
  deaths?: number;
  /*  @example null */
  recovered?: null | number;
  /*  @example null */
  active?: null | number;
  /*  @example null */
  admin2?: null | number;
  /*  @example null */
  fips?: null | number;
  /*  @example Minas Gerais, Brazil */
  combinedKey?: string;
  /*  @example 4306.68760345238 */
  incidentRate?: string;
  /*  @example India */
  peopleTested?: null | number;
  /*  @example India */
  peopleHospitalized?: null | number;
  /*  @example 710 */
  uid: number;
  /*  @example ZAF */
  iso3?: string;
  /*  @example 317435 */
  cases28Days?: number;
  /*  @example 10179 */
  deaths28Days?: number;
  /*  
  @alias country code
  @example ZA */
  iso2?: string;
}
