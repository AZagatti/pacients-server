import { Request, Response } from "express";
import AvaliationUseCase from "../useCases/AvaliationUseCase";

const AvaliationController = {
  create: async (req: Request, res: Response) => {
    const avaliation = req.body;
    const { pacient_id } = req.params;

    try {
      const result = await AvaliationUseCase.create({
        ...avaliation,
        pacient_id,
      });

      return res.json(result);
    } catch (err) {
      return res.status(400).send();
    }
  },
  index: async (req: Request, res: Response) => {
    const { pacient_id } = req.params;

    const result = await AvaliationUseCase.findByPacientId(+pacient_id);

    if (!result) {
      return res.status(404).send();
    }

    return res.json(result);
  },
  update: async (req: Request, res: Response) => {
    const avaliation = req.body;

    const result = await AvaliationUseCase.update(avaliation);

    if (!result) {
      return res.status(404).send();
    }

    return res.json(result);
  },
};

export default AvaliationController;
