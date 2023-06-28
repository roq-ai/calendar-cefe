import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  time_slot_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
