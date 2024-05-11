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

const deleteContact = async (id: string) => {
  const result = await ContactsModel.findByIdAndDelete(id)
  return result
}

const updateContact = async (
  id: string,
  contactData: TContacts,
): Promise<TContacts | null> => {
  const result = await ContactsModel.findByIdAndUpdate(id, contactData, {
    new: true,
    runValidators: true,
  })

  return result
}

export const contactServices = {
  createContact,
  getAllContacts,
  deleteContact,
  updateContact,
}
