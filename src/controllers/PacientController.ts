import { Request, Response } from "express";
import PacientUseCase from "../useCases/PacientUseCase";

const PacientController = {
  create: async (req: Request, res: Response) => {
    const pacient = req.body;

    try {
      const result = await PacientUseCase.create(pacient);

      return res.json(result);
    } catch (err) {
      return res.status(400).send();
    }
  },
  show: async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;

    const result = await PacientUseCase.findAll({
      page: +page,
      limit: +limit,
    });

    return res.json(result);
  },
  index: async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await PacientUseCase.findById(+id);

    if (!result) {
      return res.status(404).send();
    }

    return res.json(result);
  },
  update: async (req: Request, res: Response) => {
    const pacient = req.body;

    const result = await PacientUseCase.update(pacient);

    if (!result) {
      return res.status(404).send();
    }

    return res.json(result);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await PacientUseCase.deleteById(+id);

    if (result) {
      return res.status(200).send();
    }

    return res.status(404).send();
  },
};

export default PacientController;
