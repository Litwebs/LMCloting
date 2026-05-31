import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Layout from "./components/Layout.tsx";
import Index from "./pages/Index.tsx";
import Products from "./pages/Products.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import NoService from "./pages/NoService.tsx";
import RefundExchange from "./pages/RefundExchange.tsx";

const queryClient = new QueryClient();

const SITE_STATUS_ENDPOINT = "https://admin.litwebs.co.uk/api/websites/status";
const SITE_URL_TO_CHECK = "https://ykktrading.com";
const routerBasename = import.meta.env.BASE_URL;

const App = () => {
  const [checking, setChecking] = useState(true);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (import.meta.env.DEV) {
      setChecking(false);
      return;
    }

    let mounted = true;

    const checkStatus = async () => {
      try {
        const res = await fetch(SITE_STATUS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: SITE_URL_TO_CHECK }),
        });

        if (!res.ok) return false;

        const json = await res.json();
        const status =
          json?.data?.data?.status ?? json?.data?.status ?? json?.status;
        return String(status).toLowerCase() === "live";
      } catch {
        return false;
      }
    };

    (async () => {
      const live = await checkStatus();
      if (!mounted) return;
      setIsLive(live);
      setChecking(false);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (checking) {
    return null;
  }

  // if (!isLive) {
  //   return (
  //     <BrowserRouter basename={routerBasename}>
  //       <Routes>
  //         <Route path="*" element={<NoService />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={routerBasename}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/refund-exchange" element={<RefundExchange />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
