import { useState, useEffect } from 'react';

const Second = () => {
  const [dynamic, setDynamic] = useState([]);

  window.yieldwrapper.cmd.push(() => {
    window.yieldwrapper.registerSlot({
      element: 'ad-panorama',
    });
  });

  useEffect(() => {
    if (dynamic.length) {
      window.yieldwrapper.cmd.push(() => {
        window.yieldwrapper.registerSlot({
          element: 'ad-panorama',
        });
      });
    }
  }, [dynamic]);

  return (
    <div>
      <h3>Current page: DYNAMIC</h3>

      <div id="ad-panorama" />

      <button onClick={() => setDynamic([...dynamic, 'AD'])}>MORE</button>

      {dynamic.map((label, key) => (
        <div key={key}>
          <span>{label}</span>
          <div id="ad-panorama" />
        </div>
      ))}
    </div>
  );
};

export default Second;
