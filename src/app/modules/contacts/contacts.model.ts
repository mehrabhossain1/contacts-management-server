import { Schema, model } from 'mongoose'
import { TContacts } from './contacts.interface'

const contactsSchema = new Schema<TContacts>({
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  profilePicture: { type: String },
})

const ContactsModel = model<TContacts>('Contacts', contactsSchema)

export default ContactsModel
