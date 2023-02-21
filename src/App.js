import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/loginpage/Login";

import Approvedtemplates from "./pages/templates/Approvedtemplates";
import Profileupdate from "./pages/settings/Profileupdate";
import Changepassword from "./pages/settings/Changepassword";

import Single from "./pages/messaging/Single";
import Multiple from "./pages/messaging/Multiple";
import Loginhistory from "./pages/settings/Loginhistory";
import Manageuser from "./pages/settings/Manageuser";
import Pendingtemplates from "./pages/templates/Pendingtemplates";
import Createtemplates from "./pages/templates/Createtemplates";
import Campaignwise from "./pages/report/Campaignwise";

import Monthlyoutgoing from "./pages/report/Monthlyoutgoing";
import Send from "./pages/report/Send";
import Receivedafter from "./pages/report/Receivedafter";
import Receivedwithin from "./pages/report/Receivedwithin";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        {
          path: "/templates/approved-templates",
          element: <Approvedtemplates />,
        },
        { path: "/templates/pending-templates", element: <Pendingtemplates /> },
        { path: "/templates/create-templates", element: <Createtemplates /> },
        { path: "/broadcast/single", element: <Single /> },
        { path: "/broadcast/multiple", element: <Multiple /> },
        { path: "/report/campaign-wise", element: <Campaignwise /> },
        { path: "/date-wise/send", element: <Send /> },
        { path: "/date-wise/received-after-24hr", element: <Receivedafter /> },
        {
          path: "/date-wise/received-within-24hr",
          element: <Receivedwithin />,
        },
        { path: "/report/monthly-outgoing", element: <Monthlyoutgoing /> },
        { path: "/settings/profile-update", element: <Profileupdate /> },
        { path: "/settings/change-password", element: <Changepassword /> },
        {
          path: "/settings/credit-log/login-history",
          element: <Loginhistory />,
        },
        {
          path: "/settings/credit-log/manage-user",
          element: <Manageuser />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
