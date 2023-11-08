import { ContextProvider } from './ContextProvider'

export default function Providers({ children }) {
  return <ContextProvider>{children}</ContextProvider>
}
