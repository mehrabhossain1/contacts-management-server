import { TContacts } from './contacts.interface'
import ContactsModel from './contacts.model'

const createContact = async (contactData: TContacts): Promise<TContacts> => {
  const result = await ContactsModel.create(contactData)
  return result
}

const getAllContacts = async (): Promise<TContacts[]> => {
  const result = await ContactsModel.find({})
  return result
}

export const contactServices = {
  createContact,
  getAllContacts,
}
