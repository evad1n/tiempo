import React, { useCallback, useEffect, useState } from 'react';

import { FlagIcon, IFlag, IFlagScale } from 'src/icons/flag-icon/FlagIcon';
import { ICountryOption, IGetCountriesResponse } from 'src/types/ICountry';
import { prepCountryOptions } from 'src/utils/prepCountryOptions';

export const useCountryOptions = ({
  dashboardUrl,
  iconScale = 'small',
}: {
  dashboardUrl: string | null;
  iconScale?: IFlagScale;
}) => {
  const [countryOptions, setCountryOptions] = useState<ICountryOption[]>([]);

  const requestCountries = useCallback(async () => {
    const response = await fetch(`${dashboardUrl}/api/address/getCountries`);
    if (response.ok) {
      const json: IGetCountriesResponse = await response.json();
      const options = prepCountryOptions({ json });
      const countries = options.map(option => ({
        ...option,
        icon: <FlagIcon code={option.code as IFlag} iconScale={iconScale} />,
      }));
      setCountryOptions(countries);
    }
  }, [dashboardUrl, iconScale]);

  useEffect(() => {
    requestCountries();
  }, [requestCountries]);

  return countryOptions;
};
