export interface Periode {
  id: string;
  name: string;
  semester: string;
  academicYear: string;
  startClass: string;
  endClass: string;
  startUTS: string;
  endUTS: string;
  startUAS: string;
  endUAS: string;
  totalPrograms: number;
  active: boolean;
  minimalAttendance: number;
  serviceQuestionnaire: string;
  examChair: string;
  notes: string;
}
