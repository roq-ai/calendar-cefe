import { TimeSlotInterface } from 'interfaces/time-slot';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  time_slot_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  time_slot?: TimeSlotInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  time_slot_id?: string;
  user_id?: string;
}
