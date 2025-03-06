import libroRoutes from './routes/libroRoutes'
import userRoutes from './routes/userRoutes'
import prestamoRoutes from './routes/prestamoRoutes'
import express from 'express'

const app = express()
app.use('/libros', libroRoutes)
app.use('/users', userRoutes)
app.use('/prestamos', prestamoRoutes)


export default app