import React from 'react';

interface DetailPanelProps {
  item?: any;
}

function DetailPanel({ item }: DetailPanelProps) {
  if (!item) {
    return <div className="card card-panel">Pilih item untuk melihat detail.</div>;
  }

  return (
    <div className="card card-panel">
      <div className="detail-grid">
        <div>
          <strong>Kode</strong>
          <div>{item.id}</div>
        </div>
        <div>
          <strong>Nama</strong>
          <div>{item.name}</div>
        </div>
        <div>
          <strong>Tgl. Awal</strong>
          <div>{item.startClass}</div>
        </div>
        <div>
          <strong>Tgl. Akhir</strong>
          <div>{item.endClass}</div>
        </div>
        <div>
          <strong>Tgl. Awal UTS</strong>
          <div>{item.startUTS}</div>
        </div>
        <div>
          <strong>Tgl. Akhir UTS</strong>
          <div>{item.endUTS}</div>
        </div>
        <div>
          <strong>Tgl. Awal UAS</strong>
          <div>{item.startUAS}</div>
        </div>
        <div>
          <strong>Tgl. Akhir UAS</strong>
          <div>{item.endUAS}</div>
        </div>
        <div>
          <strong>Status</strong>
          <div>{item.active ? 'Aktif' : 'Tidak Aktif'}</div>
        </div>
      </div>
      <div className="detail-footer">{item.notes}</div>
    </div>
  );
}

export default DetailPanel;
