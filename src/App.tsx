
import { Suspense, lazy } from "react";
import SEOHead from "@/components/SEOHead";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const BabyName = lazy(() => import("./pages/BabyName"));
const CSectionDates = lazy(() => import("./pages/CSectionDates"));
const NameCorrection = lazy(() => import("./pages/NameCorrection"));
const Payment = lazy(() => import("./pages/Payment"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const OrdersModule = lazy(() => import("./pages/admin/modules/OrdersModule"));
const InvoicesHub = lazy(() => import("./pages/admin/modules/InvoicesHub"));
const EmailModule = lazy(() => import("./pages/admin/modules/EmailModule"));
const CrmModule = lazy(() => import("./pages/admin/modules/CrmModule"));
const WorkflowsModule = lazy(() => import("./pages/admin/modules/WorkflowsModule"));
const WebhooksModule = lazy(() => import("./pages/admin/modules/WebhooksModule"));

const ServicesModule = lazy(() => import("./pages/admin/modules/ServicesModule"));

const SettingsModule = lazy(() => import("./pages/admin/modules/SettingsModule"));
const GstReportsHub = lazy(() => import("./pages/admin/modules/GstReportsHub"));
const GstMaintenanceModule = lazy(() => import("./pages/admin/modules/GstMaintenanceModule"));
// const PricingModule = lazy(() => import("./pages/admin/modules/PricingModule"));
const ServicePagesModule = lazy(() => import("./pages/admin/modules/ServicePagesModule"));
const DynamicServicePage = lazy(() => import("./pages/DynamicServicePage"));
const ServiceSlugPage = lazy(() => import("./pages/ServiceSlugPage"));
const TeamManagementModule = lazy(() => import("./pages/admin/modules/TeamManagementModule"));
const ReportsModule = lazy(() => import("./pages/admin/modules/ReportsModule"));
const NameCheckReportsModule = lazy(() => import("./pages/admin/modules/NameCheckReportsModule"));
const NameCorrectionReports = lazy(() => import("./pages/admin/modules/NameCorrectionReports"));
const PerfectBabyNameReports = lazy(() => import("./pages/admin/modules/PerfectBabyNameReports"));
     const CompleteBabyBlueprintReports = lazy(() => import("./pages/admin/modules/CompleteBabyBlueprintReports"));
const AuditLogsModule = lazy(() => import("./pages/admin/modules/AuditLogsModule"));
const SwarCalculatorModule = lazy(() => import("./pages/admin/modules/SwarCalculatorModule"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/name-correction" element={<NameCorrection />} />
            <Route path="/services/name-check" element={<Navigate to="/services/name-correction" replace />} />
            <Route path="/services/baby-name" element={<BabyName />} />
            <Route path="/services/csection-dates" element={<CSectionDates />} />
            {/* Simple services created from Admin → Service Pages */}
            <Route path="/services/:slug" element={<ServiceSlugPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/reports/:slug" element={<DynamicServicePage />} />
            <Route path="/payment" element={<><SEOHead title="Checkout" description="Secure checkout." noindex /><Payment /></>} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/auth" element={<Auth />} />
            
<Route path="/reset-password" element={<ResetPassword />} />
            {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
            <Route path="/dashboard" element={<ProtectedRoute customerOnly><Dashboard /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute requireAdmin><AdminLayout /></ProtectedRoute>}>
              <Route index element={<AdminDashboard />} />
              <Route path="orders" element={<OrdersModule />} />
              <Route path="invoices" element={<InvoicesHub />} />
              <Route path="email" element={<EmailModule />} />
              <Route path="crm" element={<CrmModule />} />
              <Route path="workflows" element={<WorkflowsModule />} />
              <Route path="webhooks" element={<WebhooksModule />} />
             
              <Route path="services" element={<ServicesModule />} />
              <Route path="service-pages" element={<ServicePagesModule />} />
              {/* <Route path="pricing" element={<PricingModule />} /> */}
             
              <Route path="settings" element={<SettingsModule />} />
              <Route path="gst-reports" element={<GstReportsHub />} />
              <Route path="gst-maintenance" element={<GstMaintenanceModule />} />
              <Route path="team" element={<TeamManagementModule />} />
              
<Route path="reports" element={<ReportsModule />} />
<Route path="reports/name-check" element={<NameCheckReportsModule />} />
                        <Route path="reports/name-correction" element={<NameCorrectionReports />} />
              <Route path="reports/perfect-baby-name" element={<PerfectBabyNameReports />} />
                   <Route path="reports/complete-baby-blueprint" element={<CompleteBabyBlueprintReports />} />
<Route path="name-check-reports" element={<Navigate to="/admin/reports/name-check" replace />} />
              {/* Audit Logs — nested under the same requireAdmin-protected
                  /admin layout as everything else. The extra Super-Admin-only
                  restriction (beyond plain admin) is enforced by
                  AuditLogsModule itself: it calls the audit-logs API, which
                  returns 403 for non-Super-Admins, and the module renders an
                  "Access Denied" screen in that case — so a Staff/Limited
                  Admin/Team Member typing this URL directly still can't see
                  any log data, even though they can reach this route. */}
              <Route path="audit-logs" element={<AuditLogsModule />} />
                               <Route path="swar-calculator" element={<SwarCalculatorModule />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
