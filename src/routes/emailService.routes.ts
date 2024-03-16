import Router from 'express';
import emailServiceController from '../controllers/emailService.controller';
import emailBodyValidator from '../middlewares/email.middleware';
import validate from '../middlewares/validate.middleware';

const router = Router();

router.post('/', emailBodyValidator, validate,  emailServiceController);

export default router;
