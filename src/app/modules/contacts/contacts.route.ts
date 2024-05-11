import express from 'express'
import { contactControllers } from './contacts.controller'

const router = express.Router()

router.post('/', contactControllers.createContact)

router.get('/', contactControllers.getAllContacts)

export const contactRoutes = router
