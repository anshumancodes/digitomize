import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
function valuetext(value) {
  return `${value} hr`;
}

export default function CustomSlider({ setRange, maxValue }) {
  const [value, setValue] = React.useState([0, maxValue]);
  React.useEffect(() => {
    setValue([0, maxValue]);
    setRange([0, maxValue]);
  }, [maxValue]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setRange(newValue);
  };
  function convertMinutesToHours(minutes) {
    if (minutes <= 120) {
        return minutes
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return hours + remainingMinutes ;
    }
}
function displayHourMin(Time) {
 
  const hours = Math.floor(Time / 60);
  const remainingMinutes = Time % 60;
  return hours + "hr " + remainingMinutes + "min";
  
  
}


// console.log(value)



  return (
    maxValue > 0 && (
      <div className="flex max-lg:flex-col lg:flex-row justify-center  items-center lg:mr-5 ">
        <h2 className="text-1xl mr-4 mb-2 mt-5 md:mt-0">Duration (min):</h2>
        <Box
          className="px-6 py-0 lg:py-3 rounded-lg flex flex-col justify-center items-center bg-filter  "
          sx={{ width: 300 }}
        >
          <div> {valuetext(displayHourMin(value[0]))} to {valuetext(displayHourMin(value[1]))}</div>
          
          <Slider
          step={15}
          marks={true}
           size="small"
            max={convertMinutesToHours(maxValue)}
            
            getAriaLabel={() => "duration in hour mins"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            getAriaValueText={valuetext}

          />
         
          
        </Box>
      </div>
    )
  );
}
