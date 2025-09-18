import Certifications from '../models/certifications.model'

export const CertificationsRepository = {
  async getCertifications() {
    return await Certifications.find()
  },
}
