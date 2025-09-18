import { CertificationsRepository } from '../repositories/certifications.repository'

export const CertificationsService = {
  async getCertifications() {
    return await CertificationsRepository.getCertifications()
  },
}
