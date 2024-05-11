/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { contactServices } from './contacts.service'
import ContactsValidationSchema from './contacts.validation'
import { ZodError } from 'zod'

const createContact = async (req: Request, res: Response) => {
  try {
    const contact = req.body

    // zod validation
    const zodParsedData = ContactsValidationSchema.parse(contact)

    const result = await contactServices.createContact(zodParsedData)

    res.status(201).json({
      success: true,
      message: 'Contact created successfully',
      data: {
        name: result.name,
        email: result.email,
        phoneNumber: result.phoneNumber,
        address: result.address,
        profilePicture: result.profilePicture,
      },
    })
  } catch (err: any) {
    if (err instanceof ZodError) {
      // If Zod error, extract error messages and format them
      const formattedErrors = err.errors.map((error) => {
        return {
          field: error.path.join('.'),
          message: error.message,
        }
      })

      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: formattedErrors,
      })
    }

    console.error(err.message)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message,
    })
  }
}

const getAllContacts = async (req: Request, res: Response) => {
  try {
    const result = await contactServices.getAllContacts()

    res.status(200).json({
      success: true,
      message: 'Contacts fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Contact not found',
      error: error.message,
    })
  }
}

const deleteContact = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    await contactServices.deleteContact(id)

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: error.error,
    })
  }
}

const updateContact = async (req: Request, res: Response) => {
  try {
    const contactData = req.body

    const { id } = req.params

    const result = await contactServices.updateContact(id, contactData)

    res.status(200).json({
      success: true,
      message: 'Contact updated successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Contact not found',
      error: error.error,
    })
  }
}

export const contactControllers = {
  createContact,
  getAllContacts,
  deleteContact,
  updateContact,
}
