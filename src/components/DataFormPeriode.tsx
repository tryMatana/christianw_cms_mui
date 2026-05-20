import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import Button from './Button';

interface DataFormProps {
  item?: any | null;
  onCancel: () => void;
  onSubmit: (item: any) => void;
}

function DataForm({ item = null, onCancel, onSubmit }: DataFormProps) {
  const [form, setForm] = useState<any>(
    item || {
      id: '',
      name: '',
      startClass: '',
      endClass: '',
      startUTS: '',
      endUTS: '',
      startUAS: '',
      endUAS: '',
      totalPrograms: 1,
      minimalAttendance: 75,
      serviceQuestionnaire: '',
      examChair: '',
      active: false,
      notes: '',
    }
  );

  const updateField = (field: string) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = field === 'active' ? (event.target as HTMLInputElement).checked : event.target.value;
    setForm((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="card card-form">
      <div className="form-grid">
        <label>
          Kode
          <input value={form.id} disabled onChange={updateField('id')} placeholder="Masukkan kode" />
        </label>
        <label>
          Nama
          <input value={form.name} onChange={updateField('name')} placeholder="Nama" />
        </label>
        <label>
          Tanggal Awal
          <input value={form.startClass} onChange={updateField('startClass')} placeholder="dd-mm-yyyy" />
        </label>
        <label>
          Tanggal Akhir
          <input value={form.endClass} onChange={updateField('endClass')} placeholder="dd-mm-yyyy" />
        </label>
        <label>
          Jumlah Program
          <input type="number" value={form.totalPrograms} onChange={updateField('totalPrograms')} min={1} />
        </label>
        <label className="checkbox-row">
          <input type="checkbox" checked={form.active} onChange={updateField('active')} /> Aktif?
        </label>
        <label className="full-width">
          Catatan
          <textarea value={form.notes} onChange={updateField('notes')} rows={3} placeholder="Keterangan tambahan" />
        </label>
      </div>
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>
          Kembali
        </Button>
        <Button variant="success" onClick={() => onSubmit(form)}>
          Simpan
        </Button>
      </div>
    </div>
  );
}

export default DataForm;
