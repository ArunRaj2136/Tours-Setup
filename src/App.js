import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setloading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchingTours = async () => {
    setloading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchingTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  } else {
    return (
      <main>
        <Tours tourData={tours} />;
      </main>
    );
  }
}

export default App;
