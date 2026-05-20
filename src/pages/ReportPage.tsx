import type { Periode } from '../types';
import PageHeader from './PageHeader';
import DataTable, { type Column } from '../components/DataTable';
import Button from '../components/Button';

interface ReportPageProps {
  reportSearch: string;
  setReportSearch: (value: string) => void;
  reportStart: string;
  setReportStart: (value: string) => void;
  reportEnd: string;
  setReportEnd: (value: string) => void;
  periods: Periode[];
  onView: (period: Periode) => void;
  onEdit: (period: Periode) => void;
}

function ReportPage({
  reportSearch,
  setReportSearch,
  reportStart,
  setReportStart,
  reportEnd,
  setReportEnd,
  periods,
  onView,
  onEdit,
}: ReportPageProps) {
  return (
    <>
      <PageHeader
        title="Periode Akademik"
        description="Daftar Periode Akademik"
        breadcrumbs={[{ label: 'Periode Akademik', href: '/' }, { label: 'Report' }]}
      />
      <div className="card card-panel report-filters">
        <div className="filter-row">
          <label>
            Search
            <input value={reportSearch} onChange={(event) => setReportSearch(event.target.value)} placeholder="Cari periode akademik" />
          </label>
          <label>
            Tgl. Awal Kuliah
            <input value={reportStart} onChange={(event) => setReportStart(event.target.value)} placeholder="dd-mm-yyyy" />
          </label>
          <label>
            Tgl. Akhir Kuliah
            <input value={reportEnd} onChange={(event) => setReportEnd(event.target.value)} placeholder="dd-mm-yyyy" />
          </label>
        </div>
        <div className="toolbar">
          <Button variant="info" onClick={() => window.print()}>
            Print
          </Button>
          <Button variant="primary" onClick={() => alert('Export CSV berhasil (simulasi)')}>
            Export CSV
          </Button>
        </div>
      </div>
      <DataTable
        items={periods}
        onView={onView}
        onEdit={onEdit}
        columns={(
          [
            { key: 'id', header: 'Kode', accessor: 'id' },
            { key: 'name', header: 'Nama', accessor: 'name' },
            { key: 'startClass', header: 'Tgl. Awal', accessor: 'startClass' },
            { key: 'endClass', header: 'Tgl. Akhir', accessor: 'endClass' },
            { key: 'startUTS', header: 'Tgl. Awal UTS', accessor: 'startUTS' },
            { key: 'endUTS', header: 'Tgl. Akhir UTS', accessor: 'endUTS' },
            { key: 'startUAS', header: 'Tgl. Awal UAS', accessor: 'startUAS' },
            { key: 'active', header: 'Aktif', accessor: 'active' },
          ] as Column<Periode>[]
        )}
      />
    </>
  );
}

export default ReportPage;
