import { getRepository } from "typeorm";
import Pacient from "../entities/Pacient";

const PacientUseCase = {
  create: async (pacient: Pacient) => {
    const pacientRepository = getRepository(Pacient);

    const createdPacient = pacientRepository.create(pacient);
    const result = await pacientRepository.save(createdPacient);

    return result;
  },
  findAll: async ({ page, limit }: { page: number; limit: number }) => {
    const pacientRepository = getRepository(Pacient);

    const skip = (page - 1) * limit;

    const [pacients, total] = await pacientRepository.findAndCount({
      take: limit,
      skip,
    });

    const lastPage = total / limit;

    return {
      pacients,
      page,
      total,
      lastPage: Math.ceil(Math.max(1, lastPage)),
    };
  },
  findById: async (id: number) => {
    const pacientRepository = getRepository(Pacient);

    const findedPacient = await pacientRepository.findOne(id);

    return findedPacient;
  },
  update: async (pacient: Pacient) => {
    const pacientRepository = getRepository(Pacient);

    const findedPacient = await pacientRepository.findOne(pacient.id);

    if (!findedPacient) {
      return undefined;
    }

    pacientRepository.merge(findedPacient, pacient);

    const result = await pacientRepository.save(findedPacient);

    return result;
  },
  deleteById: async (id: number) => {
    const pacientRepository = getRepository(Pacient);

    const findedPacient = await pacientRepository.findOne(id);

    if (findedPacient) {
      await pacientRepository.delete(id);
      return findedPacient;
    }

    return undefined;
  },
};

export default PacientUseCase;
