import { Request, Response } from "express";
import MedicalRecordUseCase from "../useCases/MedicalRecordUseCase";

const MedicalRecordController = {
  create: async (req: Request, res: Response) => {
    const medicalRecord = req.body;
    const { pacient_id } = req.params;

    try {
      const result = await MedicalRecordUseCase.create({
        ...medicalRecord,
        pacient_id,
      });

      return res.json(result);
    } catch (err) {
      return res.status(400).send();
    }
  },
  show: async (req: Request, res: Response) => {
    const { pacient_id } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const result = await MedicalRecordUseCase.findAllByPacientId({
      pacient_id: +pacient_id,
      page: +page,
      limit: +limit,
    });

    if (!result.total) {
      return res.status(404).send();
    }

    return res.json(result);
  },
  update: async (req: Request, res: Response) => {
    const medicalRecord = req.body;

    const result = await MedicalRecordUseCase.update(medicalRecord);

    if (!result) {
      return res.status(404).send();
    }

    return res.json(result);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await MedicalRecordUseCase.deleteById(+id);

    if (result) {
      return res.status(200).send();
    }

    return res.status(404).send();
  },
};

export default MedicalRecordController;
