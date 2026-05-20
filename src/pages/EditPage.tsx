import { useNavigate } from 'react-router-dom';
import PageHeader from './PageHeader';
import DataForm from '../components/DataFormPeriode';
import type { Periode } from '../types';

interface EditPageProps {
  period: Periode | undefined;
  onSubmit: (period: Periode) => void;
}

function EditPage({ period, onSubmit }: EditPageProps) {
  const navigate = useNavigate();

  if (!period) {
    return <div className="card card-panel">Periode tidak ditemukan.</div>;
  }

  const handleSubmit = (form: Periode) => {
    onSubmit(form);
    navigate('/');
  };

  return (
    <>
      <PageHeader
        title="Data Periode Akademik"
        description="Detail Periode Akademik"
        breadcrumbs={[{ label: 'Periode Akademik', href: '/' }, { label: 'Edit Data' }]}
      />
      <DataForm item={period} onCancel={() => navigate('/')} onSubmit={handleSubmit} />
    </>
  );
}

export default EditPage;
