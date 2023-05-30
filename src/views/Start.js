const First = () => {
  window.yieldwrapper.cmd.push(() => {
    window.yieldwrapper.registerSlot({
      element: 'ad-panorama',
      type: 'panorama',
    });

    window.yieldwrapper.registerSlot({
      element: 'ad-panorama',
      type: 'panorama',
    });

    window.yieldwrapper.registerSlot({
      element: 'ad-infeed',
      type: 'infeed',
      force: 'panorama',
    });
  });

  return (
    <div>
      <h3>Current page: START</h3>

      <div id="ad-panorama" style={{ minHeight: '180px' }}></div>
      <div id="ad-infeed" style={{ minHeight: '300px' }} />
      <div id="ad-panorama" style={{ minHeight: '180px' }} />
    </div>
  );
};

export default First;
