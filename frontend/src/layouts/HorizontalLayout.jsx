// ** React Imports
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Routes as metaData } from '../Router/routes';
import Footer from '../components/template/Footer';

// ** import components
// import Navbar from '@components/Navbar';

function VerticalLayout() {
  // ** get location
  const location = useLocation(); // it's really important for get updated metaData

  // ** States
  const [meta, setMeta] = useState({});

  const handleSetMeta = () => {
    const matchedItems = metaData.filter(
      (item) => location.pathname === item.path,
    );
    if (matchedItems.length > 0) {
      const { meta } = matchedItems[0];
      setMeta(meta);
    } else {
      setMeta({}); // or set it to some default value
    }
  };

  //* * ComponentDidMount
  useEffect(() => {
    handleSetMeta();
  }, [location]);

  return (
    <div className="">
      {(meta?.layout !== 'blank' || meta?.layout === undefined) && meta && (
        <div>
          {/* {meta?.isNotHeader === true ? null : <Header />} */}
          <div>
            <Outlet />
          </div>
          {meta?.isNotFooter === true ? null : <Footer />}
        </div>
      )}
    </div>
  );
}

export default VerticalLayout;
