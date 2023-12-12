import React, { useState } from "react";
// import bg_cover from "./images/unsplash_bg.jpg"
import { Card, Navbar } from "./views";

function App() {

    const [weatherForecast, setWeatherForecast] = useState(null);
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

  
    return (
        <section
          // style={{ 
          //   backgroundImage: `url(${bg_cover})`,
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'bottom',

          // }}
          className="xs:p-12 sm:p-16 lg:p-20 w-full bg-gradient-to-r from-gray-800 via-20% via-orange-400 to-slate-600 "
        >
          <div className="flex flex-col min-h-screen max-w-[1490px] mx-auto xs:border-2 bg-slate-600/70  text-slate-200 rounded-2xl xs:border-orange-500 px-[28px] pb-[120px]" 
  
          >
            <Navbar
                  query={query}
                  setQuery={setQuery}
                  setWeatherForecast={setWeatherForecast}
                  setError={setError}
                  setLoading={setLoading}
                  />
              <Card
                  weatherForecast={weatherForecast}
                  theError={error}
                  loading={loading}
              />
          </div>
        </section>
    )
}

export default App;

