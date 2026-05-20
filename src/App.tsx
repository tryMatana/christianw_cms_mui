import { useMemo, useState, type ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import PeriodePage from './pages/PeriodePage';
import AddPage from './pages/AddPage';
import ViewPage from './pages/ViewPage';
import EditPage from './pages/EditPage';
import ReportPage from './pages/ReportPage';
import { initialPeriodes } from './data/periodes';
import type { Periode } from './types';

const navItems = [
  { label: 'Periode Akademik', path: '/' },
  { label: 'Tambah Data', path: '/tambah' },
  { label: 'Report', path: '/report' },
];

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <main className="main-content">
        <div className="content-area">{children}</div>
      </main>
    </div>
  );
}

function ViewRoute({ periods }: { periods: Periode[] }) {
  const { id } = useParams();
  const period = periods.find((item) => item.id === id);

  return <ViewPage period={period} />;
}

function EditRoute({ periods, onSave }: { periods: Periode[]; onSave: (period: Periode) => void }) {
  const { id } = useParams();
  const period = periods.find((item) => item.id === id);

  return <EditPage period={period} onSubmit={onSave} />;
}

function AppContent() {
  const [periods, setPeriods] = useState<Periode[]>(initialPeriodes);
  const [reportSearch, setReportSearch] = useState('');
  const [reportStart, setReportStart] = useState('');
  const [reportEnd, setReportEnd] = useState('');
  const navigate = useNavigate();

  const filteredPeriods = useMemo(
    () =>
      periods.filter((period) => {
        const matchesSearch = reportSearch
          ? period.name.toLowerCase().includes(reportSearch.toLowerCase()) || period.id.includes(reportSearch)
          : true;
        const matchesStart = reportStart ? period.startClass.includes(reportStart) : true;
        const matchesEnd = reportEnd ? period.endClass.includes(reportEnd) : true;
        return matchesSearch && matchesStart && matchesEnd;
      }),
    [periods, reportSearch, reportStart, reportEnd]
  );

  const handleView = (period: Periode) => {
    navigate(`/view/${period.id}`);
  };

  const handleEdit = (period: Periode) => {
    navigate(`/edit/${period.id}`);
  };

  const addPeriod = (form: Periode) => {
    const record = { ...form, id: form.id || `${Date.now()}` };
    setPeriods((prev) => [...prev, record]);
    navigate('/');
  };

  const updatePeriod = (form: Periode) => {
    setPeriods((prev) => prev.map((item) => (item.id === form.id ? form : item)));
    navigate('/');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PeriodePage
            periods={periods}
            reportSearch={reportSearch}
            setReportSearch={setReportSearch}
            onView={handleView}
            onEdit={handleEdit}
          />
        }
      />
      <Route path="/tambah" element={<AddPage onSubmit={addPeriod} />} />
      <Route path="/view/:id" element={<ViewRoute periods={periods} />} />
      <Route path="/edit/:id" element={<EditRoute periods={periods} onSave={updatePeriod} />} />
      <Route
        path="/report"
        element={
          <ReportPage
            reportSearch={reportSearch}
            setReportSearch={setReportSearch}
            reportStart={reportStart}
            setReportStart={setReportStart}
            reportEnd={reportEnd}
            setReportEnd={setReportEnd}
            periods={filteredPeriods}
            onView={handleView}
            onEdit={handleEdit}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <AppContent />
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
