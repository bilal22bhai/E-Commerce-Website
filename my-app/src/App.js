import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Public Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Notifications from "./Components/Notifications/Notifications";
import WhatsappChat from "./Components/WhatsappChat/WhatsappChat";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import CompanyPage from "./Components/Company/CompanyPage";
import OfficesPage from "./Components/OfficesPage/OfficesPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import TermsPrivacy from "./Components/TermsPrivacy/TermsPrivacy";
import LatestCollectionsPage from "./Components/LatestCollectionsPage/LatestCollectionsPage";
import Excutiveofferies from "./Components/Excutiveofferies/Excutiveofferies ";
import ProceedTOCheckOut from "./Components/ProceedTOCheckOut/ProceedTOCheckOut";
import Exploremoreman from "./Components/Exploremoreman/Exploremoreman";
import Exploremorewomen from "./Components/Exploremorewomen/Exploremorewomen";
import Exploremorekid from "./Components/Exploremorekid/Exploremorekid";
import Helpcenter from "./Components/Helpcenter/Helpcenter";
import LoginHerepage from "./Components/LoginHerepage/LoginHerepage";
import ForgetPasswordPage from "./Components/ForgetPasswordPage/ForgetPasswordPage";
import Contact from "./Components/Contact/Contact";
import OrderInformationt from "./Components/OrderInformation/OrderInformation";
import ShippingDelivery from "./Components/ShippingDelivery/ShippingDelivery";
import PaymentOptions from "./Components/PaymentOptions/PaymentOptions";
import ReturnsRedunds from "./Components/ReturnsRedunds/ReturnsRedunds";

// Admin Components
import Dashboard from "./Admin/Pages/Dashboard";
import ProductsAdmin from "./Admin/Pages/ProductsAdmin";
import Header from "./Admin/Components/Header/Header";
import Orders from "./Admin/Pages/Orders";
import Admin from "./Admin/Components/Admin";
import Settings from "./Admin/Pages/Settings";
// Banner Assets
import men_banner_video from "./Components/Assets/men_banner_video.mp4";
import women_banner_video from "./Components/Assets/women_banner_video.mp4";
import kid_banner_video from "./Components/Assets/kid_banner_video.mp4";

// Layout Components
const PublicLayout = ({ children, searchQuery, setSearchQuery }) => (
  <>
    <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    {children}
    <Notifications />
    <WhatsappChat />
    <Footer />
  </>
);

const AdminLayout = ({ children }) => (
  <>
    <Header />
    <div style={{ padding: "20px" }}>{children}</div>
  </>
);

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Determines the layout based on the route
  const LayoutWrapper = ({ children }) => {
    const location = useLocation();
    const adminRoutes = ["/admin/dashboard", "/admin/products" ,"/admin/orders", "/admin","/admin/settings"];
    const isAdminRoute = adminRoutes.includes(location.pathname.toLowerCase());

    return isAdminRoute ? (
      <AdminLayout>{children}</AdminLayout>
    ) : (
      <PublicLayout>
        {children}
      </PublicLayout>
    );
  };


  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<ProductsAdmin />} />
          <Route path = "/admin/orders" element ={ <Orders/>}/>
          <Route path ="/admin" element={<Admin/>}/>
          <Route path = "/admin/settings" element={<Settings/>}/>
        {/* Public Routes */}
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={
              <ShopCategory
                banner={men_banner_video}
                key="men"
                category="men"
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/womens"
            element={
              <ShopCategory
                banner={women_banner_video}
                key="women"
                category="women"
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/kids"
            element={
              <ShopCategory
                banner={kid_banner_video}
                key="kid"
                category="kid"
                searchQuery={searchQuery}
              />
            }
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/offices" element={<OfficesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/termsprivacy" element={<TermsPrivacy />} />
          <Route
            path="/latest-collections"
            element={<LatestCollectionsPage />}
          />
          <Route path="/Excutiveofferies" element={<Excutiveofferies />} />
          <Route path="/ProceedTOCheckOut" element={<ProceedTOCheckOut />} />
          <Route path="/Exploremoreman" element={<Exploremoreman />} />
          <Route path="/Exploremorewomen" element={<Exploremorewomen />} />
          <Route path="/Exploremorekid" element={<Exploremorekid />} />
          <Route path="/Help-center" element={<Helpcenter />} />
          <Route path="/LoginHerepage" element={<LoginHerepage />} />
          <Route path="/ForgetPasswordPage" element={<ForgetPasswordPage />} />
          <Route path="/Contact-us" element={<Contact />} />
          <Route path="/Order-info" element={<OrderInformationt />} />
          <Route path="/Shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/Payment-options" element={<PaymentOptions />} />
          <Route path="/Returns-refunds" element={<ReturnsRedunds />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}

export default App;
