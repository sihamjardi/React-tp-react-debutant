import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function TemperatureConvertor() {
  const [temperature, setTemperature] = useState({ c: "", f: "" });

  const handleCelsiusChange = (value) => {
    const f = value ? (value * 9/5 + 32).toFixed(2) : "";
    setTemperature({ c: value, f });
  };

  const handleFahrenheitChange = (value) => {
    const c = value ? ((value - 32) * 5/9).toFixed(2) : "";
    setTemperature({ c, f: value });
  };

  return (
    <div>
      <TemperatureInput label="Celsius" value={temperature.c} onChange={handleCelsiusChange} />
      <TemperatureInput label="Fahrenheit" value={temperature.f} onChange={handleFahrenheitChange} />
    </div>
  );
}

export default TemperatureConvertor;
