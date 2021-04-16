import { Router } from 'express';
import AvaliationController from './controllers/AvaliationController';
import PacientController from './controllers/PacientController';
import MedicalRecordController from './controllers/MedicalRecordController';

const routes = Router();

routes.get('/pacients', PacientController.show);
routes.get('/pacients/:id', PacientController.index);
routes.post('/pacients', PacientController.create);
routes.put('/pacients', PacientController.update);
routes.delete('/pacients/:id', PacientController.delete);

routes.get('/avaliation/:pacient_id', AvaliationController.index);
routes.post('/avaliation/:pacient_id', AvaliationController.create);
routes.put('/avaliation', AvaliationController.update);

routes.get('/medical_record/:pacient_id', MedicalRecordController.show);
routes.post('/medical_record/:pacient_id', MedicalRecordController.create);
routes.put('/medical_record', MedicalRecordController.update);
routes.delete('/medical_record/:id', MedicalRecordController.delete);

export default routes;