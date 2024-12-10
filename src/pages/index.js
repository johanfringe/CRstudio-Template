import React from 'react';

const IndexPage = () => {
  return (
    <div>
      {/* Testcomponent met Tailwind-klassen */}
      <div className="bg-red-500 text-white p-4">
        Tailwind werkt correct!
      </div>
      
      {/* Welkomsttekst */}
      <div className="mt-4">
        Welkom op de minimalistische site!
      </div>
    </div>
  );
};

export default IndexPage;
