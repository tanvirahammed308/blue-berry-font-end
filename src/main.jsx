import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'
import DataLoaderProvider from './contexts/DataLoaderProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataLoaderProvider>

      <RouterProvider router={router} />

    </DataLoaderProvider>
  </StrictMode>,
)
