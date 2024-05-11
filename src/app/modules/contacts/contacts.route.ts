import express from 'express'
import { contactControllers } from './contacts.controller'

const router = express.Router()

router.post('/', contactControllers.createContact)

router.get('/', contactControllers.getAllContacts)

router.delete('/:id', contactControllers.deleteContact)

export const contactRoutes = router
