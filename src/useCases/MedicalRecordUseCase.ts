import { getRepository } from "typeorm";
import MedicalRecord from "../entities/MedicalRecord";

const MedicalRecordUseCase = {
  create: async (medicalRecord: MedicalRecord) => {
    const medicalRecordRepository = getRepository(MedicalRecord);

    const createdMedicalRecord = medicalRecordRepository.create(medicalRecord);
    const result = await medicalRecordRepository.save(createdMedicalRecord);

    return result;
  },
  findAllByPacientId: async ({
    page,
    limit,
    pacient_id,
  }: {
    page: number;
    limit: number;
    pacient_id: number;
  }) => {
    const medicalRecordRepository = getRepository(MedicalRecord);

    const skip = (page - 1) * limit;

    const [medicalRecord, total] = await medicalRecordRepository.findAndCount({
      where: {
        pacient_id,
      },
      skip,
      take: limit,
    });

    const lastPage = total / limit;

    return {
      medicalRecord,
      page,
      total,
      lastPage: Math.ceil(Math.max(1, lastPage)),
    };
  },
  update: async (medicalRecord: MedicalRecord) => {
    const medicalRecordRepository = getRepository(MedicalRecord);

    const findedMedicalRecord = await medicalRecordRepository.findOne(
      medicalRecord.id
    );

    if (!findedMedicalRecord) {
      return undefined;
    }

    medicalRecordRepository.merge(findedMedicalRecord, medicalRecord);

    const result = await medicalRecordRepository.save(findedMedicalRecord);

    return result;
  },
  deleteById: async (id: number) => {
    const medicalRecordRepository = getRepository(MedicalRecord);

    const findedPacient = await medicalRecordRepository.findOne(id);

    if (findedPacient) {
      await medicalRecordRepository.delete(id);
      return findedPacient;
    }

    return undefined;
  },
};

export default MedicalRecordUseCase;
