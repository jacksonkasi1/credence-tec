import { createRef } from 'react';
import Home from '../../pages/Home';
import AboutUs from '../../pages/AboutUs';
import ServerMaintenance from '../../pages/Services/MaintenanceServices';
import Sales from '../../pages/Services/Sales';
import Rental from '../../pages/Services/Rental';
import Careers from '../../pages/Careers';
import Contact from '../../pages/Contact';
import JobDetails from '../../pages/JobDetails';
import BusinessDetails from '../../pages/JobDetails/BusinessDetails';
import SalesDetails from '../../pages/JobDetails/SalesDetails';
import StorageMaintenance from '../../pages/Services/Storage/StorageMaintenance';
import NetworkMaintenance from '../../pages/Services/Network/NetworkMaintenance';
import EndUserMaintenance from '../../pages/Services/EndUser/EndUserMaintenance';
import DatabaseMaintenance from '../../pages/Services/Database/DatabaseMaintenance';
import FacilityManagement from '../../pages/Services/Facility/FacilityManagement';
import DataCentreManagement from '../../pages/Services/DataCentre/DataCentreManagement';
import AvMaintenance from '../../pages/Services/AV/AvMaintenance';
import Elevating from '../../pages/Blogs/ElevatingITExcellence';
import WhyAMC from '../../pages/Blogs/WhyAMC';
import Unlocking from '../../pages/Blogs/Unlocking';

const auth = [
  {
    path: '/',
    element: <Home />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/about-us',
    element: <AboutUs />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/services/server-maintenance',
    element: <ServerMaintenance />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/services/storage-maintenance',
    element: <StorageMaintenance />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/services/network-maintenance',
    element: <NetworkMaintenance />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/services/end-user-maintenance',
    element: <EndUserMaintenance />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/services/database-maintenance',
    element: <DatabaseMaintenance />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/services/facility-management',
    element: <FacilityManagement />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/services/data-centre-management',
    element: <DataCentreManagement />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/services/av-maintenance',
    element: <AvMaintenance />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/sales',
    element: <Sales />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/rental',
    element: <Rental />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/career',
    element: <Careers />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/contact',
    element: <Contact />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/career/job-details/Hardware-Engineer',
    element: <JobDetails />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/career/job-details/Business-Development-Executive',
    element: <BusinessDetails />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/career/job-details/Sales-Executive',
    element: <SalesDetails />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/blog/Elevating-IT-Excellence',
    element: <Elevating />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/blog/Why-AMC',
    element: <WhyAMC />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/blog/Unlocking',
    element: <Unlocking />,
    nodeRef: createRef(),
    meta: {
      publicRoute: true,
    },
  },
];

export default auth;
