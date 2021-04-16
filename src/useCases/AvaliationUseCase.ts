import { getRepository } from "typeorm";
import Avaliation from "../entities/Avaliation";

const AvaliationUseCase = {
  create: async (avaliation: Avaliation) => {
    const avaliationRepository = getRepository(Avaliation);

    const createdAvaliation = avaliationRepository.create(avaliation);
    const result = await avaliationRepository.save(createdAvaliation);

    return result;
  },
  findByPacientId: async (pacient_id: number) => {
    const avaliationRepository = getRepository(Avaliation);

    const avaliation = await avaliationRepository.findOne({
      where: {
        pacient_id,
      },
    });

    return avaliation;
  },
  update: async (avaliation: Avaliation) => {
    const avaliationRepository = getRepository(Avaliation);

    const findedAvaliation = await avaliationRepository.findOne(avaliation.id);

    if (!findedAvaliation) {
      return undefined;
    }

    avaliationRepository.merge(findedAvaliation, avaliation);

    const result = await avaliationRepository.save(findedAvaliation);

    return result;
  },
};

export default AvaliationUseCase;
