import express from 'express'
import { contactControllers } from './contacts.controller'

const router = express.Router()

router.post('/', contactControllers.createContact)

router.get('/', contactControllers.getAllContacts)

router.delete('/:id', contactControllers.deleteContact)

router.patch('/:id', contactControllers.updateContact)

export const contactRoutes = router
