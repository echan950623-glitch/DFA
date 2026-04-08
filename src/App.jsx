import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import EntryAnimation from './components/ui/EntryAnimation'
import HomePage from './pages/HomePage'
import CommunityCollegePage from './pages/programs/CommunityCollegePage'
import IvyLeaguePage from './pages/programs/IvyLeaguePage'
import UkAusNzPage from './pages/programs/UkAusNzPage'
import UclaTransferPage from './pages/success/UclaTransferPage'
import UcbTransferPage from './pages/success/UcbTransferPage'
import TagAdmissionPage from './pages/success/TagAdmissionPage'
import ApplyAnalysisPage from './pages/ApplyAnalysisPage'
import SchoolsPage from './pages/SchoolsPage'
import TeamPage from './pages/TeamPage'
import TuitionPage from './pages/TuitionPage'
import VisaPage from './pages/VisaPage'
import TutoringPage from './pages/TutoringPage'
import ImmigrationPage from './pages/ImmigrationPage'
import StudyTourPage from './pages/StudyTourPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <EntryAnimation />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs/community-college" element={<CommunityCollegePage />} />
          <Route path="/programs/ivy-league" element={<IvyLeaguePage />} />
          <Route path="/programs/uk-aus-nz" element={<UkAusNzPage />} />
          <Route path="/success/ucla" element={<UclaTransferPage />} />
          <Route path="/success/ucb" element={<UcbTransferPage />} />
          <Route path="/success/tag" element={<TagAdmissionPage />} />
          <Route path="/apply-analysis" element={<ApplyAnalysisPage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/tuition" element={<TuitionPage />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/tutoring" element={<TutoringPage />} />
          <Route path="/immigration" element={<ImmigrationPage />} />
          <Route path="/study-tour" element={<StudyTourPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
