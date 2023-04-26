import React from 'react';
import DisplayWidget from 'src/widgets/DisplayWidget';

export default function Docs() {
  return (
    <div id="docs">
      <div className="bg-gray-800 py-40"></div>
      <div className="c-container-sm space-y-4 py-20">
        <h2 className="c-title c-heading-text text-4xl">
          Introduction to Flexbox
        </h2>
        <p>
          CSS is comprised of many different layout algorithms, known officially
          as “layout modes”. Each layout mode is its own little sub-language
          within CSS. The default layout mode is Flow layout, but we can opt in
          to Flexbox by changing the display property on the parent container:
        </p>
        <DisplayWidget />
      </div>
    </div>
  );
}
