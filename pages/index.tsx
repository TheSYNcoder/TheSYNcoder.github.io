import React from 'react';
import Store from "./../lib/store";
import Home from "./_home";
import Head from 'next/head';


const App = ()  => {  

    return (
      <Store>        
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>Shuvayan's website</title>
            <meta name="description" content={"This is the personal website of Shuvayan Ghosh Dastidar. The portfolio website is made using ReactJs and tailwindcss."} />
          </Head >          
          <Home />        
      </Store>
      
    );
  }
  
  export default App;