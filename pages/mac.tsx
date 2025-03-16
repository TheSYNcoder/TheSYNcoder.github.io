import Background from "../components/mac/background";
import Banner from "../components/mac/banner";
import DefaultContextMenu from "../components/mac/defaultContextMenu";
import Dock from "../components/mac/dock";
import { Folders } from "../components/mac/folders";
import SpotLight from "../components/mac/spotlight";
import Header from "../components/mac/windowHeader";
import { WindowStacks } from "../components/mac/windowStack";
import ContextMenu from "../hooks/useContextMenu";
import Store from "../lib/store";


const Mac = () => {

   

    return (
        <Store>
          <Header />          
          <WindowStacks />   
          <Folders />
          <Background />
          <ContextMenu menu={ <DefaultContextMenu />} />
          <SpotLight />
          <Dock/>
          <Banner />
        </Store>
    )
  }

export default Mac;