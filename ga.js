// ga.js
// Google Analytics gtag.js snippet

(function() {
  // Replace 'YOUR_TRACKING_ID' with your actual GA ID
  const GA_TRACKING_ID = 'G-X63Y4RY3RJ';

  // Load the gtag.js library
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID);
})();
