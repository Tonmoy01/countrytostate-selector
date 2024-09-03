import React, { useState, useEffect } from "react";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);

  const countries = [
    {
      id: 1,
      name: "Bangladesh",
      cities: ["Manikganj", "Dhaka", "Chittagong"],
    },
    {
      id: 2,
      name: "India",
      cities: ["Mumbai", "Delhi", "Kolkata"],
    },
    {
      id: 3,
      name: "Pakistan",
      cities: ["Karachi", "Islamabad", "Punjub"],
    },
  ];

  const handleChangeCountry = (e) => {
    const selectedCountryName = e.target.value;
    setSelectedCountry(selectedCountryName);

    const selectedCountry = countries.find(
      (c) => c.name === selectedCountryName
    );

    const citiesList = selectedCountry ? selectedCountry.cities : [];

    setCities(citiesList);
    setSelectedCity("");

    console.log(selectedCountry, selectedCountry.cities);
  };

  const handleChangeCity = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
    console.log(selectedCity);
  };

  useEffect(() => {
    if (countries.length > 0) {
      setSelectedCountry(countries[0].name);
      setCities(countries[0].cities);
    }
  }, []);

  return (
    <div className="App">
      <select value={selectedCountry} onChange={handleChangeCountry}>
        {countries.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <select value={selectedCity} onChange={handleChangeCity}>
        {cities.map((city, idx) => (
          <option key={idx} value={city}>
            {city}
          </option>
        ))}
      </select>

    </div>
  );
};

export default App;
