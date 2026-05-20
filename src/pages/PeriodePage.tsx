import type { Periode } from '../types';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import DataTable, { type Column } from '../components/DataTable';
import Button from '../components/Button';

interface PeriodePageProps {
  periods: Periode[];
  reportSearch: string;
  setReportSearch: (value: string) => void;
  onView: (period: Periode) => void;
  onEdit: (period: Periode) => void;
}

function PeriodePage({ periods, reportSearch, setReportSearch, onView, onEdit }: PeriodePageProps) {
  return (
    <>
      <PageHeader
        title="Periode Akademik"
        description="Daftar Periode Akademik"
        breadcrumbs={[{ label: 'Periode Akademik' }]}
      />
      <div className="toolbar">
      </div>
      <div className="card card-search">
        <input value={reportSearch} onChange={(event) => setReportSearch(event.target.value)} placeholder="Cari periode akademik" />
        <Link to="/tambah">
          <Button variant="primary">Tambah</Button>
        </Link>
        <Link to="/report">
          <Button variant="secondary">Report</Button>
        </Link>
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

export default PeriodePage;
