import { useNavigate } from 'react-router-dom';
import PageHeader from './PageHeader';
import DetailPanel from '../components/DetailPanel';
import Button from '../components/Button';
import type { Periode } from '../types';

interface ViewPageProps {
  period: Periode | undefined;
}

function ViewPage({ period }: ViewPageProps) {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        title="Data Periode Akademik"
        description="Detail Periode Akademik"
        breadcrumbs={[{ label: 'Periode Akademik', href: '/' }, { label: 'View Data' }]}
      />
      <DetailPanel item={period} />
      <div className="toolbar">
        <Button variant="secondary" onClick={() => navigate('/')}>Kembali ke Daftar</Button>
        <Button variant="success" onClick={() => navigate(`/edit/${period?.id}`)}>Edit Data</Button>
      </div>
    </>
  );
}

export default ViewPage;
