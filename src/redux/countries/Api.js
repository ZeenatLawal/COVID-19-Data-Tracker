const getContinent = async () => {
  const request = await fetch('https://covid-api.mmediagroup.fr/v1/cases?continent=africa');
  const countries = await request.json();
  return countries;
};

const getCountry = async (country) => {
  const request = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`);
  const result = await request.json();
  return result;
};

export { getContinent, getCountry };
