import { useNavigate } from 'react-router-dom';
import PageHeader from './PageHeader';
import DataForm from '../components/DataFormPeriode';
import type { Periode } from '../types';

interface AddPageProps {
  onSubmit: (period: Periode) => void;
}

function AddPage({ onSubmit }: AddPageProps) {
  const navigate = useNavigate();

  const handleSubmit = (form: Periode) => {
    onSubmit(form);
    navigate('/');
  };

  return (
    <>
      <PageHeader
        title="Data Periode Akademik"
        description="Detail Periode Akademik"
        breadcrumbs={[{ label: 'Periode Akademik', href: '/' }, { label: 'Tambah Data' }]}
      />
      <DataForm item={null} onCancel={() => navigate('/')} onSubmit={handleSubmit} />
    </>
  );
}

export default AddPage;
