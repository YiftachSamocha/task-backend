import express from 'express'

import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'

import { getTasks, getTaskById, addTask, updateTask, removeTask, addTaskMsg, removeTaskMsg, onPerformTask } from './task.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', log, getTasks)
router.get('/:id', log, getTaskById)
router.post('/', log, addTask)
router.put('/', updateTask)
router.delete('/:id', removeTask)
router.put('/start', onPerformTask)
// router.delete('/:id', requireAuth, requireAdmin, removeTask)

router.post('/:id/msg', requireAuth, addTaskMsg)
router.delete('/:id/msg/:msgId', requireAuth, removeTaskMsg)

export const taskRoutes = router