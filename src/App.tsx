import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ChatWidget } from './components/chat/ChatWidget'
import DynamicBackground from './components/DynamicBackground'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import AppRoutes from './components/AppRoutes'

export default function App() {
  return (
    <LanguageProvider>
    <BrowserRouter basename="/NexShield">
      <div className="relative isolate min-h-screen flex flex-col overflow-x-hidden bg-slate-50 text-slate-800">
        <ScrollToTop />
        <DynamicBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10 flex-1">
          <AppRoutes />
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
        <ChatWidget />
      </div>
    </BrowserRouter>
    </LanguageProvider>
  )
}

