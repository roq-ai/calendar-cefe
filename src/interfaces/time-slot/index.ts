import { AppointmentInterface } from 'interfaces/appointment';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface TimeSlotInterface {
  id?: string;
  start_time: any;
  end_time: any;
  status: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  business?: BusinessInterface;
  _count?: {
    appointment?: number;
  };
}

export interface TimeSlotGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  business_id?: string;
}
