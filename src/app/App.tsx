import './App.css';
import { AuthProvider } from './providers/AuthContext';
import { AppContent } from './AppContent'

export const App: React.FC = () => {

    return <>
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    </>
};