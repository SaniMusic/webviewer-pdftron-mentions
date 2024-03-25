'use strict'
import WebViewer from '@pdftron/webviewer';
import { useEffect, useRef } from 'react';

import './App.css';

const App = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer.WebComponent({
      path: '/webviewer/lib',
        initialDoc: '/files/PDFTRON_about.pdf',
        licenseKey: 'your_license_key'  // sign up to get a free trial key at https://dev.apryse.com
        // @ts-ignore
    }, viewer.current)
      .then(instance => {
        const transformedUserArray = [
          {
            id: '1',
            name: 'Sani Music',
            email: 'sani.music@test.com'
          },
          {
            id: '2',
            name: 'Patric Ronge',
            email: 'patricRonge@test.com'
          }
        ]
  
        instance.UI.mentions.setUserData(transformedUserArray);
        const { UI, Core } = instance;
        const { documentViewer, annotationManager, Tools, Annotations } = Core;
        // call methods from UI, Core, documentViewer and annotationManager as needed
    
        documentViewer.addEventListener('documentLoaded', () => {
          // call methods relating to the loaded document
        });
    
        instance.UI.loadDocument('https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf');
      })
  }, []);

  return (
    <div className="App">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
